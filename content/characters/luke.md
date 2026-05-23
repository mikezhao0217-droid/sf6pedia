---
name: "Luke"
subtitle: "The Protagonist"
overview: "Luke is a well-rounded rushdown character who excels at mid-range neutral with fast fireballs and strong pokes. His signature Flash Knuckle system lets him approach from multiple angles with charge variants that shift frame advantage, making his pressure tricky to deal with. With solid anti-airs, versatile combo routes, and excellent Drive Rush conversions, Luke is a character who rewards fundamental play with explosive damage potential."
keyMoves:
  - name: "Flash Knuckle (LP)"
    input: "214P"
    description: "Luke's signature approaching special. LP version is the fastest at 13f startup, giving a hard knockdown on hit (+32 KD). Charged and Perfect versions add a followup hit for more damage and better knockdown advantage. Uncharged is -18 on block so only use in combos or confirmed hits."
    startup: 13
    active: 3
    recovery: 31
    damage: 700
  - name: "Flash Knuckle (MP)"
    input: "214MP"
    description: "The mid-range threat. 19f startup but +3 on hit at close range. Charged version gets a wall bounce and massive +67 KD for oki. Perfect version deals 850+250. After Dec 2024 patch, charged is only -1 on block, making it much safer to use as a pressure tool."
    startup: 19
    active: 3
    recovery: 27
    damage: 900
  - name: "Flash Knuckle (HP)"
    input: "214HP"
    description: "The armored approach option. 22f startup but deals 1000 damage. Charged and Perfect versions are +4 on block, making this Luke's key pressure inversion tool. Perfect Flash Knuckle HP deals 1200+400 and gives +56 KD — use this to steal turns and run offense."
    startup: 22
    active: 3
    recovery: 21
    damage: 1000
  - name: "Rising Uppercut (LP)"
    input: "623P"
    description: "Luke's DP anti-air. LP version has 5f startup with invincibility frames 1-14, making it excellent for anti-airing jump-ins. HP version has 9f startup and deals 1200 damage. OD version is fully invincible frames 1-10 and can follow up with Slam Dunk for extra damage."
    startup: 5
    active: 10
    recovery: 34
    damage: 900
  - name: "Sand Blast (HP)"
    input: "236HP"
    description: "Luke's fireball. HP version has 20f startup but is +3 on hit, giving Luke frame advantage at range. LP version is fastest at 14f but -3 on hit. OD version wall splats and can follow up with Fatal Shot for knockdown +48. Use HP Sand Blast to control mid-range and chip away at opponents."
    startup: 20
    active: 0
    recovery: 27
    damage: 600
  - name: "Avenger > No Chaser"
    input: "236K > P"
    description: "Counter-attack move that absorbs a strike and retaliates. 12f startup on the counter, then +12f on the followup. Gives KD +37 on hit. Useful against predictable offense but can be meatied at far range. Best used as a read tool against opponents who press the same button on wakeup."
    startup: 12
    active: 10
    recovery: 16
    damage: 900
  - name: "Avenger > Impaler"
    input: "236K > K"
    description: "The low followup to Avenger. Leads to a hard knockdown (+35 KD) which is harder for opponents to meaty against. Better for maintaining oki pressure after a successful counter read."
    startup: 12
    active: 8
    recovery: 22
    damage: 900
  - name: "Vulcan Blast (Level 1 Super)"
    input: "236236P"
    description: "Strike/throw invincible on frames 1-6. 6f startup dealing 2000 damage with KD +17. Good for escaping pressure and as a combo ender when you need the knockdown. Breaks armor."
    startup: 6
    active: 0
    recovery: 49
    damage: 2000
  - name: "Eraser (Level 2 Super)"
    input: "214214P"
    description: "Fully invincible frames 1-7. 5f startup dealing 2800 damage with only +2 on hit. Primarily used as a reversal or anti-air since it's fast and safe. Can combo after OD Flash Knuckle in the corner."
    startup: 5
    active: 0
    recovery: 0
    damage: 2800
  - name: "Pale Rider (Critical Art / Level 3)"
    input: "236236K"
    description: "Fully invincible frames 1-30. 10f startup dealing 4000 damage (4500 as Critical Art). The ultimate comeback tool. Use to punish big whiffs, escape the corner, or close out a round. KD +18 on hit."
    startup: 10
    active: 0
    recovery: 0
    damage: 4000
