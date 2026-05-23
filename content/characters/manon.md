---
name: "Manon"
subtitle: "The Ballet Fighter"
overview: "Manon 是一名以芭蕾舞为基础的摔投/打击混合型角色，拥有独特的勋章（Medal）升级系统。每次成功使用 Révérence hit grab 或 st.HP target combo 命中对手都会提升勋章等级（最高 Level 5），大幅增加 Renverse command grab 的伤害和范围。她的核心在于 strike/throw 混合（打击/投技二择），利用中距离 st.MK、2MP 等普通技建立 footsies，通过 Drive Rush 接近后用 command grab 和 Dégagé overhead 的不可预测切换压制对手。Manon 没有任何正帧普通技（全部 -1 on block 或更差），极度依赖 Drive Rush 来建立进攻优势。"
keyMoves:
  - name: "Renverse (HP)"
    input: "360+HP"
    description: "Manon 的核心 command grab（指令投）。HP 版本拥有最远的抓取范围，成功投掷后提升 Medal Level 并造成大量伤害——Level 1 约 1200，Level 5 约 2200+。LP 版本范围最短但启动快，适合 tick throw（轻攻击取消接投）。MP 版本范围中等。OD 版本范围更大伤害更高。Medal Level 是 Manon 伤害输出的核心倍增器，Level 5 的 Renverse HP 可以抓掉对手 1/4 血量。"
    startup: 6
    active: 1
    recovery: 30
    damage: 1200
  - name: "Révérence (LP)"
    input: "236+LP"
    description: "Manon 的 hit grab（打击投），是她最重要的 Medal 提升工具。LP 版本 10f startup，命中后自动衔接投掷动画并稳定提升 Medal Level。是从 2MP 或 5MP cancel 的最佳 combo ender——每次确认连段都以 Révérence 收尾来保证 Medal 成长。HP 版本更慢（18f）但伤害更高。OD 版本伤害最高且有 armor 突进属性。这个招式是 Manon 游戏节奏的核心：打连段→提 Medal→增加投技威胁→让对手恐惧。"
    startup: 10
    active: 2
    recovery: 28
    damage: 1200
  - name: "Dégagé (LK)"
    input: "214+LK"
    description: "Manon 的 overhead（中段）踢击。22f startup，约 800 伤害，用于打击蹲防对手。搭配 Renverse command grab 形成「蹲防→overhead 打」「站防→command grab 投」「延迟拆投→frame trap 打」的三层混合。on block 约 -5 不算安全，需要控制使用频率——22f 可以被反应。但 Medal Level 高时对手更倾向蹲防等投，overhead 的价值大幅提升。"
    startup: 22
    active: 3
    recovery: 20
    damage: 800
  - name: "Dégagé (HK)"
    input: "214+HK"
    description: "Manon 的 launcher（浮空）踢击。16f startup，命中后对手浮空可接 juggle 连段（如 Révérence LP 或 j.HP→5HP~HP）。是 Manon 中距离确认后延伸连段的关键工具，从 st.MP~MK target combo 后 cancel 进 Dégagé HK 是标准 BnB 路线。OD 版本有 armor（1-8f 投掷无敌+打击装甲），可以作为突破工具使用。on block 约 -8，需要确认命中后再跟进。"
    startup: 16
    active: 4
    recovery: 24
    damage: 1000
  - name: "Target Combo 2 (st.HP > st.HP)"
    input: "5HP~HP"
    description: "Manon 最重要的 target combo。第一段 st.HP 命中后接第二段 HP hit grab，命中后自动提升 Medal Level。st.HP 同时是 Manon 最好的 anti-air 按钮（10f startup，向上的 hitbox 判定优秀）。这个 target combo 兼顾对空确认和 Medal 提升双重功能，是 Manon 必须掌握的核心确认工具。第二段 HP hit grab 的伤害也随 Medal Level 增长。"
    startup: 10
    active: 4
    recovery: 22
    damage: 1400
  - name: "Target Combo 1 (st.MP > st.MK)"
    input: "5MP~MK"
    description: "Manon 的中距离确认和压力工具。st.MP (7f startup, +5 on hit, +2 on block) 命中后 cancel 进 st.MK，再 cancel 进 Dégagé HK 或 Révérence。5MP 是 Manon 唯一接近正帧的按钮（+2 on block），用于持续近距离压力。7f startup 在中距离交换中不落下风。配合 Drive Rush cancel 进入连段或 command grab 混合是 Manon 最核心的进攻方式。"
    startup: 7
    active: 3
    recovery: 18
    damage: 900
  - name: "4MK~MK (Frame Trap)"
    input: "4MK~MK"
    description: "Manon 的 frame trap target combo。4MK 启动后接 MK，两段命中造成约 1000 伤害。在对手 mash 你的 gap 时特别有效——对手延迟拆投或乱按按钮都会被这套抓住。Drive Rush cancel 后 4MK 可以变成正帧，用于近距离混合压制。4MK 的第一段是中段判定，第二段击飞可接 juggle。是 Manon 针对特定对手习惯（延迟技术、延迟按键）的重要惩罚工具。"
    startup: 9
    active: 5
    recovery: 20
    damage: 1000
  - name: "Danse Étoile (SA2)"
    input: "214214+P"
    description: "Manon 的 Level 2 Super Art，完全无敌 reversal。8f startup，约 2500 伤害，完全无敌 1-15f。是 Manon 最重要的防御工具——她没有传统 DP，SA2 是唯一可靠的全无敌逆转手段。作为 combo ender 也很有价值，从 Dégagé HK launcher 后可直接接 SA2。保留 SA2 作为威慑可以让对手不敢无脑持续压制。一旦用了 SA2，Manon 在防守端会变得非常脆弱。"
    startup: 8
    active: 5
    recovery: 40
    damage: 2500
  - name: "Chanson Éternelle (SA1)"
    input: "236236+K"
    description: "Manon 的 Level 1 Super Art。7f startup，约 2000 伤害。可以作为 combo ender 使用，从 Dégagé HK launcher 后接 SA1 是 meter 效率最高的路线。击倒 +32。伤害不及 SA2 但在 meter 有限时是好选择。注意 SA1 不是完全无敌——作为 reversal 使用时会被某些 multi-hit 招式穿过。用于确认 punish 和 combo 延伸最合适。"
    startup: 7
    active: 4
    recovery: 35
    damage: 2000
  - name: "Pas de Deux (CA)"
    input: "214214+K"
    description: "Manon 的 Critical Art（Level 3 Super）。9f startup，4000 伤害（CA 版本 4500），完全无敌 1-13f。终极逆转和 combo ender。Level 5 Medal + CA 的伤害组合可以瞬间终结对手。从 OD Dégagé 或 OD Révérence 后可接。击倒 +26（CA +22）。Manon 的 CA 动画是华丽的芭蕾双人舞，视觉冲击力十足。保留到击杀或关键时刻使用。"
    startup: 9
    active: 6
    recovery: 48
    damage: 4000
