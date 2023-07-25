import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { usePrices } from "../../hooks/api/use-prices";
import { config } from "../../config";
import { getBaseToken, getTokenPriceInUSD } from "../../domain";
import { Token } from "@stakekit/common";
import { tokenToTokenDto } from "../../utils/mappers";
import { List, Maybe } from "purify-ts";
import { formatTokenBalance } from "../../utils";
import { useUnstakeOrClaimState } from "../../state/unstake";
import { usePositionData } from "../../hooks/use-position-data";
import { useTranslation } from "react-i18next";
import BigNumber from "bignumber.js";

export const useUnstakeOrClaimReview = () => {
  const integrationId = useParams<{ integrationId: string }>().integrationId!;

  const { position } = usePositionData(integrationId);

  const claimMatch = useMatch("claim/:integrationId/review");

  const { unstake, pendingActionSession } = useUnstakeOrClaimState();

  const { t } = useTranslation();

  const stakedBalance = useMemo(
    () =>
      position.chain((p) =>
        List.find((b) => b.type === "staked", p.metaData.balances)
      ),
    [position]
  );

  const amount = claimMatch
    ? pendingActionSession.map((val) =>
        formatTokenBalance(new BigNumber(val.amount ?? 0), 6)
      )
    : unstake.chain((u) => u.amount).map((val) => formatTokenBalance(val, 6));

  const text = position.map((p) => {
    switch (p.integrationData.config.type) {
      case "staking":
      case "liquid-staking":
        return t("position_details.unstake");

      case "lending":
      case "vault":
      default:
        return t("position_details.withdraw");
    }
  });

  const navigate = useNavigate();

  const { stakeExitTxGas } = useUnstakeOrClaimState();

  const pricesState = usePrices({
    currency: config.currency,
    tokenList: stakedBalance.mapOrDefault(
      (sb) => [sb.token, tokenToTokenDto(getBaseToken(sb.token as Token))],
      []
    ),
  });

  const gasFeeInUSD = useMemo(
    () =>
      position
        .chain((p) =>
          Maybe.fromNullable(pricesState.data).map((prices) => ({ prices, p }))
        )
        .chain((val) => stakeExitTxGas.map((gas) => ({ ...val, gas })))
        .map(({ prices, p, gas }) =>
          getTokenPriceInUSD({
            amount: gas.toString(),
            prices,
            token: getBaseToken(p.balanceData.token as Token),
          })
        ),
    [position, pricesState.data, stakeExitTxGas]
  );

  const tokenNetwork = position.mapOrDefault(
    (p) => p.balanceData.token.network,
    ""
  );

  const fee = useMemo(
    () =>
      stakeExitTxGas
        .chain((setg) => gasFeeInUSD.map((gfiu) => ({ setg, gfiu })))
        .mapOrDefault(
          ({ gfiu, setg }) =>
            `${setg.toPrecision(5)} ${tokenNetwork} ($${formatTokenBalance(
              gfiu,
              6
            )})`,
          ""
        ),
    [gasFeeInUSD, stakeExitTxGas, tokenNetwork]
  );

  const onClick = () => {
    navigate("../steps", { relative: "path" });
  };

  return {
    text,
    amount,
    position,
    stakedBalance,
    onClick,
    fee,
    claimMatch,
  };
};