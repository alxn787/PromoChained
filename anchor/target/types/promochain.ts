/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/promochain.json`.
 */
export type Promochain = {
  "address": "8oGU39Svs87zZzAYSfMzE4j2Bt1QtKVpsSxWGKtRh8b6",
  "metadata": {
    "name": "promochain",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "initConfig",
      "discriminator": [
        23,
        235,
        115,
        232,
        168,
        96,
        1,
        231
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initGame",
      "discriminator": [
        251,
        46,
        12,
        208,
        184,
        148,
        157,
        73
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "game",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  97,
                  109,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "admin"
              },
              {
                "kind": "arg",
                "path": "gameCode"
              }
            ]
          }
        },
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "usdcMint"
        },
        {
          "name": "vault",
          "docs": [
            "vault_token_account. It's safe because",
            "it's a PDA."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "admin"
              },
              {
                "kind": "arg",
                "path": "gameCode"
              }
            ]
          }
        },
        {
          "name": "vaultTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "vault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "usdcMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "adminUsdcTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "admin"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "usdcMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "gameCode",
          "type": "string"
        },
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "endTime",
          "type": "i64"
        },
        {
          "name": "prizeAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "game",
      "discriminator": [
        27,
        90,
        166,
        125,
        74,
        100,
        121,
        18
      ]
    },
    {
      "name": "programConfig",
      "discriminator": [
        196,
        210,
        90,
        231,
        144,
        149,
        140,
        63
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidMint",
      "msg": "The provided token mint is not the expected USDC mint."
    },
    {
      "code": 6001,
      "name": "alreadyClaimed",
      "msg": "The prize for this game has already been claimed."
    },
    {
      "code": 6002,
      "name": "unauthorizedQuizMaster",
      "msg": "The caller is not the authorized quiz master for this game."
    },
    {
      "code": 6003,
      "name": "nameTooLong",
      "msg": "Game name is too long."
    },
    {
      "code": 6004,
      "name": "gameCodeTooLong",
      "msg": "Game code is too long."
    },
    {
      "code": 6005,
      "name": "invalidTimeRange",
      "msg": "End time must be after start time."
    },
    {
      "code": 6006,
      "name": "adminTokenAccountNotProvided",
      "msg": "Admin token account not provided for SPL transfer."
    },
    {
      "code": 6007,
      "name": "vaultTokenAccountNotProvided",
      "msg": "Vault token account not provided for SPL transfer."
    },
    {
      "code": 6008,
      "name": "treasuryTokenAccountNotProvided",
      "msg": "Treasury token account not provided for SPL transfer."
    },
    {
      "code": 6009,
      "name": "invalidAdmin",
      "msg": "Invalid admin for this game."
    },
    {
      "code": 6010,
      "name": "invalidTokenAccount",
      "msg": "Invalid token account for the game's token mint or native SOL requirement."
    },
    {
      "code": 6011,
      "name": "numericOverflow",
      "msg": "Numeric overflow occurred."
    },
    {
      "code": 6012,
      "name": "invalidTreasury",
      "msg": "Invalid treasury account."
    },
    {
      "code": 6013,
      "name": "unauthorizedProgramAuthority",
      "msg": "The caller is not the authorized program authority."
    },
    {
      "code": 6014,
      "name": "treasuryFeeTooHigh",
      "msg": "The treasury fee percentage is too high."
    },
    {
      "code": 6015,
      "name": "treasuryAddressBlank",
      "msg": "The treasury address cannot be blank."
    },
    {
      "code": 6016,
      "name": "configNotInitialized",
      "msg": "Config not initialized."
    },
    {
      "code": 6017,
      "name": "winnerTokenAccountNotProvided",
      "msg": "Winner token account not provided for SPL winner."
    }
  ],
  "types": [
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "gameCode",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "prizeAmount",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "pubkey"
          },
          {
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "name": "usdcMint",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "programConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasuryPubkey",
            "type": "pubkey"
          },
          {
            "name": "authorityPubkey",
            "type": "pubkey"
          },
          {
            "name": "treasuryFee",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "usdcMint",
            "type": "pubkey"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "programAuthority",
      "type": "pubkey",
      "value": "1tVojvZd9CVBN9Ze3a8uz46sc93xSukBiVik14JFJQ"
    }
  ]
};
