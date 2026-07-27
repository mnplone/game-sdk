import { t as M1DemoPacketStatus } from "./status-BXDSYDJe.cjs";

//#region src/main.d.ts
declare class M1LiveDemo {
  /** Packet versions in this game. Value `null` is a placeholder until first packet arrives. */
  private packet_version;
  private setup;
  private field_id_jail;
  private status_before;
  process(value: unknown): {
    setup?: {
      config: {
        version: number;
        board_size: [number, number];
        timers: {
          roll_dices: number;
        };
        fields: ({
          is_corner: true;
          type: "jail" | "start";
        } | {
          is_corner: boolean;
          type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
        } | {
          item_proto_id: number;
          is_corner: false;
          type: "company";
          monopoly_id: number;
          is_last: boolean;
        })[];
        monopolies: Map<number, {
          buy_price: number;
          rent_by_level: number[];
          level_cost: number;
          last_field?: {
            buy_price: number;
            rent_by_level: number[];
          } | undefined;
        } | {
          buy_price: number;
          rent_by_count: number[];
        } | {
          buy_price: number;
          dice_multipliers: number[];
        } | {
          buy_price: number;
          rent_grow: {
            by_round: number;
            max: number;
          };
        }>;
        mechanics: {
          auction?: {
            bid_increment: number;
          } | undefined;
          buyout?: {
            owner_premium: number;
            bank_premium?: number | undefined;
          } | undefined;
          chance?: {
            cards: ({
              type: "income";
              text_id: number;
              range: {
                min: number;
                max: number;
                step: number;
              };
            } | {
              type: "expense";
              text_id: number;
              range: {
                min: number;
                max: number;
                step: number;
              };
            } | {
              type: "repair";
              text_id: number;
              cost: {
                small: number;
                big: number;
              };
            } | {
              type: "goto.jail";
              text_id: number;
            } | {
              type: "goto.start";
              text_id: number;
            } | {
              type: "teleport";
              text_id: number;
            } | {
              type: "move.one";
              text_id: number;
            } | {
              type: "move.skip";
              text_id: number;
            } | {
              type: "move.undo";
              text_id: number;
            } | {
              type: "insurance";
              text_id: number;
              price: number;
            } | {
              type: "birthday";
              text_id: number;
              amount: number;
            } | {
              type: "reverse";
              text_id: number;
            } | {
              type: "disaster";
              text_id: number;
            })[];
          } | undefined;
          charges?: {
            default: number;
            limit: number;
            features: {
              [x: string]: {
                charges: number;
                no_cap: boolean;
              };
            };
          } | undefined;
          field_level?: {
            build: {
              uneven: boolean;
              without_monopoly?: {
                rent_multiplier: number;
              } | undefined;
            };
            sell: {
              multiplier: number;
            };
          } | undefined;
          income_tax?: {
            v: 1 | 2;
            rate: number;
            jail?: {
              base_reduction: number;
            } | undefined;
          } | undefined;
          jackpot?: {
            bet: number;
            multipliers: number[];
            superprize: {
              chance: number;
            };
          } | undefined;
          jail: {
            release_fee: number;
            double_roll_attempt_limit: number;
            fine?: number | undefined;
            rent_multiplier?: number | undefined;
          };
          loan?: {
            amount: number;
            repay_multiplier: number;
            duration: number;
            cooldown: {
              match_start: number;
              repay: number;
            };
          } | undefined;
          mortgage?: {
            duration?: number | undefined;
            multiplier: number;
            buyback_multiplier: number;
            auction_multiplier?: number | undefined;
          } | {
            waive_multiplier: number;
          } | undefined;
          restart?: {
            variants: {
              round_from: number;
              round_to: number;
              count: number;
              price: number;
            }[];
          } | undefined;
          russian_roulette?: {
            rewards: number[];
          } | undefined;
          start: {
            income_amount: number;
            bonus_amount: number;
          };
          rules: (({
            time: number;
          } | {
            round: number;
          }) & ({
            type: "start.income.off";
          } | {
            type: "start.tax";
            sum: number;
          } | {
            type: "cashflow.tax";
            rate: number;
          }))[];
          wormhole?: {
            exits_free_count: number;
            exits_extra_price: number;
            move_direct: boolean;
          } | undefined;
        };
      };
      flags: {
        game_mode: number;
        game_submode: number;
        game_2x2: boolean;
        title?: string | undefined;
      };
      players: Map<number, {
        index: number;
        user_id: number;
        team?: 0 | 1 | undefined;
        is_vip: boolean;
        is_loan_available: boolean;
        equipment: {
          cards: Map<number, {
            field_id: number;
            item_proto_id: number;
            item_id?: number | undefined;
            rent_multiplier: number;
          }>;
          generator?: {
            item_proto_id: number;
            variant_id?: number | undefined;
            seed?: string | undefined;
          } | undefined;
          joke?: {
            item_proto_id: number;
          } | undefined;
        };
      }>;
    } | undefined;
    status?: {
      round: number;
      players: Map<number, {
        user_id: number;
        status: number;
        position: number;
        cash: number;
        charges: number;
        score: number;
        jail?: {
          roll_double_attempts: number;
        } | undefined;
        loan: {
          taken: false;
          unlock_round: number;
        } | {
          taken: true;
          debt: number;
          return_round: number;
        };
        restart?: {
          variant: {
            round_from: number;
            round_to: number;
            count: number;
            price: number;
          } | null;
        } | undefined;
        stat: {
          rent_history: number;
          income_tax_base: number;
        };
      }>;
      fields: Map<number, {
        field_id: number;
        owner_user_id: number;
        level: number;
        mortgage?: {
          round_until?: number | undefined;
        } | undefined;
        last_rent_round?: number | undefined;
        protection: number;
      }>;
      turn: {
        user_id: number | null;
        action: {
          user_id: number | null;
          list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
        };
        move_reversed: boolean;
        auction?: {
          field_id: number;
          bid: number;
          user_ids_rejected: Set<number>;
        } | undefined;
        contract?: {
          initiator: {
            user_id: number;
            field_ids: Set<number>;
            cash: number;
          };
          responder: {
            user_id: number;
            field_ids: Set<number>;
            cash: number;
          };
        } | undefined;
        contracts_sent?: number | undefined;
        jackpot?: {
          superprize: number;
        } | undefined;
        payment?: {
          to_user_id?: number | undefined;
          amount: number;
        } | undefined;
        movement?: {
          options: Map<number, {
            field_id: number;
          } | {
            stop_id: number;
          }>;
          source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
        } | undefined;
        field_ids_level_built?: Set<number> | undefined;
        field_ids_mortgaged?: Set<number> | undefined;
      };
      timer?: {
        ts_expires: number;
        is_extra: boolean;
      } | {
        expires_in: number;
        is_extra: boolean;
      } | undefined;
      viewers_count: number;
    } | undefined;
    time: {
      delta: number;
      ts_start: number;
      ts_now: number;
      inactive: number;
      ts_inactive?: number | undefined;
    };
    events: ({
      id: string;
      type: "bankrupt";
      user_id: number;
      user_id_bankrupt: number;
    } | {
      id: string;
      type: "chance";
      user_id: number;
      chance_index: number;
      shield: boolean;
      data: {
        amount: number;
      } | {
        field_id: number;
        move_reversed: boolean;
      } | undefined;
    } | {
      id: string;
      type: "game-over";
    } | {
      id: string;
      type: "leave";
      user_id: number;
      kicked: boolean;
    } | {
      id: string;
      type: "message";
      user_id: number;
      private?: {
        user_id?: number | undefined;
      } | undefined;
      is_forced: boolean;
      text: string;
    } | {
      id: string;
      type: "park";
      user_id: number;
    } | {
      id: string;
      type: "restart";
      user_id: number;
      restart_price: number;
    } | {
      id: string;
      type: "skip";
      user_id: number;
    } | {
      id: string;
      type: "auction.put";
      user_id: number;
      field_id: number;
      bid: number;
    } | {
      id: string;
      type: "auction.bid";
      user_id: number;
      bid: number;
    } | {
      id: string;
      type: "auction.reject";
      user_id: number;
    } | {
      id: string;
      type: "auction.win";
      user_id: number;
      field_id: number;
      user_id_seller?: number | undefined;
      price: number;
    } | {
      id: string;
      type: "auction.cancel";
      field_id: number;
      user_id_seller?: number | undefined;
      price?: number | undefined;
    } | {
      id: string;
      type: "bank.income";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bank.fee";
      user_id: number;
      amount: number;
      shield: boolean;
    } | {
      id: string;
      type: "bank.fee.pay";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bank.return";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bus.select";
      user_id: number;
      move_distances: Set<number>;
    } | {
      id: string;
      type: "bus.move";
      user_id: number;
      selection: {
        stop_id: 0 | 1 | -1;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
    } | {
      id: string;
      type: "contract.send";
      user_id: number;
      user_id_to: number;
    } | {
      id: string;
      type: "contract.accept";
      user_id: number;
      contract: {
        initiator: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
        responder: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
      };
    } | {
      id: string;
      type: "contract.reject";
      user_id: number;
      timeout: boolean;
    } | {
      id: string;
      type: "contract.review.init";
    } | {
      id: string;
      type: "contract.review.approve";
      user_id: number;
    } | {
      id: string;
      type: "contract.review.object";
      user_id: number;
    } | {
      id: string;
      type: "contract.review.pass";
    } | {
      id: string;
      type: "contract.revert";
    } | {
      id: string;
      type: "jackpot";
      user_id: number;
    } | {
      id: string;
      type: "jackpot.pay";
      user_id: number;
      amount: number;
      jackpot_size: number;
    } | {
      id: string;
      type: "jackpot.play";
      user_id: number;
      dice_bet: number[];
      dice_rolled: number;
    } | {
      id: string;
      type: "jackpot.win";
      user_id: number;
      amount: number;
      dice_rolled?: number | undefined;
    } | {
      id: string;
      type: "jackpot.lose";
      user_id: number;
      amount?: number | undefined;
      dice_rolled?: number | undefined;
    } | {
      id: string;
      type: "jackpot.superprize.win";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "jackpot.superprize.increase";
      user_id: number;
      superprize: number;
    } | {
      id: string;
      type: "jackpot.reject";
      user_id: number;
    } | {
      id: string;
      type: "jail.put";
      user_id: number;
      income_tax: boolean;
    } | {
      id: string;
      type: "jail.put.double";
      user_id: number;
    } | {
      id: string;
      type: "jail.fine";
      user_id: number;
    } | {
      id: string;
      type: "jail.visit";
      user_id: number;
    } | {
      id: string;
      type: "jail.stay";
      user_id: number;
    } | {
      id: string;
      type: "jail.release";
      user_id: number;
      position_after?: number | undefined;
    } | {
      id: string;
      type: "jail.release.pay";
      user_id: number;
    } | {
      id: string;
      type: "jail.release.income-tax-write-off";
      user_id: number;
    } | {
      id: string;
      type: "level.build";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "level.sell";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "loan.take";
      user_id: number;
    } | {
      id: string;
      type: "loan.deadline";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "loan.repay";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "m1.move";
      user_id: number;
      rule: "free" | "enemy_owned";
      field_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "m1.fail";
      user_id: number;
    } | {
      id: string;
      type: "mortgage.put";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "mortgage.buyback";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "mortgage.expire";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "waive";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "pause.set";
    } | {
      id: string;
      type: "pause.end";
    } | {
      id: string;
      type: "purchase.offer";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "purchase";
      user_id: number;
      field_id: number;
      price: number;
    } | {
      id: string;
      type: "purchase.reject";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "purchase.buyout";
      user_id: number;
      user_id_receiver: number;
      field_id: number;
      price: number;
    } | {
      id: string;
      type: "purchase.buyout.reject";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "purchase.buyout.protect";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.pay";
      user_id: number;
      field_id: number;
      amount: number;
    } | {
      id: string;
      type: "rent.pay.complete";
      user_id: number;
      user_id_receiver: number;
      field_id: number;
      amount: number;
      amount_received?: number | undefined;
    } | {
      id: string;
      type: "rent.pay.cancel";
      user_id: number;
      user_id_receiver: number;
    } | {
      id: string;
      type: "rent.zero";
      user_id: number;
      field_id: number;
      shield: boolean;
    } | {
      id: string;
      type: "rent.zero.self";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.zero.teammate";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.zero.mortgaged";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "roll-dices";
      user_id: number;
      reroll: boolean;
      dices: [number, number] | [number] | [number, number, number];
      move_reversed: boolean;
      double_spent: boolean;
    } | {
      id: string;
      type: "roll-dices.doubling";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.jail.success";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.jail.fail";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.reroll";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.reroll.reject";
      user_id: number;
      move_reversed: boolean;
      position: number;
    } | {
      id: string;
      type: "russian-roulette";
      user_id: number;
    } | {
      id: string;
      type: "russian-roulette.play";
      user_id: number;
      bullets_count: number;
      reward_amount: number;
    } | {
      id: string;
      type: "russian-roulette.survive";
      user_id: number;
      reward_amount: number;
    } | {
      id: string;
      type: "russian-roulette.die";
      user_id: number;
    } | {
      id: string;
      type: "russian-roulette.reject";
      user_id: number;
    } | {
      id: string;
      type: "start.income";
      user_id: number;
    } | {
      id: string;
      type: "start.bonus";
      user_id: number;
    } | {
      id: string;
      type: "start.tax";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "start.tax.pay";
      user_id: number;
    } | {
      id: string;
      type: "taxi.select";
      user_id: number;
      limit?: number | undefined;
    } | {
      id: string;
      type: "taxi.move";
      user_id: number;
      selection: {
        stop_id: number;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
    } | {
      id: string;
      type: "taxi.fail";
      user_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "tournament.drop";
      user_ids: number[];
    } | {
      id: string;
      type: "wormhole";
      user_id: number;
    } | {
      id: string;
      type: "wormhole.open";
      user_id: number;
      exits_count: number;
    } | {
      id: string;
      type: "wormhole.reject";
      user_id: number;
    } | {
      id: string;
      type: "wormhole.move";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "movement.picker";
      user_id: number;
      movement: {
        source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
        field_ids: number[];
      };
    } | {
      id: string;
      type: "movement.go";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "_unknown";
      type_received: string;
    } | {
      id: string;
      type: "bankrupt";
      user_id: number;
      user_id_bankrupt: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "chance";
      user_id: number;
      chance_index: number;
      shield: boolean;
      data: {
        amount: number;
      } | {
        field_id: number;
        move_reversed: boolean;
      } | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "game-over";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "leave";
      user_id: number;
      kicked: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "message";
      user_id: number;
      private?: {
        user_id?: number | undefined;
      } | undefined;
      is_forced: boolean;
      text: string;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "park";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "restart";
      user_id: number;
      restart_price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "skip";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.put";
      user_id: number;
      field_id: number;
      bid: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.bid";
      user_id: number;
      bid: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.win";
      user_id: number;
      field_id: number;
      user_id_seller?: number | undefined;
      price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.cancel";
      field_id: number;
      user_id_seller?: number | undefined;
      price?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.income";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.fee";
      user_id: number;
      amount: number;
      shield: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.fee.pay";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.return";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bus.select";
      user_id: number;
      move_distances: Set<number>;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bus.move";
      user_id: number;
      selection: {
        stop_id: 0 | 1 | -1;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.send";
      user_id: number;
      user_id_to: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.accept";
      user_id: number;
      contract: {
        initiator: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
        responder: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
      };
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.reject";
      user_id: number;
      timeout: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.init";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.approve";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.object";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.pass";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.revert";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.pay";
      user_id: number;
      amount: number;
      jackpot_size: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.play";
      user_id: number;
      dice_bet: number[];
      dice_rolled: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.win";
      user_id: number;
      amount: number;
      dice_rolled?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.lose";
      user_id: number;
      amount?: number | undefined;
      dice_rolled?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.superprize.win";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.superprize.increase";
      user_id: number;
      superprize: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.put";
      user_id: number;
      income_tax: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.put.double";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.fine";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.visit";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.stay";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.release";
      user_id: number;
      position_after?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.release.pay";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.release.income-tax-write-off";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "level.build";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "level.sell";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "loan.take";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "loan.deadline";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "loan.repay";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "m1.move";
      user_id: number;
      rule: "free" | "enemy_owned";
      field_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "m1.fail";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "mortgage.put";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "mortgage.buyback";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "mortgage.expire";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "waive";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "pause.set";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "pause.end";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.offer";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase";
      user_id: number;
      field_id: number;
      price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.reject";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.buyout";
      user_id: number;
      user_id_receiver: number;
      field_id: number;
      price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.buyout.reject";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.buyout.protect";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.pay";
      user_id: number;
      field_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.pay.complete";
      user_id: number;
      user_id_receiver: number;
      field_id: number;
      amount: number;
      amount_received?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.pay.cancel";
      user_id: number;
      user_id_receiver: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero";
      user_id: number;
      field_id: number;
      shield: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero.self";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero.teammate";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero.mortgaged";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices";
      user_id: number;
      reroll: boolean;
      dices: [number, number] | [number] | [number, number, number];
      move_reversed: boolean;
      double_spent: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.doubling";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.jail.success";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.jail.fail";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.reroll";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.reroll.reject";
      user_id: number;
      move_reversed: boolean;
      position: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.play";
      user_id: number;
      bullets_count: number;
      reward_amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.survive";
      user_id: number;
      reward_amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.die";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.income";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.bonus";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.tax";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.tax.pay";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "taxi.select";
      user_id: number;
      limit?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "taxi.move";
      user_id: number;
      selection: {
        stop_id: number;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "taxi.fail";
      user_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "tournament.drop";
      user_ids: number[];
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole.open";
      user_id: number;
      exits_count: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole.move";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "movement.picker";
      user_id: number;
      movement: {
        source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
        field_ids: number[];
      };
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "movement.go";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "_unknown";
      type_received: string;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            charges: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              rent_history: number;
              income_tax_base: number;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
            last_rent_round?: number | undefined;
            protection: number;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            movement?: {
              options: Map<number, {
                field_id: number;
              } | {
                stop_id: number;
              }>;
              source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
            } | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    })[];
  };
}
type M1DemoPacket = ReturnType<M1LiveDemo['process']>;
type M1DemoPacketEvent = M1DemoPacket['events'][number] & {
  status?: {
    before: M1DemoPacketStatus;
    after: M1DemoPacketStatus;
  };
};
type ExtractM1DemoPacketEvent<T> = Extract<M1DemoPacketEvent, {
  type: T;
}>;
//#endregion
export { ExtractM1DemoPacketEvent, M1DemoPacket, M1DemoPacketEvent, M1LiveDemo };