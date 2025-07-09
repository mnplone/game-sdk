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
          type: "start" | "jail";
        } | {
          is_corner: boolean;
          type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
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
        }>;
        mechanics: {
          auction?: {
            bid_increment: number;
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
              type: "go-to-jail";
              text_id: number;
            } | {
              type: "teleport";
              text_id: number;
            } | {
              type: "skip-move";
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
          field_level?: {
            sell_multiplier: number;
            build_uneven: boolean;
            build_without_monopoly: boolean;
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
          } | undefined;
          restart?: {
            variants: {
              round_from: number;
              round_to: number;
              count: number;
              price: number;
            }[];
          } | undefined;
          start: {
            income_amount: number;
            bonus_amount: number;
          };
          time_rules: ({
            type: "start.none";
            time: number;
          } | {
            type: "start.tax";
            time: number;
            sum: number;
          } | {
            type: "rent.tax";
            time: number;
            rate: number;
          })[];
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
      };
      players: Map<number, {
        index: number;
        user_id: number;
        is_vip: boolean;
        is_loan_available: boolean;
        equipment: {
          cards: Map<number, {
            field_id: number;
            item_proto_id: number;
            item_id?: number | undefined;
            rent_multiplier: number;
          }>;
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
      }>;
      fields: Map<number, {
        field_id: number;
        owner_user_id: number;
        level: number;
        mortgage?: {
          round_until?: number | undefined;
        } | undefined;
      }>;
      turn: {
        user_id: number | null;
        action: {
          user_id: number | null;
          list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
        field_ids_move?: Map<number, {
          stop: number;
        } | {
          field_id: number;
        }> | undefined;
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
      type: "message";
      user_id: number;
      private?: {
        user_id?: number | undefined;
      } | undefined;
      is_forced: boolean;
      text: string;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "chance";
      user_id: number;
      chance_index: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "bank.fee";
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "bus.select";
      user_id: number;
      field_ids_move: Set<number>;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "jail.put";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "rent.pay.complete";
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "rent.zero";
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "roll-dices";
      user_id: number;
      dices: [number, number | undefined, number | undefined];
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "triple";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    } | {
      id: string;
      type: "triple.move";
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
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
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
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
        };
      };
    })[];
  };
}
type M1DemoPacket = ReturnType<M1LiveDemo['process']>;
type M1DemoPacketEvent = M1DemoPacket['events'][number];
type ExtractM1DemoPacketEvent<T> = Extract<M1DemoPacketEvent, {
  type: T;
}>; //#endregion
export { ExtractM1DemoPacketEvent, M1DemoPacket, M1DemoPacketEvent, M1LiveDemo };