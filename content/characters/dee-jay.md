---
name: "Dee Jay"
subtitle: "The Kickboxing Musician"
overview: "Dee Jay 是一名以 charge 系统为核心的节奏型角色，拥有出色的中距离控制、强大的 Jus Cool 姿态混合、以及高效的 Air Slasher 波动压制。他的 Jackknife Maximum 提供可靠的 anti-air，Rolling Sobat 则是优秀的接近和 combo 工具。Dee Jay 的核心在于利用 feint（假动作）系统打乱对手节奏，通过 Jus Cool 的多段派生在对手身边制造无法预测的进攻。"
keyMoves:
  - name: "Air Slasher (MP)"
    input: "[4]6MP"
    description: "Dee Jay 的核心波动技。MP 版本 17f startup，600 伤害，-5 on block。HP 版本打两段（500+500），OD 版本仅 10f startup 且近距离打两段、远距离击倒。LP 版本是 feint 假动作，用于打乱对手 anti-fireball 节奏。波动控制是 Dee Jay 中距离博弈的基础。"
    startup: 17
    active: 0
    recovery: 27
    damage: 600
  - name: "Jackknife Maximum (MK)"
    input: "[2]8MK"
    description: "Dee Jay 的 charge anti-air。MK 版本 6f startup，600+500 伤害，击倒 +41。HK 版本三段（600+200+500）伤害更高。OD 版本完全无敌 1-11f，是可靠的逆转技。注意 MK/HK 版本打不到蹲姿对手。LK 版本是 feint 可以接空中攻击。"
    startup: 6
    active: 8
    recovery: 28
    damage: 1100
  - name: "Rolling Sobat (MK)"
    input: "236MK"
    description: "Dee Jay 的核心接近和 combo 工具。MK 版本 12f startup，1000 伤害，击倒 +34，-6 on block。HK 版本两段（700+700），+2 on hit 但 -10 on block 风险较大。OD 版本击倒 +39 且仅 -2 on block。LK 版本是 feint 前移，用于诱导对手反应。"
    startup: 12
    active: 3
    recovery: 23
    damage: 1000
  - name: "Machine Gun Upper (LP)"
    input: "214LP"
    description: "Dee Jay 最重要的 combo ender。LP 版本 15f startup，总伤害 1650，击倒 +34。MP 版本（22f，1900）从重攻击确认。HP 版本（28f，2200）从 juggle 确认。OD 版本 2500 总伤害。LP 版本可以从 Medium 攻击直接 cancel，是 BnB 连段的核心收尾。"
    startup: 15
    active: 0
    recovery: 35
    damage: 1650
  - name: "Jus Cool"
    input: "214K"
    description: "Dee Jay 最独特的工具——一个闪避姿态，有四种派生：LK（下段 800→900 OD），MK（中段 overhead 1000→1100 OD），HK（高段 1000→1000 OD），以及前冲/后撤选项。OD 版本命中后可 juggle。前冲派生 1-20f 穿投射物。核心混合技，让对手猜不透你的下一步。"
    startup: 13
    active: 0
    recovery: 36
    damage: 0
  - name: "Jus Cool → MK (Overhead)"
    input: "214K~MK"
    description: "Jus Cool 的中段 overhead 派生，是 Dee Jay 核心混合工具之一。命中击倒 +27，+1 on block 非常安全。OD 版本命中 +7 到击倒。搭配 LK 下段派生形成高/低二选一，是起身压制和持续进攻的关键。"
    startup: 25
    active: 5
    recovery: 16
    damage: 1000
  - name: "Back + HK"
    input: "4HK"
    description: "Dee Jay 最好的 whiff punish 和 anti-air 工具之一。7f startup，500+300 两段伤害，两段都可取消接 Special/Super。+1 on hit，-5 on block。对空和 combo 入口双重用途，Drive Rush 后可以接 cr.HP 进入连段。"
    startup: 7
    active: 6
    recovery: 20
    damage: 800
  - name: "The Greatest Sobat (SA1)"
    input: "236236K"
    description: "Dee Jay 的 Level 1 Super Art。7f startup，2000 伤害，击倒 +32，-12 on block。破甲。作为 combo ender（从 Rolling Sobat 或 Jackknife juggle 后接）或 reversal 使用。伤害不算顶尖但确认稳定。"
    startup: 7
    active: 4
    recovery: 33
    damage: 2000
  - name: "Sunrise Festival (SA2)"
    input: "236236P"
    description: "Dee Jay 的 Level 2 Super Art，有 LP/MP/HP 三个版本，完全无敌 1-16f。LP 版本最简单输入节奏，MP 版本中等难度有 ender 选择，HP 版本最难但伤害最高（1700-3000）。MP/HP 版本需要按 LP-MP-HP-LK-MK-HK 节奏输入，是高风险高回报的 reversal。"
    startup: 12
    active: 5
    recovery: 46
    damage: 3000
  - name: "Weekend Pleasure (CA)"
    input: "214214P"
    description: "Dee Jay 的 Critical Art（Level 3 Super）。9f startup，4000 伤害（CA 4500），完全无敌 1-13f。终极逆转和 combo ender。从 OD Rolling Sobat 或 OD Jackknife 后可接。击倒 +26（CA +22）。保留到击杀或关键时刻。"
    startup: 9
    active: 6
    recovery: 48
    damage: 4000