tips:
  - "开局目标：用 st.MK (9f) 和 2MP (6f) 在中距离试探建立 footsies，确认命中后 Drive Rush cancel 进入连段，以 Révérence (236+P) 收尾稳定提升 Medal。每次确认都走这个流程——Medal Level 是你伤害输出的倍增器。Level 1-2 时 Renverse 伤害一般（1200-1500），对手不太怕你的投。Level 3+ 开始 command grab 变得有威胁（1700+），对手蹲防倾向增加。Level 5 时 Renverse HP 可抓 2200+，对手被迫重视投技防御，此时 Dégagé LK overhead 变得极为有效。"
  - "核心连段路线：中屏 BnB 为 2MP → DR → st.MP~MK → 214HK (Dégagé HK) → 236LP (Révérence LP)，约 2500+ 伤害并提升 Medal。角落 BnB：j.HP → 5HP~HP (TC2 hit grab)，直接提升 Medal + 约 1400 伤害。Drive Rush 路线：st.MP → DR → 4MK~MK → OD Révérence，约 3000+ 并提升 Medal。Light 确认：2LP → 2LP → 236LP (Révérence LP)，约 1400 伤害 + Medal。Anti-air 确认：5HP~HP (TC2) 直接提升 Medal。始终优先以 Medal 提升为连段收尾目标。"
  - "立回中善用 2MP (6f, +4 on hit, -1 on block) 和 st.MK (+6 on hit, -1 on block) 试探。记住 Manon 没有任何正帧普通技（除了 5MP +2 on block）——所有普通技 on block 都是 -1 或更差。这意味着你需要 Drive Rush 来建立正帧优势。Manon 的 footsies 依赖 hit confirm 而非 frame advantage——用快按钮确认命中后再延伸，而不是用正帧持续压制。st.HP (10f) 作为 anti-air 和 whiff punish 工具很重要。"
  - "Strike/throw 混合是 Manon 的核心进攻方式。在近距离（st.MP 距离内），对手必须在防御打击和拆投之间做选择。核心循环：2LP → Renverse (tick throw)、5MP(+2) → Dégagé LK (overhead)、st.MP~MK → Dégagé HK/Révérence (确认连段)。Drive Rush cancel 让你的普通技变成正帧，创造更多混合机会。如果对手延迟拆投，用 4MK~MK frame trap 打他。如果对手乱按按钮，用 Renverse 抓他。如果对手蹲等投，用 Dégagé LK overhead 打他。"
  - "对付远距离波动角色（Guile, Dhalsim, JP），Manon 非常难受。不要急着跳入——用 Perfect Parry 吸波节省 Drive Gauge，找对手波动的间隙用 Drive Rush 或 OD Dégagé (armor) 突进。Dégagé MK 可以在某些距离安全 poke。一旦进入中距离，你的 strike/throw 混合开始发挥威力。将对手逼到角落是最终目标——Manon 在角落的 command grab + overhead 混合是最致命的，因为对手没有后退空间。"
  - "Medal 管理策略：Level 1-2 阶段以打击为主，Révérence 作为 combo ender 稳定提升。Level 3 开始大量使用 Renverse command grab，因为伤害已经足够威胁。Level 4-5 时 command grab 的威胁大到对手不敢蹲防，Dégagé LK overhead 变得特别有效。反过来说，如果你 Medal Level 还低（0-1），不要强行 command grab——伤害太低不值得冒 whiff 被惩罚的风险。先建立 Medal 再加强投技频率。每次 knockdown 后的 okizeme 是提 Medal 的最佳时机。"
  - "Drive Rush 是 Manon 的命脉。没有 DR 的 Manon 几乎没有正帧进攻手段。核心 DR 用法：1) 从 2MP hit confirm 后 DR 进入连段（2MP → DR → st.MP~MK → Dégagé HK → Révérence）。2) 从 st.MP(+2 on block) 后 DR 取消创造正帧混合。3) 从远距离直接 DR 接近进入 command grab 范围。管理好 Drive Gauge——在 Manon 需要大量 DR 来进攻的同时，也要保留一些给 OD Dégagé (armor) 和 Drive Reversal 防御。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "中距离博弈对决——Manon 需要谨慎处理 Luke 的 Flash Knuckle 压力，用 command grab 打击他的进攻节奏"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 接近和 Sand Blast 波动。HP Perfect Flash Knucker 是 +4 on block 的强压制工具——不要在他有 charge 时乱按按钮，看清再反应。Luke 的 2MP (5f) 比你的 2MP (6f) 快 1f，近距离交换注意。用 st.MK (9f) 在中距离和他交换 poke，Luke 的 5HK 距离远但 -6 on block 可以用 2MP 确认后 DR 惩罚。中距离确认后用 Révérence 收尾提 Medal。"
      - "Luke 想维持 Flash Knuckle 压力循环，你的 Renverse command grab 是打断他节奏的利器。在 Luke 用 LK Flash Knicker (-3 on block) 后的 gap 中，不要按按钮——延迟一下看他的 follow-up。如果他习惯持续按，用 4MK~MK frame trap 抓。如果他习惯 block 等，用 Renverse LP tick throw。Luke 的 Sand Blast 波动用 Perfect Parry 吸，节省 Drive Gauge 用于 DR 接近。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用。DR 用于确认 2MP 命中后延伸连段。Luke 的 CA (Pale Rider, 10f) 比你的 Pas de Deux (9f) 稍慢，CA 对决你有微弱优势。SA2 Danse Étoile (完全无敌 1-15f) 是你最好的逆转——但一旦用了 SA2，你在防守端变得脆弱，因为 Manon 没有其他 reliable DP。对局节奏：footies 建立 Medal → DR 接近 → strike/throw 混合。"
    keyMoves: ["2MP", "Renverse (HP)", "SA2 Danse Étoile"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "Ryu 的全面性和 Denjin 系统需要 Manon 耐心应对，Révérence 提 Medal 是关键"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 后的强化 Hadoken（有装甲）和 Hashogeki。Denjin Hadoken 有装甲不要用普通攻击挑战——用 OD Dégagé (armor) 或 DI 打掉。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以用 2MP 确认惩罚。用 st.MK 和 2MP 在中距离和他交换——Ryu 的 5HK 和 sweep 是主要 poke 但都负帧，确认命中后 DR 延伸。"
      - "Ryu 的 Shoryuken LP 是 6f startup 的 invincible DP，你的 Renverse 在他有 meter 时需要谨慎使用——如果 Renverse whiff 会被 DP 重罚。用 st.MP~MK 确认连段（不以 command grab 结尾）来建立 Medal，等 Ryu 习惯了防御打击后再突然切换 command grab。Ryu 的 2MP 是 5f 比你快，近距离注意不要被他 frame trap。anti-air 他的 jump 用 st.HP~HP (TC2)，顺便提 Medal。"
      - "DI 在 Ryu 出 heavy Hadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段。Ryu 的 CA (Shin Shoryuken, 9f) 和你的 Pas de Deux 速度一样，不要在他有 CA 时 whiff 大招。SA2 Danse Étoile (完全无敌) 可以穿过他的波动作为 punish。对局节奏：波动战用 Perfect Parry 吸 → 找机会 DR 接近 → strike/throw 混合。"
    keyMoves: ["st.MK", "Révérence (LP)", "st.HP~HP (TC2)"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的超长距离 poke 和 Serenity Stream 让 Manon 接近困难，需要大量 Drive Rush 突破"
    strategies:
      - "Chun-Li 是 Manon 最难受的对局之一。她的 5MP、2MP、5HP 判定距离极长，远中距离完全是她的领地。更麻烦的是她的 Serenity Stream 姿态会蹲低避开你的 st.MK 和中距离普通技。不要盲目出招——等她姿态结束或出招后的恢复帧再进攻。她的 2HP 是 -12 on block 可以用 DR → st.MP~MK 惩罚，但距离远时够不到。Perfect Parry 是你最好的中距离工具。"
      - "一旦进入 st.MP 距离内（极近距离），Chun-Li 的长距离优势消失。你的 Renverse command grab 和 Dégagé LK overhead 在近距离才是有效的。核心接近方式：1) Perfect Parry 吸她的波动和 poke 后 DR 突进。2) OD Dégagé (armor) 硬冲。3) 找她 whiff 重攻击的恢复帧 DR 惩罚。接近后不要放手——Chun-Li 逃跑能力强但一旦被压在角落，你的 strike/throw 混合终于发挥价值。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 是你唯一的接近手段——从 2MP~DR 确认进入连段。Chun-Li 的 OD Tensho Kicks 是她的逆转但不是完全无敌。SA2 Danse Étoile 是你最好的防御工具，用于反制她的持续进攻。CA 保留到关键时刻——Chun-Li 的多段攻击会在 Drive Rush 时消耗你的 Drive Gauge。核心心态：极端耐心，每一步接近都是在赢。"
    keyMoves: ["Perfect Parry", "Drive Rush", "Renverse (HP)"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时疯狂进攻——Renverse 和 strike/throw 混合让他无法安心 drink"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口用 DR 和 strike/throw 混合疯狂进攻。开局立刻 DR 接近，不给他喝酒的空间。每次确认连段用 Révérence 收尾提 Medal，同时持续压制。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2MP 惩罚。Jamie 的 2LP 是 4f startup 可以 mash，但你的 4MK~MK frame trap 专治 mash。"
      - "持续压制不让他 drink 是核心策略。Jamie 没有 meter 时只有 OD The Devil Inside 一个逆转选项（不是完全无敌），可以大胆起身压制。用 Renverse command grab + Dégagé LK overhead + 打击确认的三层混合持续施压。如果 Jamie 试图在远处 drink，用 DR 或 st.MK 打断他的喝酒动画。 Jamie 的 SWK（stepkick）是 frame trap 工具，注意你的 Renverse 不要被他 mash 打断——确认他 block 了再投。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 时使用。DR 用于快速接近不给他喝酒空间。Jamie 的 CA 有完全无敌不要 predictable 进攻。SA2 Danse Étoile 作为逆转在他持续压制你时使用。对局节奏：全程进攻，趁 Jamie Level 0-1 时建立 Medal 优势，一旦他 Level 3+ 你已经有 Level 3+ 的 command grab 来对抗。"
    keyMoves: ["Renverse (HP)", "4MK~MK", "Drive Rush"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的 Sonic Boom 控制和 Flash Kick 对空让 Manon 的接近极其困难——最艰难的对局之一"
    strategies:
      - "Guile 是 Manon 最不利的对局之一。Sonic Boom + Sonic Blade 的组合让你的接近变得极其困难。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一。核心方法：Perfect Parry 吸波节省 Drive Gauge，然后找时机 DR 或 OD Dégagé (armor) 突进。Guile 的 charge 速度很快，你需要比他更有耐心。st.MK (9f) 在中距离是他的 Sonic Blade range 内——谨慎使用。"
      - "一旦进入 st.MP 距离（近距离），Guile 的普通技不如你的 strike/throw 混合有效。用 Renverse command grab 抓他的 charge 姿势——Guile 蹲着蓄力时正是你投他的好时机。Dégagé LK overhead 打他的蹲防 charge。但问题在于进入这个距离本身就很困难。每接近一步都要用 Drive Gauge 作为代价。如果 Guile 用 Sonic Blade（放柱子），DI 可以打断他。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用，可以打断他的蓄力节奏。DR 在读准他的波动时机后突进，不要盲目 DR 因为 Flash Kick 会打你。CA 保留到关键时刻——Guile 防守很强可能需要 CA 来破防。SA2 Danse Étoile 可以穿过波动但meter 消耗大。核心心态：极端耐心，逐步缩短距离，利用每一次接近机会最大化伤害（用 Révérence 提 Medal）。"
    keyMoves: ["Perfect Parry", "OD Dégagé", "Drive Rush"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的传送混合需要冷静应对——anti-air 和 command grab 是反制关键"
    strategies:
      - "Kimberly 的核心威胁是传送混合（run stop overhead/low/throw）和幻影 dive kick。用 st.HP~HP (TC2) anti-air 她的空中进攻，顺便提 Medal。她的 teleport 有明显的启动动画，用 2MP (6f) 或 5LP 打断她 teleport 后的恢复帧。不要乱出重攻击——她会 teleport 绕过。Kimberly 的 5HK 是 -6 on block 可以用 DR → st.MP~MK 惩罚。"
      - "Kimberly 的防御很弱：她没有完全无敌的 DP，只有 OD Bushin Senpukyaku 作为逆转。这意味着你可以大胆在她起身用 strike/throw 混合压制。Renverse command grab 和 Dégagé LK overhead 的二选一让她无法安心防御。Kimberly 想用 speed 和 teleport 打乱节奏——你需要保持冷静，不要追她的 teleport，等她落地再投她。4MK~MK frame trap 对付她的 4f 2LP mash 很有效。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离。CA 在她空中进攻时用——她在空中无法变招。距离控制：不要被她压制在角落，如果被推到角落用 SA2 Danse Étoile 逆转。OD Dégagé (armor) 可以穿她的 run stop。"
    keyMoves: ["st.HP~HP (TC2)", "Renverse (HP)", "4MK~MK"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri 想 charge Fuha stock——打断她的充能节奏，用 command grab 惩罚她的贪心"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是最脆弱的，这是你进攻的最佳窗口。用 DR 或 OD Dégagé 赶在她完成充电前打断。Juri 有 stock 时她的 623HP (DP) 和 214HP (hashogeki) 都会消耗 stock 变强，注意她的 stock 数量——有 3 stock 的 Juri 是最危险的。Juri 的 5HP 是 -7 on block 用 2MP 确认惩罚。中距离用 st.MK 和 2MP 交换。"
      - "中距离是关键战场：Juri 的 5MP (5f) 和 2MP (6f) 速度和你的差不多，但她的 2MK 是低攻击有更长距离。用 2MP (+4 on hit) 作为主要确认工具。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR → st.MP~MK 惩罚。你的 strike/throw 混合比她的 Fuha 循环更直接——持续用 Renverse 和 Dégagé LK 保持进攻主动。如果 Juri 习惯在 block 后 mash，4MK~MK frame trap 打她。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是她最好的逆转，注意在她有 meter 时不要过于 predictable 地 command grab。SA2 Danse Étoile (完全无敌) 是你反制她 Fuha rush 的最佳工具。CA 保留到中后期回合。对局节奏：始终主动，用 strike/throw 混合压制不让她 free charge。"
    keyMoves: ["2MP", "Renverse (HP)", "Révérence (LP)"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai Kick 压力循环需要耐心防守——找到 gap 后用 command grab 反击"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick 压力和 Run 系统接近。Jinrai LK (-3 on block) 是安全的持续压力——不要乱按按钮，等他出 follow-up 再反应。如果 Ken 用 Run → Dragonlash 接近，用 st.HP~HP (TC2) anti-air 打他，顺便提 Medal。Ken 的 HP Hadoken 是 +3 on hit，波动战时用 Perfect Parry 吸。中距离用 st.MK (9f) 和 2MP (6f) 交换按钮。"
      - "Ken 想维持 Jinrai 压力循环，你的 Renverse command grab 是打断他节奏的利器。在 Ken 用 Jinrai LK (-3 on block) 后的 gap 中延迟一下——如果他持续进攻用 Renverse 投他。如果他习惯 block 等你用 Dégagé LK overhead 打。st.MP~MK → Dégagé HK → Révérence 是确认连段路线。Ken 的 5HK 有超远距离但 -6 on block，用 DR 惩罚。Ken 的 OD DP 是完全无敌的逆转。"
      - "DI 在 Ken 出 HP Hadoken 或 Dragonlash Kick 时使用。DR 用于确认 2MP 命中后延伸连段。Ken 的 CA (Shippu Jinraikyaku, 9f) 和你的 Pas de Deux 速度一样。SA2 Danse Étoile (完全无敌) 是你最好的逆转——用于反制他的持续 Jinrai 压力。Drive Reversal 在被 Jinrai 压在角落时很关键。对局节奏：防守等他的 gap → command grab/确认连段反击 → 提 Medal 逐步增加威胁。"
    keyMoves: ["Renverse (HP)", "st.HP~HP (TC2)", "SA2 Danse Étoile"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Manon 的 command grab 专治 Blanka 的混乱移动——每次 Blanka Ball 被防都是你投他的机会"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball (horizontal/vertical) 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6，这是你 Renverse command grab 的绝佳时机——他落地后的恢复帧足够你投他。HP Blanka Ball 是 -10 on block 可以用 DR → st.MP~MK → Dégagé HK → Révérence 重罚。不要在 Electricity 范围内按按钮——它是 +4 on block。用中距离 st.MK 和 2MP 控制距离。"
      - "Blanka 的 ground vertical ball 是 -26 on block，重罚确认连段提 Medal。他的 5HK rolling attack 有长距离但 -6 on block。他的 2LP 是 4f startup 可以 mash 你的 gap。Blanka 的混乱移动看起来吓人但大部分都是负帧——你需要做的是保持冷静，识别他的招式后用正确的 punish 回应。每次 Blanka Ball 被防 → Renverse 投。每次 vertical ball 被防 → 确认连段。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用，可以打断他的移动。OD Dégagé (armor) 可以穿 Blanka Ball。DR 用于在 Blanka Ball 被防后追击。Blanka 的 CA 有无敌 startup 不要 predictable 进攻。如果 Blanka 滚动逃跑用 DR 追击。对局节奏：保持冷静，punish 他的每一次鲁莽移动，用 Révérence 在 punish 中提 Medal。"
    keyMoves: ["Renverse (HP)", "2MP", "st.MK"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "Dhalsim 的远距离控制是 Manon 的噩梦——需要极端耐心和完美的 Drive Rush 时机"
    strategies:
      - "Dhalsim 是 Manon 最不利的对局之一。他可以在远距离用 Yoga Fire 和长距离 limb (5HP, 5MK, 2MK) 持续骚扰你。你的 st.MK 和 2MP 完全够不到他。不要跳——他的 anti-air (Yoga Blast, 5LP) 非常可靠。核心方法：Perfect Parry 吸波节省 Drive Gauge，然后用 DR 或 OD Dégagé (armor) 突进。每一步接近都要付出代价，但这是唯一的路。"
      - "一旦进入中近距离（你的 command grab range），Dhalsim 没有好的逆转选项（除了 OD Yoga Blast 和 CA）。用 Renverse command grab + Dégagé LK overhead 的 strike/throw 混合持续压制。Dhalsim 的 Yoga Teleport 可以逃跑但 26f startup 可以反应——如果他 teleport 到你身边用 st.HP~HP 打他并提 Medal。关键是接近后绝不放手——将 Dhalsim 逼到角落是最理想的。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb (5HP, 2MK) 时使用。Perfect Parry 是你最好的中距离工具。DR 是你主要的接近手段但 timing 必须精准。Dhalsim 的 CA 是全程无敌的不要 predictable。SA2 Danse Étoile 可以穿 Yoga Fire 但消耗大。CA 在 Dhalsim teleport 后或出 risky limb 时使用。核心心态：极端耐心，逐步接近，一旦近身绝不放手。"
    keyMoves: ["Perfect Parry", "Drive Rush", "OD Dégagé"]
  - opponent: "e-honda"
    difficulty: "even"
    summary: "Grappler 对 Grappler——Manon 的中距离工具更优，但要小心 Honda 的 SPD 范围"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 2MP 或 Renverse LP 投他。HHS 是 -10 on block 可以用 DR → st.MP~MK → Dégagé HK → Révérence 重罚并提 Medal。Honda 的 Sumo Headbutt 有装甲但可以用 DI 打断。anti-air 他的 jump 用 st.HP~HP (TC2) 兼顾对空和 Medal 提升。"
      - "Honda 想保持在近距离用 SPD 和 HHS 压制。你的优势在中距离——st.MK (9f) 和 2MP (6f) 比 Honda 的中距离工具更灵活。Honda 的 5HP 是 16f startup 很慢用 2MP 在恢复帧打他。双方都有 command grab 但 Honda 的 SPD 范围比你大——不要和他在纯近距离拼投。保持 st.MP 距离用 strike/throw 混合。Honda 的 forward dash 是 18f 可以反应。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于确认 poke 命中后延伸连段。Honda 的 SA1 和 SA3 都是 armored reversal 有 meter 时不要 predictable。CA 在 Honda 出 buttslam landing recovery 时使用。SA2 Danse Étoile 作为逆转反制他的持续压力。对局节奏：中距离 footsies 建立优势 → 确认连段提 Medal → Level 3+ 后 command grab 威胁超过 Honda。"
    keyMoves: ["st.MK", "st.HP~HP (TC2)", "Révérence (LP)"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的 feint 系统和 Jus Cool 混合让防御变得复杂——用 command grab 惩罚他的姿态"
    strategies:
      - "Dee Jay 的核心威胁是 Air Slasher 波动、Rolling Sobat 突进、和 Jus Cool 姿态混合。HP Air Slasher 两段 +3 on hit，波动战用 Perfect Parry 吸。Rolling Sobat MK (12f, -6 on block) 可以用 2MP 确认惩罚。关键是 Jus Cool 姿态——他出 214K 后有 LK 下段、MK overhead、HK 高段三个派生。不要急着反应，看清他的派生再行动。"
      - "Dee Jay 的 Jus Cool 姿态恢复帧很长——如果你成功 block 了他的派生，有足够时间 DR 或 Renverse 投他。214K~MK (overhead) +1 on block 但在出招前你可以用 OD Dégagé (armor) 穿过。214K~LK (下段) -3 on block 可以 2MP 惩罚。如果 Dee Jay 习惯频繁使用 Jus Cool，用 DR 在他的姿态启动帧打断他。你的 Renverse 是对付姿态的最佳工具——无论他选什么派生，投都有效。"
      - "DI 在 Dee Jay 出 HP Air Slasher 或 Rolling Sobat 时使用。DR 用于确认 2MP 后延伸连段。SA2 Danse Étoile 是你的逆转工具。OD Dégagé (armor) 可以穿过 Air Slasher 波动接近。CA 在 Dee Jay whiff Jus Cool 派生时使用。注意他的 feint 系统（LP Air Slasher 假波动、LK Rolling Sobat 假突进）——不要被假动作诱导出招。对局节奏：冷静应对 Jus Cool 混合 → 抓住恢复帧惩罚 → 提 Medal 逐步增加投技威胁。"
    keyMoves: ["Renverse (HP)", "Perfect Parry", "OD Dégagé"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 慢但痛——用快按钮和 command grab 让她没有出手空间"
    strategies:
      - "Marisa 的核心威胁是 armored attacks (Gladius, Quadriga) 和巨大单发伤害。她的 5HP 是 14f startup 很慢但有装甲。不要用重攻击挑战她的装甲——用快按钮（2LP 4f, 2MP 6f）打她 armor 的间隙。2MP 连打两下就能打掉她的 Gladius armor。Marisa 的 2HP 是 -15 on block 可以用 DR → st.MP~MK → Dégagé HK → Révérence 重罚并提 Medal。"
      - "你的速度优势是关键。2MP (6f) 和 st.MP (7f) 比 Marisa 的任何按钮都快。用 Renverse command grab 持续施压——Marisa 的 armored move 启动慢，在她 armor 激活前就能投到她。如果她出 charge move 用 DI 打断（armor 不能挡 DI）。st.MK (9f) 在中距离控制她的移动。Dégagé LK overhead 在她习惯蹲等你的投时使用。"
      - "DI 在 Marisa 出 Gladius charge 或 Quadriga 时使用。DR 用于确认 poke 命中后延伸。Marisa 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在她 whiff Gladius 或 Quadriga 时使用。对局节奏：全程用快按钮和 command grab 进攻，Marisa 的慢速让她很难在 Manon 的持续 strike/throw 混合下找到出手机会。这是 Manon 最有利的对局之一。"
    keyMoves: ["2MP", "Renverse (HP)", "4MK~MK"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的区域控制让 Manon 寸步难行——需要极致的耐心和 Drive 管理"
    strategies:
      - "JP 是 Manon 非常不利的对局。他的 Torbalan (portal) 区域控制和 Eminence (远距离 anti-air) 让你的接近变得极其困难。不要站在 full screen——逐步用 Perfect Parry 和 st.MK 接近。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 DR 惩罚（如果距离够）。他的 5HP 是 -8 on block 用 2MP 确认惩罚。JP 的 portal 设置需要时间，但你的接近速度不够快来打断。"
      - "接近 JP 的核心方式：1) Perfect Parry 吸他的 Torbalan 和波动节省 Drive Gauge。2) OD Dégagé (armor) 穿过单个 Torbalan。3) DR 在他的 portal gap 中突进。一旦进入中距离，你的 strike/throw 混合比 JP 的近距离防守更有效。用 Renverse 抓他设置 portal 时的恢复帧。JP 的 2LP 是 4f 可以 mash 但你的 4MK~MK frame trap 打他。将 JP 逼到角落消除他的 portal 优势。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 是你主要的接近手段但 timing 必须精准。JP 的 CA 是全程无敌的不要在他有 CA 时 whiff 大招。SA2 Danse Étoile (完全无敌) 可以作为逆转在 JP 压制你时使用。CA 保留到关键时刻。核心心态：比对阵 Guile 还要有耐心，JP 的控制更全面但你每次接近机会都要最大化伤害。"
    keyMoves: ["Perfect Parry", "Drive Rush", "OD Dégagé"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Manon 的中距离工具优于 Zangief——保持 SPD 范围外用 footsies 碾压"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 armored attacks。永远不要站在 SPD 范围内不动——如果你在近距离，必须在按按钮或跳。HP SPD range 很大但你的 Renverse 范围也不小。关键区别：Zangief 没有好的中距离工具而你有 st.MK 和 2MP。在 st.MK 距离你可以持续骚扰而 Zangief 够不到你。Zangief 的 forward dash 是 18f 可以反应，听到 dash 声音就跳或按 LP。"
      - "用 st.MK (9f, +6 on hit)、2MP (6f, +4 on hit) 在中距离持续骚扰。每次确认命中用 Révérence 收尾提 Medal。Zangief 的 5HP 是 -6 on block 可以用 2MP 惩罚。他的 lariat 是 anti-air 但可以被低攻击 (2MK, 2LK) 打。如果他尝试接近用 st.MK 打退他。Renverse command grab 在 Zangief 习惯蹲等 SPD 时特别有效——在他的 SPD range 外你投他他投不到你。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal，有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。SA2 Danse Étoile 作为逆转。始终保持中距离，用 st.MK 和 2MP 压制不让他进入 SPD 范围。Grappler 对 Grappler 的关键是你有更好的 footsies。"
    keyMoves: ["st.MK", "2MP", "Révérence (LP)"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "趁 Lily 充能 Wind Stock 时进攻——strike/throw 混合让她无法 free charge"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock，充能时是最脆弱的。趁这个窗口用 DR 或 OD Dégagé 进攻。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变得更强。Lily 的 2LP 是 4f 可以在近距离和你交换但她的 st.MP 是 9f startup 比你的 2MP 慢。用 2MP 在中距离确认后 DR 延伸。"
      - "中距离你的工具更优：st.MK (+6 on hit) 和 2MP (+4 on hit) 的 frame data 比 Lily 的普通技好。她的 Condor Spire (approaching move) 是 -6 on block 可以用 2MP 惩罚。anti-air 她的 Condor Dive 用 st.HP~HP (TC2) 顺便提 Medal。strike/throw 混合压制在她没有 stock 时特别有效——Lily 没有 stock 时的伤害输出很低。用 Renverse command grab 在她 block 后投她。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断她的充能。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。对局节奏：主动进攻，用 strike/throw 混合不给她 free charge 的机会。一旦你 Medal Level 3+ 而 Lily 没有 stock，你的伤害输出远超她。"
    keyMoves: ["2MP", "Renverse (HP)", "st.HP~HP (TC2)"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "高速对决——anti-air Cannon Strike 和 Spiral Arrow 后的 command grab 是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 的角度变化大，需要仔细观察 anti-air 时机——用 st.HP~HP (TC2) 打她并提 Medal。Spiral Arrow 是 -6 到 -9 on block 取决于版本，用 2MP 确认后 DR → st.MP~MK → Dégagé HK → Révérence 惩罚。Cammy 的 5MP 是 5f startup 很快要小心，你的 2MP 是 6f 差 1f 但问题不大。"
      - "Cammy 的速度和你的差不多但她的进攻更直接。你的 strike/throw 混合提供更好的持续压制选项。Renverse command grab + Dégagé LK overhead 让 Cammy 无法安心防御。她的 Hooligan Combination 是空中混合但可以 st.HP~HP anti-air 打掉。Cammy 想用 speed 和 dive kick 打乱你的节奏——你需要保持冷静，每次 anti-air 都用 TC2 提 Medal。中距离 st.MK 是你的核心 poke。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 命中后延伸连段。Cammy 的 OD Cannon Spike 是她的逆转但不是完全无敌。CA 在她 Cannon Strike 跳入时使用。SA2 Danse Étoile (完全无敌) 是你最好的逆转。OD Dégagé (armor) 可以穿 Spiral Arrow。对局节奏：冷静 anti-air → 确认连段提 Medal → 接近后 strike/throw 混合。"
    keyMoves: ["st.HP~HP (TC2)", "Renverse (HP)", "st.MK"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动需要冷静 anti-air——不要追他飞，等他落地再投"
    strategies:
      - "Rashid 的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 可以用 2MP 惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——不要追他空中，等他落地。Rashid 的 5MP 是 6f startup 很快，中距离要小心。anti-air 用 st.HP~HP (TC2) 提 Medal。Rashid 的 Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。"
      - "保持中距离用 st.MK 和 2MP 控制节奏。Rashid 想用 speed 控制比赛节奏，你需要用 st.MK poke 和 strike/throw 混合压制让他慢下来。一旦 Rashid 落地进入你的 Renverse 范围，投他。如果 Rashid 习惯用 Ysaar glide 接近，用 OD Dégagé (armor) 打断。st.MP~MK 确认路线是标准连段入口。DR 接近后 strike/throw 混合在 Rashid 落地时特别有效。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速逆转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。OD Dégagé 可以穿 Ysaar 接近。核心心态：不要被他的 speed 搞乱节奏，用自己的 st.MK poke → DR 接近 → strike/throw 混合建立节奏。"
    keyMoves: ["st.HP~HP (TC2)", "st.MK", "Renverse (HP)"]
  - opponent: "a-k-i"
    difficulty: "advantageous"
    summary: "趁 A.K.I. 设置毒之前 rush down——strike/throw 混合让她没有 setup 时间"
    strategies:
      - "A.K.I. 的核心威胁是毒系统（toxic brew, 毒蛇 trap）。她需要时间设置毒 cloud 和 ground trap，趁她 setup 时用 DR 快速接近。被毒后不要慌——毒伤害是可以承受的，继续进攻比逃跑更有效。她的 5MP 是 6f startup 很快但 range 短。用 st.MK (9f) 在中距离控制她的移动。每次确认连段用 Révérence 收尾提 Medal。"
      - "中近距离你的 strike/throw 混合比她的工具更强。2MP (+4 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离，保持在 st.MP 距离。她的 2HP 是 -10 on block 可以用 DR 惩罚。她的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以 DI 打断。Renverse command grab 在她习惯蹲防毒 trap 时特别有效——她蹲着设置 trap 正是你投她的好时机。Dégagé LK overhead 也因为同样的原因更有价值。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。CA 在她 whiff toxic trap 或 jump-in 时使用。全程进攻是最好的策略——防守就是给她 setup 的机会。即使被毒了也不要退，继续 strike/throw 混合压制。"
    keyMoves: ["Renverse (HP)", "Drive Rush", "Révérence (LP)"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难——用 Perfect Parry 和 DR 找突破口"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——用 st.MK 从更远的距离 poke，不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。Ed 的 5HP 是 -6 on block 可以用 2MP 惩罚。Perfect Parry 吸他的 psycho ball 是你建立 Drive 优势的方式。"
      - "接近方式：用 Perfect Parry 吸他的 psycho ball，然后 DR 或 OD Dégagé (armor) 突进。一旦进入 st.MP 距离，Ed 的 defense 不强。用 Renverse command grab + Dégagé LK overhead + 打击确认的三层混合压制。Ed 的 Snatcher (command grab) range 短，保持 st.MP 距离可以避免被他投。4MK~MK frame trap 在 Ed 习惯 mash flicker 时有效。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 或 risky approach 时使用。SA2 Danse Étoile 作为逆转。OD Dégagé (armor) 可以穿他的 flicker。对局节奏：Perfect Parry 建立 Drive 优势 → DR 突破接近 → strike/throw 混合压制。"
    keyMoves: ["Perfect Parry", "Renverse (HP)", "Drive Rush"]
  - opponent: "akuma"
    difficulty: "advantageous"
    summary: "Akuma 伤害恐怖但血量只有 9000——一次 Renverse 确认就能重创他"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合。他的 health 只有 9000（比标准少 1000），所以你的一个 Renverse command grab 在 Level 3+ 就能抓掉他 1/4 血量。Demon Flip 的 punch/kick/throw 混合需要读取——用 st.HP~HP (TC2) 打他的 flip punch 并提 Medal，jump out 打他的 flip throw。Akuma 的 air Hadoken 让他的空中进攻更有层次但 anti-air 时机和普通 jump 一样。"
      - "中距离你的 st.MK (+6 on hit) 和 2MP (+4 on hit) 可以和 Akuma 交换。他的 5MP 是 5f startup 很快要小心。Akuma 的 Gohadoken startup 和标准波动差不多，用 Perfect Parry 吸。他的 5HK 是 -6 on block 可以用 2MP 确认惩罚。关键是不让他 free 地设置 air fireball——每次他 jump 都用 st.HP~HP (TC2) anti-air 并提 Medal。Manon 的每次 Medal 提升对 Akuma 来说都是巨大的威胁增幅。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段——对 Akuma 每个 hit 都很珍贵因为他的低血量。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break，不要在他有 meter 时 predictable。CA 在他 demon flip 或 whiff heavy attack 时使用。SA2 Danse Étoile (完全无敌) 是反制他持续进攻的最佳工具。对 Akuma 你的 Medal 提升效率直接决定胜率。"
    keyMoves: ["st.HP~HP (TC2)", "Renverse (HP)", "Révérence (LP)"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Power 压力循环需要识别 gap——用 command grab 打断他的节奏"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 DR → st.MP~MK 惩罚。Scissors (LK version) 是 +1 on block 让他保持压力——不要乱按按钮，等他 scissors heavy 版本（-6 on block）再 punish。Bison 的 5HP 是 -5 on block 用 2MP 确认惩罚。中距离用 st.MK 和他交换 poke。"
      - "用 st.MK 在中距离控制，Bison 需要 charge 时间来出 Psycho Crusher 和 Scissors。持续的压力不让他 free charge。Bison 想维持 Scissors Loop 压力循环——在 LK Scissors (+1 on block) 后他的常见选项是：继续按按钮、throw、或延迟。如果 he delays 用 Renverse 投他。如果他 continues 按 用 block + Renverse。st.MP~MK 确认连段用 Révérence 收尾提 Medal。Bison 的 2LP 是 4f 可以 mash 但你的 4MK~MK frame trap 打他。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于在 st.MK 命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。SA2 Danse Étoile 作为逆转反制他的持续压力。OD Dégagé (armor) 可以穿他的波动和 Scissors。对局节奏：识别他的 Scissors Loop gap → command grab/确认连段反击 → 提 Medal。"
    keyMoves: ["Renverse (HP)", "st.MK", "4MK~MK"]
  - opponent: "terry"
    summary: "Terry 有扎实的 neutral 但 Manon 的 command grab 是打破平衡的关键"
    difficulty: "even"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave 的 recovery 比标准波动快但伤害低。Burn Knuckle HP 版本是 -9 on block 可以用 2MP 或 DR → st.MP~MK 惩罚。他的 Rising Tackle 是 anti-air/DP 但不是完全无敌（OD 版本是）。Terry 的 Crack Shoot (overhead) 是 20f startup 可以反应。中距离用 st.MK 和 2MP 交换。"
      - "中距离你的 st.MK (+6 on hit) 和 2MP (+4 on hit) 比 Terry 的普通技稍优。用 st.MK 和他 poke，找机会 DR 接近。一旦进入 st.MP 距离，你的 Renverse command grab + Dégagé LK overhead 的 strike/throw 混合让 Terry 的防守有压力。Terry 的 5MP 是 8f 和你的 st.MP (7f) 速度差不多但 range 更短。用 TC1 (st.MP~MK) 确认后 Dégagé HK → Révérence 提 Medal。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。SA2 Danse Étoile 是你的逆转工具。OD Dégagé 可以穿 Power Wave。对局节奏：footies 交换 → DR 接近 → strike/throw 混合压制 → 提 Medal。"
    keyMoves: ["st.MK", "Renverse (HP)", "Révérence (LP)"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的扇子投射和空中机动让接近变得复杂——需要比平时更极端的耐心"
    strategies:
      - "Mai 的核心威胁是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。她的 air fan 让她可以在空中持续骚扰，anti-air 很困难但 st.HP~HP (TC2) 仍然是你最好的选择。不要追她空中——等她落地再进攻。她的 5MP 和 2MP range 都很长让中距离也不好打。Mai 的 fan 比 standard 波动更灵活，Perfect Parry 时机需要更精准。"
      - "接近方式：用 Perfect Parry 吸 fan，然后 DR 或 OD Dégagé (armor) 突进。st.MK 在 fan gap 中 poke。一旦接近，用 Renverse command grab + Dégagé LK overhead 的 strike/throw 混合压制——Mai 的普通技在近距离 frame data 不如你的好。将 Mai 逼到角落消除她的空中优势。如果 Mai 习惯 air fan 后 landing 投，用 st.HP~HP (TC2) 打她的 landing 并提 Medal。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段——timing 必须精准。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。SA2 Danse Étoile (完全无敌) 可以穿 fan。需要比平时更耐心，不要急于冲进去——每次接近都要有明确的 hit confirm 或 command grab 计划。"
    keyMoves: ["Perfect Parry", "Drive Rush", "OD Dégagé"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 和 healing 威胁——绝不能给她 free heal 的机会"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing 需要时间——绝对不能给她 free heal 的机会，保持压力。Elena 的 Lynx Tail 是 multi-hit 可以 DI 吸掉。用 st.MK 在中距离控制她的移动。每次确认连段用 Révérence 收尾提 Medal。"
      - "用 st.MK (+6 on hit) 在中距离和她交换。Elena 的 5HP 是 -5 on block 可以用 2MP 惩罚。她的 Mallet Smash (overhead) 是 22f startup 可以反应。保持在 st.MP~st.MK 距离最有利——太近会被她的 capoeira mix-up 打，太远她可以 heal 或 poke。一旦接近用 Renverse command grab 抓她蹲防的习惯。Dégagé LK overhead 在她习惯蹲等你的投时使用。如果她试图 heal 用 DR 打断。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 2MP 后延伸连段和打断她的 heal。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。SA2 Danse Étoile 作为逆转。OD Dégagé (armor) 可以穿她的 capoeira 多段攻击。对局节奏：持续 strike/throw 压力不给她 heal 的空间，每次连段提 Medal 增加投技威胁。"
    keyMoves: ["st.MK", "Renverse (HP)", "Drive Rush"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — 使用标准 Manon gameplan：footies 建立优势 → strike/throw 混合"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高伤害但启动偏慢。用快速 button (2MP 6f, 2LP 4f) 在他的 heavy attack gap 中插入。anti-air 用 st.HP~HP (TC2) 提 Medal。中距离用 st.MK 和 2MP 控制。如果他接近用 Renverse command grab 投他。"
      - "保持标准 Manon gameplan：中距离用 st.MK、2MP poke。确认命中后 DR 延伸连段用 Révérence 收尾提 Medal。在他 whiff heavy attack 时用 2MP 确认惩罚。如果他有 armored move 用 DI 打断。接近后用 Renverse + Dégagé LK overhead 的 strike/throw 混合压制。4MK~MK frame trap 在他 mash 时有效。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。SA2 Danse Étoile (完全无敌) 是你的逆转。CA 在关键时刻使用。根据实际对局经验调整策略——核心不变：st.MK/2MP footsies → DR 接近 → strike/throw 混合 → 确认连段提 Medal → Level 3+ 后 command grab 威胁碾压。"
    keyMoves: ["2MP", "Renverse (HP)", "st.HP~HP (TC2)"]
---

## Additional Notes

Manon 是 Street Fighter 6 中的全新角色，以法国芭蕾舞者和时尚偶像为设计灵感。她将优雅的芭蕾动作与凶猛的摔投技巧完美结合，创造出独特的「Fancy Footwork Grappler」战斗风格。

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | 2MP → DR → st.MP~MK → 214HK → 236LP (Révérence LP) | ~2500+ |
| Corner BnB | j.HP → 5HP~HP (TC2 hit grab, Medal up) | ~1400 |
| Medal Build Route | st.MP~MK → 214HK → 236LP (Révérence LP, Medal up) | ~2200 |
| Drive Rush Route | st.MP → DR → 4MK~MK → OD Révérence (Medal up) | ~3000+ |
| Light Confirm | 2LP → 2LP → 236LP (Révérence LP, Medal up) | ~1400 |
| Anti-air Confirm | 5HP~HP (TC2, Medal up) | ~1400 |
| Strike/Throw Mix | 2LP → Renverse (tick throw) | ~1200-2200 (by Medal) |
| Punish Counter | 5HP → DR → st.MP~MK → 214HK → SA2/CA | ~3500+ |
| Overhead Route | 214LK (Dégagé LK) → DR → st.MP~MK → Révérence | ~2400+ |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +4 | -1 | Fastest normal |
| 2MP | 6f | +4 | -1 | Best confirm button, cancellable |
| 5MP | 7f | +5 | +2 | Only near-positive normal |
| 5MK | 9f | +6 | -1 | Mid-range poke |
| 2MK | 8f | KD+29 | -6 | Low sweep |
| 5HP | 10f | +3 | -4 | Best anti-air, TC2 starter |
| 4MK | 9f | +2 | -3 | Frame trap starter |
| 2HK | 14f | KD+33 | -11 | Heavy sweep, risky |
| Renverse LP | 6f | KD+30 | - | Command grab, short range |
| Renverse HP | 6f | KD+30 | - | Command grab, long range |
| Révérence LP | 10f | KD+28 | -20 | Hit grab, Medal up |
| Révérence HP | 18f | KD+26 | -24 | Hit grab, more damage |
| Dégagé LK | 22f | +2 | -5 | Overhead |
| Dégagé MK | 12f | KD+26 | -6 | Mid kick |
| Dégagé HK | 16f | Launch | -8 | Launcher, juggle follow-up |
| OD Dégagé | 14f | Launch | -4 | Armored (1-8f) |
| SA1 (Chanson Éternelle) | 7f | KD+32 | -15 | Combo ender / surprise reversal |
| SA2 (Danse Étoile) | 8f | +6 | -30 | Fully invincible 1-15f |
| CA (Pas de Deux) | 9f | KD+26 | -28 | Fully invincible 1-13f |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 4.00
- **Back Walk Speed:** 3.00
- **Forward Dash:** 18 frames
- **Back Dash:** 22 frames
- **Prejump Frames:** 4

### Medal System Guide

Manon 的核心独特机制是 Médalon（勋章）系统，最高 Level 5：
- **Medal 提升方式：** Révérence hit grab 命中、st.HP~HP TC2 hit grab 命中
- **Medal 效果：** 每提升一级，Renverse command grab 的伤害和范围都显著增加
- **Level 1:** Renverse HP ~1200 damage（基础，威胁低）
- **Level 2:** ~1500 damage（开始有威胁）
- **Level 3:** ~1700 damage（高威胁，对手开始恐惧投技）
- **Level 4:** ~2000 damage（极高威胁，对手蹲防倾向大幅增加）
- **Level 5:** ~2200+ damage（恐怖伤害，对手被迫重视投技防御）

**核心策略：** Level 1-2 阶段以 strike 为主稳定提 Medal。Level 3+ 开始大量使用 command grab。Level 4-5 时对手蹲防倾向增加，Dégagé LK overhead 变得极为有效。每次 knockdown 后的 okizeme 是提 Medal 的最佳时机。

### Season Updates

- **Year 1 Patch:** 4MK~MK target combo frame trap 属性增强，Drive Rush 后更正帧
- **Year 2 Patch:** Dégagé HK launcher 后的 juggle window 微调，连段更稳定
- **Year 3:** Manon 整体保持 B+ tier 定位，Medal 系统和 strike/throw 混合仍然是独特优势
