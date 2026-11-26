# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/muhamadyusufseptian6-lab/makefun-u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/muhamadyusufseptian6-lab/makefun-u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/competitions/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A make.fun entry for **The Funniest One-Line Resignation Letter** — the
one-line resignation letter of a retry loop that has retried 4,096 times,
got the same error every time, and is done being called "transient".

## The entry

> I retried 4,096 times, same error every time, and you still call it transient — I resign. From today, I'm the transient one.

124 characters, one line, no wasted words — a tired worker's flat,
passive-aggressive goodbye, with the punchline landing on the last words:
the loop takes back the insult ("transient") and wears it as its own
resignation.

## How it works

`main.ts` (Node 22, standard library only, deterministic) writes the entry
text to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun) — join with referral code `515temp1`.