tips:
  - "开局用 HP Sand Blast 控制中距离，观察对手反应。如果对手跳入，用 LP Rising Uppercut (5f) 对空；如果对手按按钮，用 2MP (+5 on hit) 或 5MK 确认。HP Sand Blast 是 +3 on hit，打中后你仍然有帧数优势可以继续进攻。"
  - "Luke 的核心连段路线：2HP (7f) → Perfect Flash Knuckle MP 是中屏最高伤害的基础路线。角落用 2HP → LP Flash Knuckle。Drive Rush 路线：St.HP → DR → B.HK → Cr.HP → QCB+MP(Perfect) → DR → St.HP → QCB+HP(Perfect) 是角落最高伤害。"
  - "立回中善用 2MP (+5 on hit, +1 on block) 和 2MK (低攻击) 试探。2MP 是 Luke 最好的确认按钮，打中可以 Drive Rush 接连段，被防只 -1 很安全。5HK 有超远距离和 +8 最大帧数优势，用作战术性远距离 poke。"
  - "Drive Rush 是 Luke 的关键机制。2MP~DR 或 2MK~DR 可以从远距离确认进入连段。被防时也有 2MP~DR → 5MP 的帧陷阱。Drive Impact 后 +35 优势，用 5HP 启动连段。当对手 Burnout 时，Perfect Flash Knuckle HP (+4 on block) 可以反复压制。"
  - "对付远距离角色（Guile, Dhalsim, JP），不要急着冲进去。用 Sand Blast 对波，找对手波动的间隙 Drive Rush 突进。进入中距离后用 5MK 和 2MK 控制地面，不要让对手逃跑。近距离用 Perfect Flash Knuckle 反复压制，注意保留 Drive Gauge 用于 DR 取消。"
  - "Avenger 是高风险高回报的读招工具。对手习惯在起身或某个距离按同一招时使用。远距离 Avenger 容易被 meaty 打掉，尽量在中距离使用。Impaler followup 给更好的 knockdown 优势用于 oki。"