tips:
  - "开局用 HP Air Slasher (17f, 两段 500+500) 控制中距离，建立 charge 节奏。对手跳入用 MK Jackknife Maximum (6f) 或 OD Jackknife (完全无敌 1-11f) 对空。对手在远距离按按钮用 LP Air Slasher feint 诱导反应，然后 Rolling Sobat MK (12f, 1000 dmg) 突进。确认命中后接 Machine Gun Upper LP 收尾。HP Air Slasher 命中后你是 +3，可以继续推进。"
  - "核心连段路线：中屏 BnB 为 2MP → DR → 2HP → 214HP (MG Upper HP)，约 2800+ 伤害。角落用 j.HP → B+HK → cr.HP → 214MP (MG Upper MP)。Drive Rush 路线：st.HP → DR → B+HK → cr.HP → OD Rolling Sobat → SA1，约 3500+。Light 确认：2LP → 2LP → 214LP (MG Upper LP)。Anti-air 确认：B+HK → DR → cr.HP → 214HP。"
  - "立回中善用 2MP (+4 on hit, -1 on block) 和 5MK (+6 on hit, -1 on block) 试探。2MP 是 Dee Jay 最好的确认按钮，6f startup 可以 cancel 进任何 Special。5MK 距离更长用于中距离 footsies。B+HK (7f, 两段可取消) 是最好的 whiff punish 工具。2HK (14f, KD+33) 是 sweep 但 -11 on block，谨慎使用。"
  - "Jus Cool 是 Dee Jay 的灵魂。214K 后有 LK（下段）、MK（overhead 中段）、HK（高段击倒）、前冲、后撤五个选项。OD Jus Cool 命中后可 juggle 接连段。前冲派生 1-20f 穿投射物，是应对波动角色的利器。起身压制时用 Jus Cool 高/低混合让对手无法安宁防御。214K~MK (overhead) 是 +1 on block 非常安全，214K~LK (下段) +2 on hit 也不亏。"
  - "对付远距离波动角色（Guile, Dhalsim, JP），不要急着跳入。用 Perfect Parry 吸波节省 Drive Gauge，找对手波动的间隙 Rolling Sobat 或 DR 突进。LP Air Slasher feint 是打乱对手 anti-fireball 节奏的好工具——对手提前跳或 DI，你可以用 Jackknife 惩罚。进入中距离后用 Jus Cool 混合持续压制不放手。"
  - "Dee Jay 的 feint 系统是他最被低估的工具。LP Air Slasher 是假波动（21f startup 但无投射物），LK Rolling Sobat 是假突进（前移但无攻击），LK Jackknife 是假升龙（可以接空中攻击）。三个 feint 让对手永远不确定你的下一步。混合使用真/假版本是高水平 Dee Jay 的标志。"
  - "Rolling Sobat 的使用节奏：MK 版本 (12f, -6 on block) 是主力——从中距离确认 2MP 后 cancel 进是最稳定的接近方式。HK 版本 (+2 on hit 但 -10 on block) 风险大，只在确认命中时使用。OD 版本 (-2 on block, 击倒 +39) 是最安全的，用于 Drive Rush 延伸连段。不要在远距离 whiff Rolling Sobat——recovery 很长会被重罚。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "中距离博弈对决，Dee Jay 的 feint 系统可以干扰 Luke 的 Flash Knuckle 节奏"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 接近和 Sand Blast 波动。他的 Perfect Flash Knuckle HP (+4 on block) 是强大的压制工具——不要乱按按钮，看清他是否 charged。用 HP Air Slasher 和他的 Sand Blast 对波，两者速度相近。LP Air Slasher feint 可以诱导 Luke 提前 Flash Knuckle 或 DI，然后用 Jackknife Maximum 惩罚。"
      - "中距离你的 2MP (6f, +4 on hit) 和 5MK (+6 on hit) 和 Luke 的按钮速度相当。关键是不要让他 free 地建立 Flash Knuckle 压力循环——用 Rolling Sobat MK 在他的 gap 中打断。Luke 的 5HK 有超远距离但 -6 on block，用 2MP 确认后 DR 惩罚。Jus Cool 的前冲派生可以穿他的 Sand Blast，从意想不到的角度接近。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用。DR 用于确认 2MP 命中后延伸连段。Luke 的 CA (Pale Rider, 10f) 比你的 Weekend Pleasure (9f) 稍慢，CA 对决中你有微弱优势。OD Jackknife Maximum (完全无敌 1-11f) 是你最好的逆转，用于反制他的持续压制。"
    keyMoves: ["Air Slasher (MP)", "Rolling Sobat (MK)", "OD Jackknife Maximum"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "波动对波动，Dee Jay 的 charge 波动和 feint 让 Ryu 的 Denjin 节奏被打乱"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 后的强化 Hadoken 和 Hashogeki。Denjin Hadoken 有装甲，不要用普通攻击挑战——用 OD Air Slasher (10f startup) 或 DI 打掉。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以用 2MP 惩罚。你的 HP Air Slasher 两段命中 +3 on hit，波动战后你仍然有帧数优势。"
      - "Ryu 的 5HK 和 sweep (2HK) 是主要 poke 但都是负帧。用 B+HK (7f, 两段可取消) 在他的 poke 恢复帧打他。2MP → Rolling Sobat MK 是稳定的确认路线。Ryu 的 Shoryuken LP 是 6f startup，你的 OD Jackknife 更快（6f 且完全无敌）。Jus Cool 高/低混合让 Ryu 在中距离防守很被动。"
      - "DI 在 Ryu 出 heavy Hadoken 或 sweep 时使用。DR 用于快速接近不让他 free charge Denjin。Ryu 的 CA (Shin Shoryuken, 9f) 和你的速度一样，不要在他有 CA 时 whiff 大招。SA2 Sunrise Festival (完全无敌 1-16f) 可以安全地穿过他的波动 punish。对局节奏：波动战建立优势后 Rolling Sobat 接近，Jus Cool 持续压制。"
    keyMoves: ["HP Air Slasher", "B+HK", "Rolling Sobat (MK)"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的长距离 poke 和 Serenity Stream 让 Dee Jay 接近困难，需要耐心找突破口"
    strategies:
      - "Chun-Li 的 5MP、2MP、5HP 判定距离极长，远中距离是她的领地。注意她的 Serenity Stream 姿态会蹲低避开你的 HP Air Slasher。不要盲目发波——等她姿态结束或出招后再进攻。她的 2HP 是 -12 on block 可以用 Rolling Sobat MK 惩罚。用 DR 穿过她的波动和 poke 是关键接近手段。"
      - "一旦进入 2MP 距离，Chun-Li 的长距离普通技不再有优势。你的 Jus Cool 高/低混合在近距离比她的按钮更有效。214K~MK (overhead, +1 on block) 是安全的持续压力工具。anti-air 她的 jump 用 MK Jackknife 或 OD Jackknife。她的 5HK recovery 长可以 B+HK 惩罚。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 用于突破她的中距离 poke 墙——从 2MP~DR 确认进入连段。Chun-Li 的 OD Tensho Kicks 是她的逆转但不是完全无敌，用 OD Jackknife (完全无敌 1-11f) 可以安全地反制她的持续进攻。CA 保留到关键时刻。"
    keyMoves: ["Drive Rush", "Jus Cool", "OD Jackknife Maximum"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时疯狂压制，feint 系统让他无法安心 drink"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口用 Rolling Sobat 和 Jus Cool 疯狂进攻。开局立刻用 DR 或 Rolling Sobat MK 接近，不给他喝酒的空间。LP Air Slasher feint 可以诱导 Jamie 提前出按钮，然后用 Rolling Sobat 惩罚。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2MP 惩罚。"
      - "Jamie 的 DP（OD The Devil Inside）是他唯一的逆转选项但不是完全无敌。当 Jamie 没有 meter 时可以大胆起身压制。用 Jus Cool 的高/低混合（214K~MK overhead 和 214K~LK 下段）持续施压，mix 在 throw 之间。Jamie 的 2LP 是 4f 可以 mash，但你的 2MP (+4 on hit) frame trap 可以打他 mash。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 时使用。DR 用于快速接近不给他喝酒空间。Jamie 的 SWK（stepkick）是 frame trap 工具，注意不要乱按按钮。CA 在他跳入或出危险的大招时使用。始终保持进攻节奏——Dee Jay 的持续压力是 Jamie 最大的噩梦。"
    keyMoves: ["Rolling Sobat (MK)", "Jus Cool", "Air Slasher (MP)"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的 Sonic Boom 控制和 Flash Kick 对空让 Dee Jay 的接近非常困难"
    strategies:
      - "Guile 是 Dee Jay 最不利的对局之一。Sonic Boom + Sonic Blade 的组合让你的 Air Slasher 无法有效对抗。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一。核心方法是用 Perfect Parry 吸波节省 Drive Gauge，然后找时机 DR 或 Rolling Sobat 突进。HP Air Slasher 和 Guile 对波时注意他可以 charge Sonic Boom 更快。"
      - "LP Air Slasher feint 是对付 Guile 的隐藏武器——Guile 玩家习惯看到波动就 Flash Kick 或 Perfect Parry，feint 可以让他们 whiff 然后你 Rolling Sobat 惩罚。Jus Cool 前冲派生 (1-20f 穿投射物) 可以穿过 Sonic Boom 接近。一旦进入中近距离，Guile 的普通技不如你的好。2MP (+4) 和 B+HK 是核心确认工具。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用，可以打断他的蓄力节奏。DR 在读准他的波动时机后突进，不要盲目 DR 因为 Flash Kick 会打你。CA 保留到关键时刻——Guile 防守很强可能需要 CA 来破防。耐心是关键：逐步缩短距离，利用 feint 和 Jus Cool 前冲制造接近机会。"
    keyMoves: ["Perfect Parry", "LP Air Slasher (feint)", "Jus Cool (前冲派生)"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的机动性需要冷静应对，Jus Cool 混合在她防御弱时特别有效"
    strategies:
      - "Kimberly 的核心威胁是传送混合（run stop overhead/low/throw）和幻影 dive kick。用 MK Jackknife (6f) 或 OD Jackknife anti-air 她的空中进攻。她的 teleport 有明显的启动动画，用 2MP 或 5LP 打断她 teleport 后的恢复帧。不要乱出重攻击——她会 teleport 绕过。"
      - "Kimberly 的防御很弱：她没有完全无敌的 DP，只有 OD Bushin Senpukyaku 作为逆转。这意味着你可以大胆地在她起身用 Jus Cool 高/低混合压制。214K~MK (overhead) 和 214K~LK (下段) 的二选一让她无法安心防御。她的 5HK 是 -6 on block 可以用 Rolling Sobat MK 惩罚。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离。CA 在她空中进攻时用，因为她在空中无法变招。距离控制：不要被她压制在角落，如果被推到角落用 OD Jackknife 或 SA2 逆转。"
    keyMoves: ["OD Jackknife Maximum", "Jus Cool", "Rolling Sobat (MK)"]
  - opponent: "juri"
    difficulty: "even"
    summary: "双方都想进攻——Dee Jay 的 feint 系统可以干扰 Juri 的 Fuha 充能节奏"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是最脆弱的，这是你进攻的最佳窗口。用 Rolling Sobat MK 或 DR 赶在她完成充电前打断。Juri 有 stock 时她的 623HP (DP) 和 214HP (hashogeki) 都会消耗 stock 变强，注意她的 stock 数量。Juri 的 5HP 是 -7 on block 用 B+HK 惩罚。"
      - "中距离是关键战场：Juri 的 5MP 和 2MP 速度和你的差不多，但她的 2MK 是低攻击有更长距离。用 2MP (+4 on hit) 作为主要确认工具。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 Rolling Sobat MK 惩罚。你的 Jus Cool 混合比她的 Fuha 循环更灵活——持续用 feint 和 Jus Cool 保持进攻主动。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是她最好的逆转，注意在她有 meter 时不要 predictable。SA2 Sunrise Festival 是完全无敌逆转可以穿过她的进攻。CA 保留到中后期回合。对局节奏：始终主动，用 feint 和 Jus Cool 压制不让她 free charge。"
    keyMoves: ["2MP", "Rolling Sobat (MK)", "LP Air Slasher (feint)"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Dee Jay 的压力循环可以用 Jinrai 反制——谁先建立节奏谁赢"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick 压力和 Run 系统接近。Jinrai LK (-3 on block) 是安全的持续压力——不要乱按按钮，等他出 follow-up 再反应。如果 Ken 用 Run → Dragonlash 接近，用 MK Jackknife (6f) 打他。Ken 的 HP Hadoken (+3 on hit) 和你的 HP Air Slasher (+3 on hit) 帧数相同，波动战是纯技术对抗。"
      - "用 2MP (+4 on hit) 和 5MK (+6 on hit) 在中距离和他交换按钮。Ken 想保持 Jinrai 压力循环，你的 Rolling Sobat MK 可以打断他的 gap。Ken 的 Run~Stop 是 +2 on block 但 Rolling Sobat MK 打两段可以穿过去。Jus Cool 的高/低混合让 Ken 在中距离防守有压力。B+HK (7f, 两段可取消) 是 whiff punish Ken 5HK 的好工具。"
      - "DI 在 Ken 出 HP Hadoken 或 Dragonlash Kick 时使用。DR 用于确认 2MP 命中后延伸连段。Ken 的 CA (Shippu Jinraikyaku, 9f) 和你的 Weekend Pleasure 速度一样。OD Jackknife (完全无敌 1-11f) 是你最好的逆转，用于反制他的持续 Jinrai 压力。对局节奏：波动战建立优势后 Rolling Sobat 接近，不要被动应对 Run 系统。"
    keyMoves: ["2MP", "Rolling Sobat (MK)", "OD Jackknife Maximum"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Dee Jay 的 Air Slasher 控制和 Jackknife anti-air 让 Blanka 的混乱移动难以施展"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball (horizontal/vertical) 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6，用 2MP 或 Rolling Sobat MK 惩罚。HP Blanka Ball 是 -10 on block 可以用 B+HK → MG Upper 重罚。不要在 Electricity 范围内按按钮——它是 +4 on block。"
      - "用中距离 Air Slasher 和 5MK 控制距离。Blanka 的 ground vertical ball 是 -26 on block，重罚。Blanka 的 5HK rolling attack 有长距离但 -6 on block。他的 2LP 是 4f startup 可以 mash 你的 gap。LP Air Slasher feint 可以诱导 Blanka 提前出 Ball 或 Electricity，然后用 Rolling Sobat MK 惩罚他的恢复帧。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用，可以打断他的移动。DR 用于在 Blanka Ball 被防后追击。Blanka 的 CA 有无敌 startup，不要 predictable 地进攻。如果 Blanka 滚动逃跑用 Rolling Sobat 追击——你的突进速度可以追上他的滚动。"
    keyMoves: ["MK Jackknife Maximum", "2MP", "Rolling Sobat (MK)"]
  - opponent: "dhalsim"
    difficulty: "even"
    summary: "远距离被 Dhalsim 牵制，但 Jus Cool 前冲穿波和 feint 系统让接近有机会"
    strategies:
      - "Dhalsim 想在远距离用 Yoga Fire 和长距离 limb (5HP, 5MK, 2MK) 控制你。你的 HP Air Slasher 可以和 Yoga Fire 对波但 Dhalsim 的恢复更快。不要跳——他的 anti-air (Yoga Blast, 5LP) 非常可靠。方法：Perfect Parry 吸波节省 Drive Gauge，然后用 DR 或 Jus Cool 前冲派生 (1-20f 穿投射物) 突进。"
      - "一旦进入中近距离，Dhalsim 没有好的逆转选项（除了 OD Yoga Blast 和 CA）。用 Jus Cool 高/低混合持续压制。214K~MK (overhead) 和 214K~LK (下段) 的混合让 Dhalsim 在近距离无法使用长 limb。Dhalsim 的 Yoga teleport 可以逃跑但 26f startup 可以反应——如果他 teleport 到你身边用 OD Jackknife 或 B+HK 打他。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb 时使用。LP Air Slasher feint 是隐藏武器——Dhalsim 玩家习惯看到波动就 EX Yoga Blast，feint 可以让他 whiff 然后你 Rolling Sobat 惩罚。CA 在 Dhalsim teleport 后或出 risky limb 时使用。核心心态：耐心接近，一旦近身就绝不放手。"
    keyMoves: ["Jus Cool (前冲派生)", "Perfect Parry", "LP Air Slasher (feint)"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Dee Jay 的持续压力让 Honda 无法蓄力，E. Honda 是 Dee Jay 报告中最好的对局"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 2MP 或 Rolling Sobat MK 惩罚。HHS 是 -10 on block 可以用 B+HK → MG Upper 重罚。Honda 的 Sumo Headbutt 有装甲但可以用 DI 打断。anti-air 他的 jump 用 MK Jackknife。"
      - "持续进攻不给他 charge 时间是关键。HP Air Slasher 逼他动，一旦接近用 Rolling Sobat MK 循环压制。Jus Cool 的持续压力让 Honda 无法蓄力。Honda 的 5HP 是 16f startup 很慢，用 2MP (6f) 在恢复帧打他。Honda 没有完全无敌的 DP（除了 OD Sumo Smash），可以大胆起身压制。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于快速接近不给他 charge 空间。CA 在 Honda 出 buttslam landing recovery 时使用。对局节奏：全程进攻，用 Jus Cool 和 Rolling Sobat 持续施压，Honda 被迫在无 charge 情况下防守非常被动。这是 Dee Jay 最有利的对局之一。"
    keyMoves: ["Rolling Sobat (MK)", "Air Slasher (MP)", "Jus Cool"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "趁 Medal Level 低时疯狂压制——Dee Jay 的 Jus Cool 混合让 Manon 几乎无法叠 Medal"
    strategies:
      - "Manon 的威胁随 Medal Level 增长（command grab damage 和 range 增加）。Level 0-1 时她的 command grab 范围很短，大胆进攻。Dee Jay 的 Jus Cool 混合是最适合 rush down Manon 的工具之一——214K~MK overhead 和 214K~LK 下段不给她 hit confirm 叠 medal 的空间。开局立刻用 Rolling Sobat 接近，持续压制不让她 free combo。"
      - "Manon 没有 3f button（她的 2LP 是 4f），你的 2LP (5f) 可以在近距离和她竞争。她的 5MP 是 8f startup 比你的 2MP 慢。用 Jus Cool 保持近距离压力，mix 在 throw 和高/低之间。Manon 的 Renverse (command grab) 在 Level 5 时伤害极高——但如果持续压制她根本到不了那个 level。"
      - "DI 在 Manon 出 heavy attack 或 attempting medal combo 时使用。DR 用于快速接近和延伸连段。Manon 的 OD Chassé (reversal kick) 是她最好的逆转但不是完全无敌。CA 在她出 risky command grab whiff 时使用。全程进攻是最好的防守——不要给她任何喘息空间。"
    keyMoves: ["Jus Cool", "Rolling Sobat (MK)", "Air Slasher (MP)"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 慢但痛——用速度优势和 feint 让她没有出手空间"
    strategies:
      - "Marisa 的核心威胁是 armored attacks (Gladius, Quadriga) 和巨大单发伤害。她的 5HP 是 14f startup 很慢但 armored。不要用重攻击挑战她的装甲——用快按钮（2LP 5f, 2MP 6f）打她 armor 的间隙。Marisa 的 2HP 是 -15 on block 可以用 Rolling Sobat MK 或 B+HK → MG Upper 重罚。"
      - "你的速度优势是关键。5MK (9f) 和 2MP (6f) 比 Marisa 的任何按钮都快。用 Rolling Sobat MK 持续施压——Marisa 的 armored move 不如你的速度快，在她 armor 启动前就打中。Jus Cool 保持近距离不让她 free charge Gladius。如果她出 charge move 用 DI 打断（armor 不能挡 DI）。"
      - "DI 在 Marisa 出 Gladius charge 或 Quadriga 时使用。DR 用于确认 poke 命中后延伸。Marisa 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在她 whiff Gladius 或 Quadriga 时使用。对局节奏：全程进攻，Marisa 的慢速让她很难在 Dee Jay 的持续压力下找到出手机会。"
    keyMoves: ["2MP", "Rolling Sobat (MK)", "Jus Cool"]
  - opponent: "jp"
    difficulty: "even"
    summary: "JP 的区域控制需要耐心突破，Jus Cool 前冲和 Rolling Sobat 是最好的突破工具"
    strategies:
      - "JP 的核心威胁是 Torbalan (portal) 区域控制和 Eminence (远距离 anti-air)。不要站在 full screen——逐步用 Air Slasher 和 Perfect Parry 接近。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 Rolling Sobat MK 惩罚。他的 5HP 是 -8 on block 用 2MP 确认惩罚。"
      - "Jus Cool 前冲派生 (1-20f 穿投射物) 是你接近 JP 的核心工具——穿过他的 portal 直接到中距离。一旦进入中距离，JP 的普通技不如你的好。用 2MP 和 5MK 控制地面。Jus Cool 的高/低混合让 JP 在中距离防守很被动。JP 的 Torbalan 有 startup 时间，可以用 DR 或 Rolling Sobat 打断。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 在读准他的 portal timing 后突进。JP 的 CA 是全程无敌的，不要在他有 CA 时 whiff 大招。SA2 Sunrise Festival (完全无敌 1-16f) 可以作为逆转在 JP 压制你时使用。LP Air Slasher feint 可以诱导 JP 提前出 Torbalan，然后你 Rolling Sobat 惩罚。"
    keyMoves: ["Jus Cool (前冲派生)", "Rolling Sobat (MK)", "Drive Rush"]
  - opponent: "zangief"
    difficulty: "even"
    summary: "保持中距离不进 SPD 范围，Rolling Sobat 压制让 Zangief 接近困难"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 armored attacks。永远不要站在 SPD 范围内不动——如果你在近距离，必须在按按钮或跳。HP SPD range 很大，需要保持中距离。Zangief 的 forward dash 是 18f 可以反应，听到 dash 声音就跳或按 LP。Zangief 的 lariat 是 anti-air 但可以被低攻击（2MK, 2LK）打。"
      - "用 5MK、2MP、2MK 和 HP Air Slasher 在中距离持续骚扰。Rolling Sobat MK (12f, -6 on block) 是中距离压力工具——保持在 SPD 范围外但持续进攻。Zangief 的 5HP 是 -6 on block 可以用 2MP 惩罚。如果他尝试接近用 Rolling Sobat MK 打退他。LP Air Slasher feint 可以诱导 Zangief 提前 SPD 或 jump，然后 Jackknife 惩罚。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal，有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。始终保持中距离，用 Air Slasher 和 Rolling Sobat 压制不让他进入 SPD 范围。"
    keyMoves: ["Rolling Sobat (MK)", "5MK", "Air Slasher (MP)"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "趁 Lily 充能 Wind Stock 时压制，feint 系统让她无法 free charge"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock，充能时是最脆弱的。趁这个窗口用 Rolling Sobat MK 或 DR 进攻。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变得更强。Lily 的 2LP 是 4f 可以在近距离和你交换。LP Air Slasher feint 可以诱导她提前出 Tomahawk，然后 Rolling Sobat 惩罚。"
      - "中距离你的工具更优：5MK (+6 on hit) 和 2MP (+4 on hit) 的 frame data 比 Lily 的普通技好。她的 5MP 是 9f startup 比你的 2MP 慢。Lily 的 Condor Spire (approaching move) 是 -6 on block 可以用 2MP 惩罚。anti-air 她的 Condor Dive 用 MK Jackknife 或 OD Jackknife。Jus Cool 压制在她没有 stock 时特别有效。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断她的充能。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。对局节奏：主动进攻，用 Rolling Sobat 和 Jus Cool 不给她 free charge 的机会。"
    keyMoves: ["Rolling Sobat (MK)", "Jus Cool", "Air Slasher (MP)"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "高速对决——anti-air 和 Rolling Sobat 反制是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 的角度变化大，需要仔细观察 anti-air 时机——用 MK Jackknife (6f) 或 OD Jackknife 打她。Spiral Arrow 是 -6 到 -9 on block 取决于版本，用 2MP → Rolling Sobat MK 惩罚。Cammy 的 5MP 是 5f startup 很快要小心。"
      - "中距离用 5MK (+6 on hit) 和 2MP (+4 on hit) 交换。Cammy 的速度和你的差不多，但你的 Jus Cool 混合提供更好的持续压制选项。214K~MK (overhead) 和 214K~LK (下段) 让 Cammy 无法安心防御。她的 Hooligan Combination 是空中混合但可以 Jackknife anti-air 打掉。她的 5HK 是 -5 on block 可以用 B+HK 惩罚。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 命中后延伸连段。Cammy 的 OD Cannon Spike 是她的逆转但不是完全无敌。CA 在她 Cannon Strike 跳入时使用。OD Jackknife (完全无敌 1-11f) 是你最好的逆转。对局节奏：主动用 Air Slasher 和 Rolling Sobat 压制。"
    keyMoves: ["MK Jackknife Maximum", "Rolling Sobat (MK)", "2MP"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动可以用冷静的 anti-air 和 Rolling Sobat 反制"
    strategies:
      - "Rashid 的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 可以用 2MP 惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——不要追他空中，等他落地。Rashid 的 5MP 是 6f startup 很快，中距离要小心。anti-air 用 MK Jackknife 或 OD Jackknife。"
      - "保持中距离用 5MK 和 HP Air Slasher 控制节奏。Rashid 想用 speed control 比赛节奏，你需要用 Air Slasher 和 Rolling Sobat 压制让他慢下来。他的 Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。LP Air Slasher feint 可以诱导 Rashid 提前出 Eagle Spike，然后 Rolling Sobat 惩罚。Jus Cool 混合在他落地时保持近距离。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速逆转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。核心心态：不要被他的 speed 搞乱节奏，用自己的 Air Slasher + Rolling Sobat 压制建立节奏。"
    keyMoves: ["MK Jackknife Maximum", "Rolling Sobat (MK)", "5MK"]
  - opponent: "a-k-i"
    difficulty: "advantageous"
    summary: "趁 A.K.I. 设置毒之前 rush down——Jus Cool 压力让她没有 setup 时间"
    strategies:
      - "A.K.I. 的核心威胁是毒系统（toxic brew, 毒蛇 trap）。她需要时间设置毒 cloud 和 ground trap，趁她 setup 时用 Rolling Sobat MK 快速接近。被毒后不要慌——毒伤害是可以承受的，继续进攻。她的 5MP 是 6f startup 很快但 range 短。LP Air Slasher feint 可以打乱她的 setup 节奏。"
      - "中近距离你的 Jus Cool 压制比她的工具更强。2MP (+4 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离，保持在 5MK 距离。她的 2HP 是 -10 on block 可以用 Rolling Sobat MK 惩罚。她的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以 DI 打断。Jus Cool 高/低混合保持近距离持续压制不给她 setup 时间。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。CA 在她 whiff toxic trap 或 jump-in 时使用。全程进攻是最好的策略——防守就是给她 setup 的机会。"
    keyMoves: ["Rolling Sobat (MK)", "Jus Cool", "Air Slasher (MP)"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难，用 Air Slasher 和 DR 找突破口"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——用 HP Air Slasher 从更远的距离攻击，不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。Ed 的 5HP 是 -6 on block 可以用 2MP 惩罚。"
      - "接近方式：用 Perfect Parry 吸他的 psycho ball，然后 Rolling Sobat MK 或 DR 突进。Jus Cool 前冲派生 (1-20f 穿投射物) 可以穿过他的 Psycho Ball。一旦进入 Jus Cool range，Ed 的 defense 不强。用 214K~MK overhead 和 214K~LK 下段混合压制，mix 在 throw 之间。Ed 的 Snatcher (command grab) range 短保持中距离安全。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 或 risky approach 时使用。LP Air Slasher feint 是打乱 Ed 节奏的好工具——让他不确定你会真发波还是 feint。"
    keyMoves: ["HP Air Slasher", "Jus Cool (前冲派生)", "Drive Rush"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 伤害恐怖但血量只有 9000——一个 Rolling Sobat 确认就能重创他"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合。他的 health 只有 9000（比你少 1000），所以一个好的 Rolling Sobat → MG Upper 确认就能重创他。Demon Flip 的 punch/kick/throw 混合需要读取——用 MK Jackknife (6f) 打他的 flip punch，jump out 打他的 flip throw。Akuma 的 air Hadoken 让他的空中进攻更有层次。"
      - "中距离你的 5MK (+6 on hit) 和 2MP (+4 on hit) 可以和 Akuma 交换。他的 5MP 是 5f startup 很快要小心。Akuma 的 Gohadoken startup 和你的 Air Slasher 差不多。他的 5HK 是 -6 on block 可以用 B+HK 惩罚。关键是不让他 free 地设置 air fireball——anti-air 他的 jump 用 MK Jackknife。LP Air Slasher feint 可以诱导 Akuma 提前出 air fireball。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段——对 Akuma 每个 hit 都很珍贵因为他的低血量。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break，不要在他有 meter 时 predictable。CA 在他 demon flip 或 whiff heavy attack 时使用。OD Jackknife (完全无敌) 是反制他持续进攻的最佳工具。"
    keyMoves: ["MK Jackknife Maximum", "Rolling Sobat (MK)", "B+HK"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Power 压力可以用 Rolling Sobat 反制——谁的循环更强谁赢"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 2MP 或 Rolling Sobat MK 惩罚。Scissors (LK version) 是 +1 on block 让他保持压力——不要乱按按钮，等他 scissors heavy 版本（-6 on block）再 punish。他的 5HP 是 -5 on block 用 2MP 惩罚。"
      - "用 HP Air Slasher 控制中距离，Bison 需要 charge 时间来出 Psycho Crusher 和 Scissors。持续的 Air Slasher 压力不让他 free charge。LP Air Slasher feint 可以诱导 Bison 提前 Psycho Crusher，然后你 block 惩罚。一旦接近用 Jus Cool 高/低混合压制。Bison 的 2LP 是 4f 可以 mash 但你的 2MP (+4 on hit) frame trap 可以打他 mash。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于在 Air Slasher 命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。OD Jackknife 是你最好的逆转反制他的持续压力。"
    keyMoves: ["HP Air Slasher", "Rolling Sobat (MK)", "Jus Cool"]
  - opponent: "terry"
    difficulty: "even"
    summary: "格斗家对决——Terry 有扎实的 neutral 但 Dee Jay 的 Jus Cool 混合提供更多进攻选择"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave 的 recovery 比 Air Slasher 快但伤害低。Burn Knuckle HP 版本是 -9 on block 可以用 2MP 或 Rolling Sobat MK 惩罚。他的 Rising Tackle 是 anti-air/DP 但不是完全无敌（OD 版本是）。Terry 的 Crack Shoot (overhead) 是 20f startup 可以反应。"
      - "中距离你的 5MK (+6 on hit) 和 2MP (+4 on hit) 比 Terry 的普通技稍优。用 HP Air Slasher 和他交换波动，然后找机会 Rolling Sobat 接近。Jus Cool 的高/低混合让 Terry 的防守有压力。214K~MK (overhead) +1 on block 非常安全。他的 5MP 是 8f 和你的 2MP 速度差不多但 range 更短。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。OD Jackknife 是你的逆转工具。对局节奏：波动战后 Rolling Sobat 接近，Jus Cool 持续压制。"
    keyMoves: ["Rolling Sobat (MK)", "2MP", "MK Jackknife Maximum"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的扇子投射和空中机动让接近变得复杂——需要耐心和精确的 Jus Cool 前冲时机"
    strategies:
      - "Mai 的核心威胁是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。她的 air fan 让她可以在空中持续骚扰，anti-air 很困难但 MK Jackknife 仍然是你最好的选择。不要追她空中——等她落地再进攻。她的 5MP 和 2MP range 都很长让中距离也不好打。"
      - "接近方式：用 Perfect Parry 吸 fan，然后 Rolling Sobat MK 或 DR 突进。HP Air Slasher 和她的 fan 对波但她的恢复可能更快。Jus Cool 前冲派生 (1-20f 穿投射物) 是你穿过 fan 的核心工具。一旦接近，用 Jus Cool 高/低混合压制——Mai 的普通技在近距离 frame data 不如你的好。214K~MK overhead (+1 on block) 保持压力不让她逃跑。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段——timing 必须精准。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。LP Air Slasher feint 可以打乱她的 anti-fireball 节奏。需要比平时更耐心，不要急于冲进去。"
    keyMoves: ["Jus Cool (前冲派生)", "Perfect Parry", "Drive Rush"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 需要适应，在 Rolling Sobat range 内 Dee Jay 可以压制"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing 需要时间——不要给她 free heal 的机会，保持压力。Elena 的 Lynx Tail 是 multi-hit 可以 DI 吸掉。用 HP Air Slasher 在中距离控制她的移动。"
      - "用 5MK (+6 on hit) 和 HP Air Slasher 在中距离和她交换。Elena 的 5HP 是 -5 on block 可以用 2MP 惩罚。她的 Mallet Smash (overhead) 是 22f startup 可以反应。保持在 Rolling Sobat MK range 最有利——太近会被她的 capoeira mix-up 打，太远她可以 heal 或 poke。Jus Cool 的高/低混合是你在中距离的核心武器。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 2MP 后延伸连段。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。OD Jackknife 是你的逆转。对局节奏：持续 Rolling Sobat 压力不给她 heal 的空间。"
    keyMoves: ["Rolling Sobat (MK)", "5MK", "Air Slasher (MP)"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — 使用标准 Dee Jay gameplan：Air Slasher 控制 + Rolling Sobat 压制"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高伤害但启动偏慢。用快速 button (2MP 6f, 2LP 5f) 在他的 heavy attack gap 中插入。anti-air 用 MK Jackknife (6f)，不要给他 free 的 jump-in。HP Air Slasher 在中距离控制他的移动。"
      - "保持标准 Dee Jay gameplan：中距离用 5MK、2MP 和 HP Air Slasher 控制。Rolling Sobat MK 持续施压。在他 whiff heavy attack 时用 B+HK → MG Upper 惩罚。如果他有 armored move 用 DI 打断。接近后用 Jus Cool 高/低混合压制。LP Air Slasher feint 可以打乱他的节奏。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。OD Jackknife (完全无敌 1-11f) 是你的逆转。CA 在关键时刻使用。根据实际对局经验调整策略——核心不变：Air Slasher 控制 → Rolling Sobat 接近 → Jus Cool 压制 → 确认连段。"
    keyMoves: ["2MP", "Rolling Sobat (MK)", "MK Jackknife Maximum"]
---

## Additional Notes

Dee Jay 在 Street Fighter 6 中回归，保留了标志性的 charge 系统和音乐家身份，同时加入了全新的 Jus Cool 姿态系统，大大增强了他的混合进攻能力。

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | 2MP → DR → 2HP → 214HP (MG Upper HP) | ~2800 |
| Corner BnB | j.HP → B+HK → cr.HP → 214MP (MG Upper MP) | ~2600 |
| Rolling Sobat Confirm | 2MP → 236MK (Rolling Sobat) → 214LP (MG Upper LP) | ~2200 |
| Drive Rush Route | st.HP → DR → B+HK → cr.HP → OD Rolling Sobat → SA1 | ~3500+ |
| Light Confirm | 2LP → 2LP → 214LP (MG Upper LP) | ~1400 |
| Anti-air Confirm | B+HK → DR → cr.HP → 214HP (MG Upper HP) | ~2500 |
| Jus Cool Overhead | 214K~MK (overhead) → OD Rolling Sobat → SA1/CA | ~3000+ |
| Punish Counter | 5HP → DR → B+HK → cr.HP → OD Rolling Sobat → Weekend Pleasure | ~4000+ |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 5f | +4 | -1 | Fast light |
| 2MP | 6f | +4 | -1 | Best confirm button |
| 5MP | 7f | +5 | +2 | Strong pressure |
| 5HP | 9f | +3 | -4 | Heavy confirm (cancellable 9-10f only) |
| B+HK | 7f | +1 | -5 | Two hits, both cancellable |
| 5MK | 9f | +6 | -1 | Mid-range poke |
| 2MK | 8f | KD+29 | -6 | Low sweep |
| 2HK | 14f | KD+33 | -11 | Heavy sweep, risky |
| Air Slasher MP | 17f | 0 | -5 | Fireball |
| Air Slasher HP | 17f | +3 | -3 | Two-hit fireball |
| Rolling Sobat MK | 12f | KD+34 | -6 | Core approach |
| Rolling Sobat HK | 15f | +2 | -10 | Risky, combo only |
| MG Upper LP | 15f | KD+34 | -19 | Combo ender from mediums |
| MG Upper MP | 22f | KD+32 | -19 | Combo ender from heavies |
| Jackknife MK | 6f | KD+41 | -32 | Anti-air (can't hit crouch) |
| OD Jackknife | 6f | KD+23 | -55 | Fully invincible 1-11f |
| Jus Cool~MK | 25f | KD+27 | +1 | Overhead, safe |
| Jus Cool~LK | 25f | +2 | -3 | Low follow-up |
| SA1 (Greatest Sobat) | 7f | KD+32 | -12 | Breaks armor |
| SA2 (Sunrise Festival) | 12f | +6 | -29 | Fully invincible 1-16f |
| CA (Weekend Pleasure) | 9f | KD+26 | -28 | Fully invincible 1-13f |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 4.30
- **Back Walk Speed:** 3.20
- **Forward Dash:** 19 frames / 150.00 distance
- **Back Dash:** 23 frames / 90.000 distance
- **Prejump Frames:** 4

### Feint System Guide

Dee Jay 拥有三个 feint（假动作）版本的核心 Special：
- **LP Air Slasher (21f):** 假波动，启动动画完全一样但没有投射物。用于诱导对手提前 jump/DI/Perfect Parry。
- **LK Rolling Sobat (26f):** 假突进，Dee Jay 前移但不出攻击。用于制造距离和诱导反应。
- **LK Jackknife Maximum (23f):** 假升龙，Dee Jay 起跳后可以使用任何空中攻击。用于变招 anti-air 时机和空中进攻。

三个 feint 的核心价值：让对手永远无法确定你的 Special 是真是假，从而创造额外的 punish 窗口。

### Season Updates

- **May 2024 Patch:** cr.MK 改为击倒（+29），大大提升了中距离确认能力
- **Dec 2024 Patch:** Jackknife Maximum MK 第一段 active frames 从 3 增加到 4，anti-air 更可靠
- **Season 3:** Dee Jay 整体保持 B-tier 定位，feint 系统和 Jus Cool 仍然是独特优势