matchups:
  - opponent: "ryu"
    difficulty: "advantageous"
    summary: "Luke 的中距离工具和波动对抗优于 Ryu，可以主导比赛节奏"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 后的强化波动和 Hadoken 控场。用 HP Sand Blast 对波（+3 on hit），不要让 Ryu 白充 Denjin。Ryu 的 5HK 和 sweep 是主要 poke，用 2MP 确认后 DR 取消惩罚。Ryu 没有充能时 HP Hashogeki 是 -4 on block，可以惩罚。"
      - "优势距离在中距离：用 5MK、2MP、2MK 控制地面。Ryu 的 Shoryuken 只有 LP 版本有完全无敌（6f startup），你的 2MP +5 on hit 可以安全帧陷阱打他 DP。近距离 Perfect Flash Knuckle HP (+4 on block) 持续压制，Ryu 的逆转只有 CA 和 OD Shoryuken。"
      - "DI 使用：Ryu 的 HP 系列招式恢复帧较长，等他出 5HP 或 sweep 时用 DI。DR 使用：被 Ryu 压制时用 DR 逃跑，特别是他波动压制时。CA 保留到最后击杀用，Ryu 血量 10000 和你一样，不急于用 CA。"
    keyMoves: ["Sand Blast (HP)", "2MP", "Perfect Flash Knuckle HP"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "Chun-Li 的长距离普通技让接近困难，但 Luke 一旦进入中距离就有优势"
    strategies:
      - "Chun-Li 的 5MP、2MP、5HP 都有极长的判定距离，让她在远中距离很强。注意她的 Serenity Stream 姿态会蹲低避开你的 5LP、5MP 和所有版本 Sand Blast，以及 SA1 的前两段。不要盲目发波，等她姿态结束后再进攻。"
      - "接近方式：用 Drive Rush 穿过她的波动和长距离 poke。一旦进入 2MP 距离，Chun-Li 的按钮就不再有优势。她的 5HK（ spinning bird kick 输入）可以被 2MP 或 5MK 在恢复帧惩罚。anti-air 她的 jump 用 LP Rising Uppercut。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用，这些招恢复帧长。DR 用于突破她的中距离 poke 墙。Chun-Li 没有完全无敌的逆转（除了 OD Tensho Kicks），所以在角落 Perfect Flash Knuckle HP 持续压制她很有效。CA 在她用空中攻击跳入时用。"
    keyMoves: ["Drive Rush", "2MP", "Perfect Flash Knuckle HP"]
  - opponent: "jamie"
    difficulty: "even"
    summary: "Jamie 喝酒等级决定对局走向，早期压制是关键"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口疯狂进攻。如果让他喝到 Level 4，他的 frame trap 和 damage 大幅提升，需要更谨慎。开局立刻用 Flash Knuckle 或 DR 接近，不给他喝酒的空间。"
      - "Jamie 的核心威胁：Bakushin（酒步）是快速接近工具但 -4 on block 可以惩罚。他的 command grab 在有酒时范围增大。Jamie 的 DP（Overdrive The Devil Inside）是他唯一的逆转选项，但不是完全无敌的。当 Jamie 没有逆转时，起身压制可以大胆。"
      - "DI 在 Jamie 用 heavy attack 或 attempting drink 时使用。DR 用于快速接近不给他喝酒空间。Jamie 的 SWK（stepkick）是 frame trap 工具，注意不要乱按按钮。CA 在他跳入或出危险的大招时使用。"
    keyMoves: ["Flash Knuckle LP", "Drive Rush", "2MP"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的波动和反击让你接近困难，需要耐心找机会"
    strategies:
      - "Guile 是 Luke 最难打的对局之一。Sonic Blade + Sonic Boom 的组合让你很难用 Sand Blast 对抗。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一。方法是用 Perfect Parry 吸波节省 Drive Gauge，然后用 DR 突进。HP Sand Blast 和 Guile 对波时注意他可以 charge Sonic Boom 更快。"
      - "一旦进入中近距离，Guile 没有你的 button 质量好。2MP (+5) 和 5MK 是核心。Guile 的 5HP 是 -6 on block，确认后可以惩罚。他的 2HK sweep 是 -10 on block，用 2LP 或 2MP 惩罚。Flash Kick LP 是 -25 on block，用重攻击或 Flash Knuckle 重罚。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用，可以打断他的蓄力节奏。DR 在读准他的波动时机后突进，不要盲目 DR 因为 Flash Kick 会打你。CA 保留到关键时刻，Guile 防御很强所以可能需要 CA 来破防。"
    keyMoves: ["Perfect Parry", "Drive Rush", "HP Sand Blast"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的机动性需要适应，但她的防御弱点让 Luke 可以持续压制"
    strategies:
      - "Kimberly 的核心威胁是她的传送混合（run stop overhead/low/throw）和幻影 dive kick。用 LP Rising Uppercut anti-air 她的空中进攻。她的 teleport 有明显的启动动画，用 2MP 或 5LP 打断她 teleport 后的恢复帧。不要乱出重攻击——她会 teleport 绕过。"
      - "Kimberly 的防御很弱：她没有完全无敌的 DP，只有 OD Bushin Senpukyaku 作为逆转。这意味着你可以大胆地在她的起身进行压制。用 Perfect Flash Knuckle HP (+4 on block) 在近距离循环压制，mix 在 2LK 低攻击和 throw 之间。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后的距离。她的 5HK 是 -6 on block 可以惩罚。CA 在她空中进攻时用，因为她在空中无法变招。"
    keyMoves: ["LP Rising Uppercut", "Perfect Flash Knuckle HP", "2MP"]
  - opponent: "juri"
    difficulty: "even"
    summary: "双方都想进攻，谁先建立节奏谁就赢"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是最脆弱的，这是你进攻的最佳窗口。用 Flash Knuckle 或 DR 赶在她完成充电前打断。Juri 有 stock 时她的 623HP (DP) 和 214HP (hashogeki) 都会消耗 stock 变强，注意她的 stock 数量。"
      - "中距离是关键战场：Juri 的 5MP 和 2MP 速度和你的差不多，但她的 2MK 是低攻击有更长距离。用 2MP (+5 on hit) 作为主要确认工具。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 Flash Knuckle 惩罚。她的 5HP 是 -7 on block，用 2LP 或 2MP 确认惩罚。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是她最好的逆转，注意在她有 meter 时不要 predictable。CA 保留到中后期回合，Juri 的伤害输出很高所以你可能需要 CA 来追赶。"
    keyMoves: ["2MP", "Flash Knuckle LP", "Drive Rush"]
  - opponent: "ken"
    difficulty: "even"
    summary: "相似的进攻风格对决，细节决定胜负"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick (236K) 的混合——high/low/throw 三选一。Jinrai 的 delay 版本可以 frame trap 打你 mash。应对：不要乱按按钮，看清 Jinrai 的延迟版本后再反应。Ken 的 HP Shoryuken 是完全无敌的逆转，不要 predictable 地进攻。"
      - "中距离你的 Sand Blast 比 Ken 的 Hadoken 稍好（HP版 +3 on hit），用 HP Sand Blast 赢得波动战。Ken 的 5MK 是很好的中距离 poke（+1 on hit），用 2MP 对策。Ken 的 sweep 是 -9 on block 可以惩罚。他的 6HP（target combo 入口）是 -7 on block。"
      - "DI 在 Ken 出 heavy Hadoken 或 sweep 时使用。DR 用于突破他的波动压制或确认 2MP 命中后延伸连段。Ken 的 CA 是 9f startup 全程无敌，比你的稍快，注意不要在他有 CA 时 whiff 大招。"
    keyMoves: ["HP Sand Blast", "2MP", "Perfect Flash Knuckle HP"]
  - opponent: "blanka"
    difficulty: "even"
    summary: "Blanka 的电球和混乱移动需要冷静应对，punish 他的 unsafe 招式"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball (horizontal/vertical) 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6，用 2MP 或 Flash Knuckle LP 惩罚。HP Blanka Ball 是 -10 on block 可以用重攻击惩罚。不要在 Electricity 范围内按按钮——它是 +4 on block。"
      - "用中距离 poke (5MK, 2MP) 和 Sand Blast 控制距离。Blanka 的 ground vertical ball 是 -26 on block，重罚。Blanka 的 5HK rolling attack 有长距离但 -6 on block。他的 2LP 是 4f startup 可以 mash 你的 gap。在远距离用 HP Sand Blast 逼他接近。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用，可以打断他的移动。DR 用于在 Blanka Ball 被防后追击。Blanka 的 CA 有 invincible startup，不要 predictable 地进攻。anti-air 他的 jumping attacks 用 LP Rising Uppercut。"
    keyMoves: ["2MP", "Flash Knuckle LP", "HP Sand Blast"]
  - opponent: "dhalsim"
    difficulty: "even"
    summary: "耐心战——逐步缩短距离，一旦近身就不放手"
    strategies:
      - "Dhalsim 想在远距离用 Yoga Fire 和长距离 limb (5HP, 5MK, 2MK) 控制你。你的 HP Sand Blast 可以和 Yoga Fire 对波但 Dhalsim 的恢复更快。不要跳——他的 anti-air (Yoga Blast, 5LP) 非常可靠。方法：Perfect Parry 吸波节省 Drive Gauge，然后用 DR 突进。"
      - "一旦进入中近距离，Dhalsim 没有好的逆转选项（除了 OD Yoga Blast 和 CA）。用 Perfect Flash Knuckle HP (+4 on block) 持续压制。他的 Yoga teleport 可以逃跑但 26f startup 可以反应。Dhalsim 的 5HP limb 是 -4 到 -6 on block，完美距离确认后用 2MP 惩罚。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb 时使用。DR 是你主要的接近手段——从远距离 2MK~DR 或直接 Raw DR 穿波动。CA 在 Dhalsim teleport 后或出 risky limb 时使用。不要让他 heal（如果有自定义规则）。"
    keyMoves: ["Drive Rush", "Perfect Parry", "Perfect Flash Knuckle HP"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Honda 的 charge 依赖让 Luke 的持续压力成为噩梦"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 2MP 或 Flash Knuckle 惩罚。HHS 是 -10 on block 可以用重连段惩罚。Honda 的 Sumo Headbutt (charge back-forward) 有 armor 但可以用 DI 打断。"
      - "持续进攻不给他 charge 时间是关键。HP Sand Blast 逼他动，一旦接近用 Perfect Flash Knuckle HP (+4 on block) 循环压制。Honda 的 5HP 是 16f startup 很慢，用 2MP 在恢复帧打他。Honda 没有完全无敌的 DP（除了 OD Sumo Smash），可以大胆起身压制。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于快速接近不给他 charge 空间。anti-air Honda 的 jumping HP/HP 用 LP Rising Uppercut。CA 在 Honda 出但 slam landing recovery 时使用。"
    keyMoves: ["HP Sand Blast", "Perfect Flash Knuckle HP", "2MP"]
  - opponent: "dee-jay"
    difficulty: "advantageous"
    summary: "Dee Jay 的压力可以用 Luke 的速度和 punish 来反制"
    strategies:
      - "Dee Jay 的核心威胁是 MG Strike (air slash) 混合和 Jackknife Maximum (flash kick)。MG Strike 的 low/high 混合需要读取——不要乱按按钮，看清后再反应。Jackknife HP 是 -29 on block，重罚。Dee Jay 的 5MK 是很好的 poke 但 -3 on block。"
      - "用 2MP (+5 on hit) 在中距离和他交换按钮。Dee Jay 想保持压力循环，用 Rising Uppercut 打断他的 gap。他的 Double Rolling Sobat 是 -4 on block 可以用 2MP 惩罚。当 Dee Jay 没有 meter 时他没有好的逆转，可以大胆进攻。"
      - "DI 在 Dee Jay 出 Jackknife 或 MG Strike heavy 版时使用。DR 用于打断他的压力循环或确认 2MP 后延伸。CA 在他 MG Strike 跳跃时使用可以打他落地。"
    keyMoves: ["2MP", "LP Rising Uppercut", "Drive Rush"]
  - opponent: "manon"
    difficulty: "even"
    summary: "Rush her down before medal levels stack up — her defense is weak early"
    strategies:
      - "Manon 的威胁随 Medal Level 增长（command grab damage 和 range 增加）。Level 0-1 时她的 command grab 范围很短，大胆进攻。如果让她叠到 Level 3-4+，command grab 变成巨大威胁需要更谨慎。开局立刻用 Flash Knuckle 和 DR 接近不给她用 hit confirm 叠 medal 的空间。"
      - "Manon 没有 3f button（她的 2LP 是 4f），所以你可以在近距离用 2LP (4f) 和她公平竞争。她的 5MP 是 8f startup 比你的慢，用 2MP (+5) 作为确认工具。Manon 的 Renverse (command grab) 在 Level 5 时伤害极高，注意保持距离不要让她 close range command grab。"
      - "DI 在 Manon 出 heavy attack 或 attempting medal combo 时使用。DR 用于快速接近和延伸连段。Manon 的 OD Chassé (reversal kick) 是她最好的逆转但不是完全无敌。CA 在她出 risky command grab whiff 时使用。"
    keyMoves: ["Flash Knuckle LP", "2MP", "Drive Rush"]
  - opponent: "marisa"
    difficulty: "even"
    summary: "Marisa 慢但痛——用速度优势控制距离，不要硬碰硬"
    strategies:
      - "Marisa 的核心威胁是她的 armored attacks (Gladius, Quadriga) 和巨大单发伤害。她的 5HP 是 14f startup 很慢但 armored。不要用重攻击挑战她的装甲——用快按钮（2LP 4f, 2MP 6f）打她 armor 的间隙。Marisa 的 2HP 是 -15 on block 可以重罚。"
      - "你的速度优势是关键。5MK (8f) 和 2MP (6f) 比 Marisa 的任何按钮都快。用这些快速 poke 在中距离骚扰，打中后 DR 取消延伸连段。Marisa 想让你在她 armor 范围内交换，你不想这样——保持在 5MK 距离 poke。"
      - "DI 在 Marisa 出 Gladius charge 或 Quadriga 时使用，armor 不能挡 DI。DR 用于确认 poke 命中后延伸。Marisa 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在她 whiff Gladius 或 Quadriga 时使用。"
    keyMoves: ["5MK", "2MP", "LP Rising Uppercut"]
  - opponent: "jp"
    difficulty: "even"
    summary: "JP 的区域控制需要耐心突破，但 Luke 的工具比大多数角色更适合这个任务"
    strategies:
      - "JP 的核心威胁是 Torbalan (portal) 区域控制和 Eminence (far anti-air)。不要站在 full screen——逐步用 Sand Blast 和 Perfect Parry 接近。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 Flash Knuckle LP 惩罚。他的 5HP 是 -8 on block。"
      - "Flash Knuckle 是你接近的主要工具——MP 和 HP 版本都有前进距离可以穿过部分波动。一旦进入中距离，JP 的普通技不如你的好。用 2MP 和 5MK 控制地面。JP 的 Torbalan 有 startup 时间，可以用 DR 或 Flash Knuckle 打断。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 在读准他的 portal timing 后突进。JP 的 CA 是全程无敌的，不要在他有 CA 时 whiff 大招。Eraser (SA2) 可以作为逆转在 JP 压制你时使用。"
    keyMoves: ["Flash Knuckle MP", "Drive Rush", "2MP"]
  - opponent: "zangief"
    difficulty: "even"
    summary: "保持中距离不进 SPD 范围，poke 让他无法接近"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 his armored attacks。永远不要站在 SPD 范围内不动——如果你在近距离，必须在按按钮或跳。HP SPD range 很大，需要保持中距离。Zangief 的 5LP 是 4f 很快，不要小看他的近距离 button。"
      - "用 5MK、2MP、2MK 和 HP Sand Blast 在中距离持续骚扰。Zangief 的 forward dash 是 18f 可以反应，听到 dash 声音就跳或按 LP。Zangief 的 lariat 是 anti-air 但可以被低攻击（2MK, 2LK）打。他的 5HP 是 -6 on block 可以用 2MP 惩罚。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal，有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。"
    keyMoves: ["5MK", "HP Sand Blast", "2MP"]
  - opponent: "lily"
    difficulty: "even"
    summary: "在她积累 Wind Stock 之前施压，让她的 condor wind 无用武之地"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock，充能时是最脆弱的。趁这个窗口用 Flash Knuckle 或 DR 进攻。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变得更强。Lily 的 2LP 是 4f，她可以在近距离和你交换。"
      - "中距离你的工具更优：5MK 和 2MP 的 frame data 比 Lily 的普通技好。她的 5MP 是 9f startup 比你的 6f 慢。Lily 的 Condor Spire (approaching move) 是 -6 on block 可以用 2MP 惩罚。anti-air 她的 Condor Dive 用 LP Rising Uppercut。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断她的充能。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。"
    keyMoves: ["Flash Knuckle LP", "2MP", "LP Rising Uppercut"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "高速对决——anti-air 和 punish 是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 的角度变化大，需要仔细观察 anti-air 时机——用 LP Rising Uppercut 或 5MP 打她。Spiral Arrow 是 -6 到 -9 on block 取决于版本，用 2MP 惩罚。注意 whiff LP Rising Uppercut 可以闪避 Cammy 的 SA3（因为 SA3 全程 airborne）。"
      - "Cammy 的速度和你的差不多。中距离用 5MK 和 2MP 交换。Cammy 的 5MP 是 5f startup 比你的快，注意她的快速 button。她的 5HK 是 -5 on block 可以用 2MP 惩罚。Cammy 的 Hooligan Combination 是空中混合但可以用 anti-air 打掉。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 后延伸连段。Cammy 的 OD Cannon Spike 是她的逆转但不是完全无敌。CA 在她 Cannon Strike 跳入时使用。"
    keyMoves: ["LP Rising Uppercut", "2MP", "5MK"]
  - opponent: "rashid"
    difficulty: "advantageous"
    summary: "Rashid 的机动性可以用冷静的 anti-air 和 punish 对策"
    strategies:
      - "Rashid 的核心威胁是他的空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 可以用 2MP 惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——不要追他空中，等他落地。Rashid 的 5MP 是 6f startup 很快，中距离要小心。"
      - "保持中距离用 5MK 和 HP Sand Blast 控制节奏。Rashid 想用 speed control 比赛节奏，你需要用自己的 Sand Blast 和 poke 让他慢下来。他的 Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。anti-air 他的 Eagle Spike 用 LP Rising Uppercut。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速逆转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。"
    keyMoves: ["HP Sand Blast", "LP Rising Uppercut", "2MP"]
  - opponent: "a-k-i"
    difficulty: "advantageous"
    summary: "在她设置毒之前 rush down，她的防御很脆弱"
    strategies:
      - "A.K.I. 的核心威胁是毒系统（toxic brew,毒蛇 trap）。她需要时间设置毒 cloud 和 ground trap，趁她 setup 时用 Flash Knuckle 快速接近。被毒后不要慌——毒伤害是可以承受的，继续进攻。她的 5MP 是 6f startup 很快但 range 短。"
      - "中近距离你的 button 质量更好。2MP (+5 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离，保持在 5MK 距离。她的 2HP 是 -10 on block 可以惩罚。她的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以 DI 打断。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。CA 在她 whiff toxic trap 或 jump-in 时使用。"
    keyMoves: ["Flash Knuckle LP", "2MP", "Drive Rush"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 psycho flicker 让中距离变得困难，需要找到突破口"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——用 HP Sand Blast 从更远的距离攻击，不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。"
      - "接近方式：用 Perfect Parry 吸他的 psycho ball，然后 DR 突进。Ed 的 5MP 是 8f 和你的差不多。他的 5HP 是 -6 on block 可以用 2MP 惩罚。Ed 的 Snatcher (command grab) range 短，保持中距离就安全。角落里用 Perfect Flash Knuckle HP 压制。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 或 risky approach 时使用。"
    keyMoves: ["HP Sand Blast", "Perfect Parry", "2MP"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 伤害恐怖但血量低——一个正确的 read 可以翻盘"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合。他的 health 只有 9000（比你的 10000 少 1000），所以一个 good conversion 就能重创他。Demon Flip 的 punch/kick/throw 混合需要读取——用 LP Rising Uppercut 打他的 flip punch，jump out 打他的 flip throw。"
      - "中距离你的 5MK 和 2MP 可以和 Akuma 交换。他的 5MP 是 5f startup 很快要小心。Akuma 的 Gohadoken startup 比你的 Sand Blast 快但伤害低。他的 5HK 是 -6 on block 可以惩罚。关键是不让他 free 地设置 air fireball —— anti-air 他的 jump 用 LP Rising Uppercut。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段——对 Akuma 每个 hit 都很珍贵因为他的低血量。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break，不要在他有 meter 时 predictable。CA 在他 demon flip 或 whiff heavy attack 时使用。"
    keyMoves: ["LP Rising Uppercut", "2MP", "Drive Rush"]
  - opponent: "m-bison"
    difficulty: "advantageous"
    summary: "Bison 的 Psycho Power 压力可以用 Luke 的速度和 punish 反制"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 2MP 惩罚。Scissors (LK version) 是 +1 on block 让他保持压力——不要乱按按钮，等他 scissors heavy 版本（-6 on block）再 punish。他的 5HP 是 -5 on block。"
      - "用 HP Sand Blast 控制中距离，Bison 需要 charge 时间来出 Psycho Crusher 和 Scissors。持续的 Sand Blast 压力不让他 free charge。一旦接近用 Perfect Flash Knuckle HP (+4 on block) 压制。Bison 的 2LP 是 4f 可以 mash 但你的 2LP 也是 4f 可以对抗。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于在 Sand Blast 命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。"
    keyMoves: ["HP Sand Blast", "2MP", "Perfect Flash Knuckle HP"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 有扎实的 neutral 但 Luke 可以在速度上胜过他"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave 的 recovery 比 Sand Blast 快但伤害低。Burn Knuckle HP 版本是 -9 on block 可以用 2MP 惩罚。他的 Rising Tackle 是 anti-air/DP 但不是完全无敌（OD 版本是）。"
      - "中距离你的 5MK 和 2MP 比 Terry 的普通技稍快。他的 5MP 是 8f 和你的 2MP 一样但 range 更短。Terry 的 Crack Shoot (overhead) 是 20f startup 可以反应。用 HP Sand Blast 和他交换波动，然后找机会 DR 接近。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。"
    keyMoves: ["HP Sand Blast", "2MP", "Drive Rush"]
  - opponent: "mai"
    difficulty: "disadvantaged"
    summary: "Mai 的远程和机动性让 Luke 难以接近，需要耐心找到突破口"
    strategies:
      - "Mai 的核心威胁是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。她的 air fan 让她可以在空中持续骚扰，anti-air 很困难。不要追她空中——等她落地再进攻。她的 5MP 和 2MP range 都很长让中距离也不好打。"
      - "接近方式：用 Perfect Parry 吸 fan，然后 DR 突进。HP Sand Blast 和她的 fan 对波但她的恢复可能更快。一旦接近，Mai 的普通技 frame data 不如你的好。用 2MP (+5 on hit) 确认和 Perfect Flash Knuckle HP 压制。她的 command grab range 短保持中距离安全。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。需要比平时更耐心，不要急于冲进去。"
    keyMoves: ["Perfect Parry", "Drive Rush", "HP Sand Blast"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 需要适应，在合适距离 Luke 可以压制"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing (如果 enabled) 需要时间——不要给她 free heal 的机会，保持压力。Elena 的 Lynx Tail 是 multi-hit 可以 DI 吸掉。"
      - "用 5MK 和 HP Sand Blast 在中距离和她交换。Elena 的 5HP 是 -5 on block 可以用 2MP 惩罚。她的 Mallet Smash (overhead) 是 22f startup 可以反应 anti-air。保持在 5MK 距离最有利——太近会被 her capoeira mix-up 打，太远她可以 heal 或 poke。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 2MP 后延伸连段。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。"
    keyMoves: ["5MK", "HP Sand Blast", "2MP"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data available — rely on fundamental gameplan"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高伤害但启动偏慢。用快速 button (2MP 6f, 2LP 4f) 在他的 heavy attack gap 中插入。anti-air 用 LP Rising Uppercut，不要给他 free 的 jump-in。"
      - "保持标准 Luke gameplan：中距离用 5MK、2MP 和 HP Sand Blast 控制。在他 whiff heavy attack 时用 Flash Knuckle 或 DR 取消惩罚。如果他有 armored move 用 DI 打断。接近后用 Perfect Flash Knuckle HP 压制。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。CA 在关键时刻使用。根据实际对局经验调整策略。"
    keyMoves: ["2MP", "HP Sand Blast", "LP Rising Uppercut"]
---

## Additional Notes

Luke was the final character added to Street Fighter V's roster and returns as one of the central characters in Street Fighter 6. His moveset is designed around approachability for beginners while maintaining depth at high-level play.

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | cr.HP → Perfect Flash Knuckle (214MP held) | ~2000 |
| Corner BnB | cr.HP → LP Flash Knuckle (214LP) | ~1800 |
| Drive Rush Route | St.HP → DR → B.HK → Cr.HP → 214MP(Perfect) → DR → St.HP → 214HP(Perfect) | ~4000+ |
| Meterless Punish | Spaced St.HK → cr.LP → 214LP / 623HP | ~1500 |
| Light Confirm | 2LP → 2LP → 214LP / 623LP | ~1000 |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +4 | -2 | Fastest normal |
| 2MP | 6f | +5 | +1 | Best confirm button |
| 5MK | 8f | +1 | -3 | Mid-range poke |
| 5HP | 7f | +1 | -6 | Heavy confirm |
| 2HP | 7f | +1 | -13 | Launcher (use in combos) |
| Perfect FK HP | 33f | KD+56 | +4 | Pressure inversion |
| LP Rising Uppercut | 5f | KD+28 | -27 | Anti-air DP |
| HP Sand Blast | 20f | +3 | -2 | Fireball control |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 4.7
- **Back Walk Speed:** 3.2
- **Forward Dash:** 19 frames
- **Prejump Frames:** 4

### Season Updates

- **Feb 2024 Patch:** +3 extra recovery frames on Flash Knuckle whiff; expanded feet hurtboxes (frames 6-24)
- **May 2024 Patch:** 15% damage scaling added to 2MP and 2HP followup combos; 2HP combo scaling increased
- **Dec 2024 Patch:** MP Flash Knuckle charged version now -1 on block (was worse); 6HP forward movement increased; OD Sandblast Fatal Shot now wall splats
