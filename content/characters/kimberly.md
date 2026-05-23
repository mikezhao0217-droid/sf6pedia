---
name: "Kimberly"
subtitle: "The Urban Ninja"
overview: "Kimberly 是一名极高速的突进型角色，拥有游戏中最强的机动性和多样的进攻混合工具。她的 Sprint 系统可以从远距离快速发起 Overhead/Low/投技的三择进攻，配合 Shuriken Bomb 喷漆罐 setplay 让对手在防守时压力巨大。核心弱点是缺乏远程武器和可靠的无敌逆转，需要依靠速度和压制力来主导比赛。"
keyMoves:
  - name: "Bushin Senpukyaku (LK)"
    input: "214LK"
    description: "Kimberly 的核心对空旋风脚。6f 启动，5-11帧对空无敌，7-42帧下半身飞行道具无敌。命中给 KD+23 的击倒优势，是 Kimberly 最好的 anti-air 工具。OD 版本有 1-10 帧完全对空无敌，可以接空中 SA2 增加伤害。"
    startup: 6
    active: 18
    recovery: 59
    damage: 990
  - name: "Sprint (236K) 系统"
    input: "236K > 后续派生"
    description: "Kimberly 的核心进攻系统。236K 启动冲刺后有多种派生：LK(Flip Kick) +1 on block 用于持续压制；MK(Shadow Slide) 低攻击打击下段，KD+39；HK(Neck Hunter) Overhead 必须站防，-3 on block；P(Emergency Stop) 假动作诱骗，可用于帧杀和读取对手反应。Arc Step 后可以接 Bushin Izuna Otoshi(P/投技) 或 Bushin Hojin Kick(K/攻击) 形成二择。"
    startup: 6
    active: 0
    recovery: 0
    damage: 0
  - name: "Vagabond Edge (LP)"
    input: "236LP"
    description: "安全的肘击突进技。10f 启动，+3 on hit / -5 on block。在 5MK 范围外使用时是安全的 poke 工具，命中可以 link 到 5LK。在 Counter-hit/Punish Counter 时有充足的确认时间。也是远距离 whiff punish 的好选择，虽然是 20% 的伤害缩放起始。"
    startup: 10
    active: 3
    recovery: 33
    damage: 810
  - name: "Vagabond Edge (HP)"
    input: "236HP"
    description: "挑空 launcher。24f 启动，命中后将对手击飞进入 juggle 状态（KD+56），是 Kimberly 最高伤害连段的启动器。可以接 DR~5LP 或 j.MP>j.214K 等空中追击。-12 on block 较为危险，需要在确认或 setplay 中使用。"
    startup: 24
    active: 2
    recovery: 53
    damage: 540
  - name: "Water Slicer Slide (3MK)"
    input: "3MK"
    description: "滑行下段攻击。11f 启动，可以穿过部分飞行道具。肉弹时 +1~+6 on hit，-5~0 on block。用于惩罚对手后退或发波的惯常行为。早期帧（1-4帧）命中会给击倒效果。对手 Burnout 时始终安全（最差 -1），是对抗飞行道具角色的重要工具。"
    startup: 11
    active: 10
    recovery: 36
    damage: 450
  - name: "Hisen Kick (6HK)"
    input: "6HK"
    description: "远距离跳跃踢。27f 启动，可以跳过低段攻击和地面飞行道具。+1 on hit / -3 on block，相对安全。Counter-hit/Punish Counter 时可以确认接 Step Up 跳跃追击增加伤害。有 13 帧的输入缓冲窗口，使用更加灵活。"
    startup: 27
    active: 3
    recovery: 50
    damage: 720
  - name: "Windmill Kick (4HK)"
    input: "4HK"
    description: "Overhead 攻击，必须站防。22f 启动，+4 on hit / -3 on block。配合 Sprint~Overhead 形成高低二择。在 okizeme 中作为无 Drive Rush 的高/低混合组件使用。"
    startup: 22
    active: 2
    recovery: 42
    damage: 720
  - name: "Hidden Variable (214P)"
    input: "214P"
    description: "传送技。19-26 帧完全无敌，可以在恢复后 7 帧取消到攻击。用于穿越飞行道具和 confusing 对手防御。OD 版本可以取消空中攻击，14+3 落地帧恢复。不是可靠的无敌逆转因为启动太慢，但作为预判性的穿波和位置交换很有价值。"
    startup: 19
    active: 0
    recovery: 43
    damage: 0
  - name: "Shuriken Bomb / Genius at Play (22P)"
    input: "22P"
    description: "喷漆罐设置技。18f 启动，在地上放置喷漆罐。不同拳键决定距离（LP近/MP中/HP远）。OD 版本放两个罐。罐会在一段时间后爆炸造成 KD+88 的击倒，配合 Kimberly 的 okizeme 形成极强 setplay。用完可以通过再次输入补充。是 Kimberly 角落压制体系的核心。"
    startup: 18
    active: 10
    recovery: 44
    damage: 450
  - name: "Bushin Ninjastar Cypher (Level 3 / CA)"
    input: "236236P"
    description: "完全无敌超必杀技。8f 启动，4000 伤害（Critical Art 4500）。1-11 帧完全无敌。激活后永久提升 Kimberly 11% 的伤害和行走速度（Install 状态）。由于 Kimberly 基础伤害比其他角色低 11%，这个 Install 实际上让她达到正常伤害水平。作为逆转和终结技使用。"
    startup: 8
    active: 6
    recovery: 0
    damage: 4000
tips:
  - "开局用 5MK（+1/-4，8f）在中距离试探，这是你最重要的 poke 因为它可以取消到 Special 和 Drive Rush。配合 2MP（+7/-1，6f）作为预测性反poke 工具——走路前进时用最大距离 2MP 可以 Counter-hit 确认到 5HP。如果对手习惯后退，用 3MK Slide 惩罚。5HP 的前移让它的距离接近 5MK，但被防后选择更多——取消到 Sprint 开始进攻循环。"
  - "核心连段路线：2MP/5MK → 5HP → 236K~MK（Run~Slide）是最稳定的中屏路线，给 KD+39 和良好 oki。角落路线：2HP → 236HP（launcher）→ DR~5LP → 5LP~MP~HP~HK（Target Combo）→ j.236PP（Nue Twister）是高伤害角落终结。Drive Rush 路线：5MK~DRC → 2HP → Run~Stop, 2MP, 2MP, 5MP~HP → 236LP/236K~MK 是 DR 二连的高伤害路线。"
  - "Sprint 系统是进攻核心：5HP/specific normals → Sprint 可以 frame trap 到 Arc Step。被防后 Arc Step 有三个选择——P(投技)打站防、K(Divekick)打后跳/后dash、不输入(安全落地 -6)。对手最安全的应对是后dash 或站防接受投技风险。OD Arc Step 的回报更高，让风险回报比偏向 Kimberly。"
  - "Drive Rush 是 Kimberly 从远距离确认进入连段的关键。DR~2MK 是最佳万能接近工具（+5 on block，命中 link 到 5HP/2HP）。DR~5HK 给极佳的帧优势和前进距离。被防时 2MP~DRC → 5MP 形成帧陷阱。DI 后 +35 优势，用 5HP 或 Sprint~Overhead 开始压制循环。"
  - "Shuriken Bomb setplay 是角落最强工具：在足够 KD 优势的击倒后放罐，然后进行高/低/投三择。2LK（低）→ 2LP → 236LP 或 4HK（高）→ 2LP → 236K~LK 都可以接罐子爆炸。投技也可以被罐子爆炸 juggle。对手如果尝试 OD 逆转，可以用 2HP → 236LP 在爆炸前惩罚。注意：喷漆罐不自动回复，不要在可以 KO 时浪费。"
  - "对抗远距离角色（Guile, Dhalsim, JP）时不要急着冲——用 3MK Slide 穿波（Burnout 时始终安全），j.2MP Elbow Drop 跳过波动保持距离，OD Hidden Variable (214PP) 穿越飞行道具直接开始压制。进入 5MK/2MP 距离后用 Sprint 系统持续施压，不让他们逃跑。SA3 的 Install 状态提升移动速度后，追击能力大幅增强。"
  - "防御方面 Kimberly 比较弱：OD Bushin Senpukyaku (214KK) 只有对空无敌不是可靠的逆转。SA1 (236236K) 有 1-10 帧打击/投无敌但可以被精准 meaty 打掉。SA3 (236236P) 是唯一完全无敌的逆转但非常贵。在被压制时更多依赖 Drive Reversal 和 Perfect Parry 而不是无敌技。尽量不让自己陷入被动——用速度优势保持进攻节奏。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "双方都是进攻型角色，谁能先建立节奏谁就赢"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 系统和 Sand Blast 控场。HP Sand Blast 是 +3 on hit，不要让他免费发波——用 3MK Slide 穿波或 OD Hidden Variable 传送接近。Luke 的 Perfect Flash Knuckle HP (+4 on block) 是他的压制核心，被防后他会 mix 2LK/throw/frame trap，用延迟轻攻击打断他的后续。Luke 的 LP Rising Uppercut (5f) 是极强 anti-air，不要跳入。"
      - "优势距离在中近距离：用 5MK 和 2MP 在 Luke 的 Sand Blast 范围外 poke，确认后 DR 进入连段。一旦进入 Sprint 距离，Luke 没有无敌 DP（只有 OD Rising Uppercut），可以大胆用 Sprint~Overhead/Slide/Stop 混合进攻。Luke 的 5HP 是 -4 on block，确认后用 2LP 或 5LP 惩罚。"
      - "DI 在 Luke 出 5HP 或 sweep（-10 on block）时使用。DR 用于穿过 Sand Blast 快速接近。CA 保留到关键时刻——Luke 的血量和 Kimberly 一样是 10000，但他的伤害更高所以可能需要 CA 来追赶。SA3 的 Install 状态提升后移动速度匹配 Luke 的进攻节奏。"
    keyMoves: ["3MK Slide", "Sprint 系统", "5MK"]
  - opponent: "ryu"
    difficulty: "advantageous"
    summary: "Kimberly 的速度优势让她可以主导对局节奏，压制 Ryu 的波动节奏"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 强化波动和 Hadoken 控场。用 3MK Slide 在中距离穿波，或用 j.2MP Elbow Drop 跳过波动安全保持距离。Ryu 的 5HK 和 sweep 是主要 poke，但都比较慢——5HK 是 -2 on block，sweep 是 -10 on block 可以用 2LP 或 236LP 惩罚。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以惩罚。"
      - "优势距离在中近距离：Ryu 的 Shoryuken LP 只有 6f 完全无敌，你的 2MP +7 on hit 可以安全帧陷阱——如果他 DP，你只是被打但可以用 SA1 惩罚。进入 Sprint 距离后持续用 Overhead/Low/Stop 三择施压。Ryu 的防御工具有限（OD Shoryuken 和 CA），没有逆转时可以大胆起身压制。"
      - "DI 在 Ryu 出 5HP 或 sweep 时使用。DR 在波动后突进。Ryu 的 OD Shoryuken 是他最好的逆转但消耗 Drive，如果你持续压制可以耗尽他的资源。CA 在 Ryu 跳入或出重攻击的恢复帧时使用。SA3 Install 后追击能力增强，Ryu 很难从你的压制循环中逃脱。"
    keyMoves: ["3MK Slide", "Sprint 系统", "2MP"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "Chun-Li 的长距离 poke 和 Serenity Stream 让接近困难，但一旦进入近距离 Kimberly 有优势"
    strategies:
      - "Chun-Li 的 5MP、2MP、5HP 都有极长判定距离，让她在远中距离很强。特别注意她的 Serenity Stream 姿态会蹲低避开你的 5LP、5MP 和 Sprint 系列攻击。不要盲目出招，等她姿态结束后再进攻。Chun-Li 的 2HP 是 -5 on block 可以用 236LP 惩罚。她的 Spinning Bird Kick 输入 5HK 恢复帧长，用 2MP 确认惩罚。"
      - "接近方式：用 DR 穿过她的波动和长距离 poke。3MK Slide 在中距离惩罚她的poke企图。j.2MP Elbow Drop 可以安全跳过她的攻击距离。一旦进入 2MP 距离，Chun-Li 的按钮不再有优势——用 Sprint 系统持续施压。她的 OD Tensho Kicks 是她唯一的逆转选项但没有完全无敌。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 用于突破她的中距离 poke 墙。角落压制时用 Sprint~Overhead/Slide/Stop 混合，Chun-Li 的防御选项有限。CA 在她空中攻击跳入时用，因为 Tensho Kicks 是她的 anti-air 但不是无敌的。"
    keyMoves: ["Drive Rush", "j.2MP Elbow Drop", "Sprint 系统"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时疯狂进攻，不给他喘息空间"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口疯狂进攻——开局立刻用 Sprint 或 DR 接近。如果让他喝到 Level 4，他的 frame trap 和伤害大幅提升。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2LP 惩罚。他的 command grab 在有酒时范围增大但仍然可以跳开。"
      - "Jamie 的 OD The Devil Inside 是他唯一的逆转但不是完全无敌。这意味着你可以大胆地在 Jamie 没有超级必杀时进行起身压制。用 Sprint~Overhead/Slide/Stop 三择持续施压。Jamie 的 SWK（stepkick）是 frame trap 工具，被防后不要乱按按钮。"
      - "DI 在 Jamie 用重攻击或尝试喝酒时使用可以打断。DR 用于快速接近不给他喝酒空间。CA 在 Jamie 跳入或出危险大招时使用。SA3 Install 后速度优势让你可以一直追着他打，他很难找到喝酒的机会。"
    keyMoves: ["Sprint 系统", "DR~2MK", "5MK"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的波动+反击系统让接近非常困难，需要耐心寻找突破口"
    strategies:
      - "Guile 是 Kimberly 最难打的对局之一。Sonic Blade + Sonic Boom 组合让你很难接近。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一（LP 版本 4f 启动，完全无敌）。方法是用 Perfect Parry 吸波节省 Drive Gauge，然后 DR 突进。3MK Slide 在中距离穿 Sonic Boom 但 Guile 恢复快可能被惩罚。OD Hidden Variable (214PP) 穿波直接开始压制是高风险高回报的选择。"
      - "一旦进入中近距离，Guile 的 button 不如你灵活。用 2MP 和 5MK 在他的 Sonic Boom 间隙 poke。Guile 的 5HP 是 -6 on block，确认后用 2LP 或 236LP 惩罚。他的 2HK sweep 是 -10 on block，用 2LP 惩罚。Flash Kick LP 是 -25 on block，用重攻击或 236MP 惩罚。进入 Sprint 距离后用 Overhead/Low/Stop 混合——但注意 Guile 的 Flash Kick 是完全无敌的逆转。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。DR 在读准他的波动时机后突进，不要盲目 DR。CA 保留到关键时刻，Guile 防御很强所以可能需要 CA 来破防。SA3 的 Install 提升移动速度后更容易穿越波动追击他。"
    keyMoves: ["OD Hidden Variable", "Perfect Parry", "3MK Slide"]
  - opponent: "juri"
    difficulty: "even"
    summary: "双方都想进攻，谁先建立节奏谁就赢"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在充电时（214K 动作）是最脆弱的，这是你进攻的最佳窗口——用 Sprint 或 DR 赶在她完成充电前打断。Juri 有 stock 时她的 623HP (DP) 和 214HP 都会消耗 stock 变强。Juri 的 5MP 和 2MP 速度和你的差不多，但她的 2MK 是低攻击有更长距离。用 2MP (+7 on hit) 作为主要确认工具。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 236LP 惩罚。"
      - "中距离是关键战场：用 5MK 和 2MP 试探，确认后 DR 进入连段。Juri 的 5HP 是 -7 on block，用 2LP 确认惩罚。一旦进入 Sprint 距离，注意 Juri 的 OD DP 是她最好的逆转。当她没有 meter 时可以大胆起身压制。Juri 的 Go Ohsatsu (214HP) 消耗 stock 后有很大的压制力，被防后 -2 但后续 mix 很强。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。CA 保留到中后期回合，Juri 的伤害输出很高所以你可能需要 CA 来追赶。注意 Juri 的 SA3 也是完全无敌的逆转，在她的超级必杀满时要更谨慎。"
    keyMoves: ["2MP", "Sprint 系统", "5MK"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的波动和 DP 都是强工具，但 Kimberly 的速度可以让他难以应对"
    strategies:
      - "Ken 的核心威胁是 Hadoken 控场和 Shoryuken 逆转。他的 HP Shoryuken 有完全无敌是强力的 anti-air 和逆转。Ken 的 Jinrai Kick (236HK) 是快速接近工具，-5 on block 可以用 2LP 惩罚。他的 5HP 有很长的距离但 -7 on block。用 3MK Slide 穿他的波动，j.2MP Elbow Drop 跳过波动。Ken 的 Dragonlash Kick (623K) 可以被 Perfect Parry 或 2HP anti-air。"
      - "优势距离在中近距离：用 5MK 和 2MP 在波动范围外 poke。确认后 DR 进入连段。进入 Sprint 距离后注意 Ken 的 OD Shoryuken 是完全无敌的逆转——不要过度使用可以被预判的路线。Mix Sprint~Stop 诱骗他出 DP，然后 punish。Ken 没有 meter 时防御薄弱，可以大胆压制。"
      - "DI 在 Ken 出 5HP 或重攻击时使用。DR 在波动后突进。CA 在 Ken 跳入时用。Ken 的 SA3 也是完全无敌的但启动较慢（9f），你的 SA1 (10f) 可以和他对拼。SA3 Install 后移动速度提升让 Ken 更难用波动控制你。"
    keyMoves: ["3MK Slide", "j.2MP Elbow Drop", "Sprint 系统"]
  - opponent: "blanka"
    difficulty: "disadvantageous"
    summary: "Blanka 的电球和奇怪的 hitbox 让 Kimberly 的进攻时机难以把握"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball 的混乱节奏和 Electric Thunder 的 anti-air。Blanka Ball 的各种版本让你很难预测——LP 版本快但 -8 on block 可以用 2LP 或 236LP 惩罚。HP 版本 -14 on block 用重攻击惩罚。Blanka 的 5LK 有极长距离（1.09 range），让你的 spacing trap 对他不太有效。他的 Vertical Roll 是对空工具但不是无敌的。"
      - "接近方式：用 3MK Slide 穿过 Blanka Ball 的某些版本。DR 直接突进接近。进入中距离后用 5MK 和 2MP 控制节奏。注意 Blanka 的 crouch 状态很低，一些 Kimberly 的攻击可能打不到。在角落压制时用 Sprint~Stop 诱骗 Blanka 使用 Blanka Ball 或 electricity，然后 punish。"
      - "DI 在 Blanka 出 HP Blanka Ball 或重攻击时使用。DR 用于快速接近。Blanka 的 SA1 是打击/投无敌的逆转，注意在他有 meter 时不要 predictable。CA 保留到最后击杀。Blanka 的后dash 距离很长，追踪时可能需要用 OD Sprint。"
    keyMoves: ["DR~2MK", "236LP", "Sprint~Stop"]
  - opponent: "dhalsim"
    difficulty: "even"
    summary: "Dhalsim 的远距离控制很强，但 Kimberly 的机动性可以快速拉近距离"
    strategies:
      - "Dhalsim 的核心威胁是 Yoga Fire/Yoga Flame 控场和长距离 limb 攻击。他的 5LP 有很长距离，5MK 和 5HP 可以从远距离 poke。用 3MK Slide 穿 Yoga Fire，j.2MP Elbow Drop 跳过火焰。OD Hidden Variable 穿越所有飞行道具直接到他面前是强力的接近选项。Dhalsim 的 Yoga Arch (空中火焰) 让你的跳跃时机更难把握。"
      - "一旦进入中近距离，Dhalsim 的防御非常弱。他的 2HP 是 -5 on block 可以用 236LP 惩罚。他没有可靠的逆转（OD Yoga Flame 不是无敌的）。在角落用 Sprint 系统持续施压，Dhalsim 几乎没有逃脱手段。用 Shuriken Bomb setplay 在角落碾压他。"
      - "DI 在 Dhalsim 出 5HP 或重 limb 攻击时使用。DR 用于快速拉近距离。CA 在 Dhalsim 尝试 Yoga Flame 或重攻击时使用。SA3 Install 后移动速度大幅提升，Dhalsim 的远距离控制变得更加困难。"
    keyMoves: ["OD Hidden Variable", "3MK Slide", "Sprint 系统"]
  - opponent: "e-honda"
    difficulty: "even"
    summary: "Honda 的冲撞和指令投让防守压力大，但他的大 hitbox 是 Kimberly 连段的靶子"
    strategies:
      - "Honda 的核心威胁是 Hundred Hand Slap 压制和 Sumo Headbutt 接近。他的 command grab（Orochi Break）范围大，被近身后要小心投技 mix。Honda 的 2LP 和 5LK 都有很长距离（1.09+ range），让你的 spacing trap 需要更长的 pushback 才能生效。HP Sumo Headbutt 是 -14 on block 可以用 2LP > 236LP 惩罚。"
      - "优势距离在中距离：用 5MK poke，Honda 的 limb 虽然长但恢复帧也长。2MP 作为预测性 counterpoke 很有效。进入 Sprint 距离后注意 Honda 的 Super 但abare（延迟轻攻击）很强。不要在 Honda 面前无脑出重攻击——他的 Hundred Hand Slap 可以打断。用 Sprint~Stop 诱骗他出 Headbutt 或 command grab 然后 punish。"
      - "DI 在 Honda 出 HP Headbutt 或重攻击时使用。DR 用于穿过他的攻击接近。Honda 的 SA2 (Nishikigi) 是打击无敌的逆转。CA 在 Honda 冲撞的恢复帧时使用。角落压制时注意 Honda 的 2LP 范围很长，你的 spacing trap 需要调整。"
    keyMoves: ["2MP", "Sprint~Stop", "5MK"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的波动和快速 poke 让接近有挑战，但他的防御有限"
    strategies:
      - "Dee Jay 的核心威胁是 Air Slasher 波动和 Jus Cool 姿态系统。他的 5MP 有很快的启动和不错的距离。Dee Jay 的 5LP 也是 4f 启动有较长距离，影响你的 spacing trap。他的 Double Rolling Sobat (2HK) 是 -12 on block 可以用 2LP 惩罚。Air Slasher 恢复较快，3MK Slide 穿波需要更精确的时机。"
      - "接近方式：用 DR 穿波动，j.2MP Elbow Drop 跳过 Air Slasher。进入中距离后用 5MK 和 2MP 试探。Dee Jay 的 Jus Cool 姿态可以让你的一些攻击落空，等姿态结束后再进攻。进入 Sprint 距离后 Dee Jay 没有完全无敌的逆转（只有 OD Jackknife Maximum 有对空无敌），可以大胆压制。"
      - "DI 在 Dee Jay 出 2HK 或重攻击时使用。DR 在波动后突进。CA 在 Dee Jay 尝试重攻击时使用。Dee Jay 的 SA1 有打击无敌但启动慢。角落压制时 Shuriken Bomb setplay 很有效因为 Dee Jay 防御选项有限。"
    keyMoves: ["Drive Rush", "5MK", "Sprint 系统"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "Kimberly 的速度和压制力克制 Manon 的慢节奏和勋章系统"
    strategies:
      - "Manon 的核心威胁是 Médaille 勋章系统——每成功投技增加勋章等级提升伤害和范围。不要让她免费积累勋章。她的 hit grab (Rond-point) 是主要的中距离威胁但恢复帧很长。Manon 的 5LP 和 2LP 距离较长（0.96+ range），但她的移动速度非常慢。用 5MK 在她的 hit grab 范围外 poke，不要在她面前站太久。"
      - "优势：Manon 的移动速度是游戏中最慢的之一，Kimberly 的速度优势巨大。一旦进入 Sprint 距离，Manon 几乎无法逃脱你的 Overhead/Low/Stop 三择。她的逆转只有 OD Renversé（不是无敌的）和 SA。在角落持续用 Sprint 系统压制，Shuriken Bomb setplay 让 Manon 无处可逃。"
      - "DI 在 Manon 出重攻击或 hit grab 时使用。DR 在她的攻击间隙突进。CA 在 Manon 尝试 command grab 或重攻击时使用。注意 Manon 的 SA1 有打击/投无敌但启动较慢。如果 Manon 积累到 5 勋章，她的投技伤害极高，尽量避免被她 hit grab 或 command grab。"
    keyMoves: ["Sprint 系统", "5MK", "DR~2MK"]
  - opponent: "marisa"
    difficulty: "even"
    summary: "Marisa 的装甲和重攻击很危险，但她的慢速度让 Kimberly 可以控制节奏"
    strategies:
      - "Marisa 的核心威胁是 Gladius 装甲攻击和 Quadriga 冲刺。她的重攻击都有超级装甲，可以吸一击然后反击——不要用单发重攻击对抗她。Marisa 的 2LP 距离较长（0.96+ range）影响 spacing trap。她的 Scutum 是 counter stance 会读取你的攻击时机。用 2MP 的快速恢复和 5MK 的距离在 Marisa 的攻击范围外 poke。"
      - "优势距离在中距离：Marisa 移动慢，用 5MK 和 2MP 保持距离优势。确认后 DR 进入连段。Marisa 的 Gladius 系列恢复帧长（-8 到 -15 on block），确认后用 236LP 或 2LP 惩罚。进入 Sprint 距离后注意 Marisa 的 Super 可以 break armor。用 Sprint~Stop 诱骗她出 Gladius 然后 punish。"
      - "DI 在 Marisa 出 Gladius 或 Quadriga 时非常有效因为她的装甲被 DI break。DR 用于快速接近。CA 在 Marisa 出重攻击的恢复帧时使用。角落压制时注意 Marisa 的 SA1 有打击无敌。Marisa 的伤害输出极高，一个失误就可能吃 4000+ 伤害连段——保持冷静，不要贪心。"
    keyMoves: ["Drive Impact", "Sprint~Stop", "5MK"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的远距离控场和反击系统让 Kimberly 的接近非常困难"
    strategies:
      - "JP 是 Kimberly 最难打的对局之一。Torre Annihilation (地刺) 从远距离 poke 并且让 Kimberly 无法随意移动。他的 Interdiction (虚空柱) 控制空间，配合波动让接近变得非常困难。JP 的 2LP 距离较长（1.07 range），影响你的 spacing trap。JP 的 5HP 是 -5 on block 可以用 236LP 惩罚但距离要够。"
      - "接近方式：OD Hidden Variable 穿越所有飞行道具是最佳选择。3MK Slide 可以穿地刺但 JP 可以反应。j.2MP Elbow Drop 跳过波动。进入中距离后用 2MP 和 5MK 快速 poke——不要站太久因为 JP 的 void 和地刺会让你很难受。JP 没有完全无敌的逆转（SA3 除外），进入 Sprint 距离后可以持续压制。"
      - "DI 在 JP 出地刺或重攻击时使用。DR 在波动后突进。CA 在 JP 尝试远距离攻击时用。SA3 Install 后移动速度提升帮助穿越 JP 的控场区域。注意 JP 的 SA2 是完全无敌的 9f 启动逆转，在他有 meter 时要谨慎。"
    keyMoves: ["OD Hidden Variable", "3MK Slide", "Drive Rush"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Zangief 的慢速度让 Kimberly 可以轻松控制距离和节奏"
    strategies:
      - "Zangief 的核心威胁是 SPD command grab 和 Siberian Express 装甲冲撞。他的 2LK 距离极长（1.09+ range），让你的 spacing trap 对他不太有效。不要在他的 command grab 范围内站太久——SPD 有 5f 启动和巨大范围。用 5MK 在他的 SPD 范围外 poke，2MP 作为快速 poke 工具。Siberian Express 有装甲，不要用单发攻击对抗——用 DI 或 Perfect Parry。"
      - "优势巨大：Zangief 是游戏中最慢的角色，Kimberly 是最快的之一。用 5MK 和 3MK Slide 在他的攻击范围外持续 poke。进入 Sprint 距离后用 Overhead/Low/Stop 三择——Zangief 的 SPD 可以 grab 你的 Stop 但如果你用 2LP 或延迟攻击可以打断。在角落 Shuriken Bomb setplay 几乎无解因为 Zangief 移动太慢无法逃脱。"
      - "DI 在 Zangief 出 Siberian Express 或重攻击时使用。DR 在他的攻击间隙突进。CA 在 Zangief 尝试 SPD 或 lariat 时使用。注意 Zangief 的 SA1 和 SA2 都是 command grab 性质无法站防——看到超级必杀动画时立刻跳开。SA3 Install 后速度差距更大，Zangief 几乎追不上你。"
    keyMoves: ["5MK", "Sprint 系统", "Shuriken Bomb"]
  - opponent: "lily"
    difficulty: "even"
    summary: "Lily 的 Wind Stock 系统让她爆发力强，但 Kimberly 的速度可以控制节奏"
    strategies:
      - "Lily 的核心威胁是 Wind Stock 系统——有 stock 时她的特殊技增强，Condor Wind 充满 stock 后她的进攻非常强。她的 5LK 有较长距离（1.06+ range）。Condor Spire 有装甲并且接近速度快。用 3MK Slide 穿过她的部分攻击。Lily 的 Tomahawk Buster 是对空工具但不是无敌的。"
      - "优势距离在中距离：用 5MK poke，Lily 的 stock 为空时她的威胁大幅降低——趁这个窗口进攻。进入 Sprint 距离后用 Overhead/Low/Stop 三择。Lily 的 OD Tomahawk Buster 有完全无敌但启动慢，可以用 Sprint~Stop 诱骗。在角落持续压制，Lily 没有 meter 时防御非常弱。"
      - "DI 在 Lily 出 Condor Spire 或重攻击时使用。DR 在她的充能动画时突进。CA 在 Lily 跳入时使用。注意 Lily 的 SA1 是打击/投无敌的逆转，在她有 meter 时不要 predictable。SA3 Install 后速度优势更加明显。"
    keyMoves: ["5MK", "Sprint 系统", "DR~2MK"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "双方都是高速突进角色，谁先拿到 knockdown 谁就占据主动"
    strategies:
      - "Cammy 的核心威胁是 Hooligan Combination 的空中混合和 Spiral Arrow 的地面接近。她的 5LP 和 2LP 都是 4f 启动且距离较长（0.92+ range）。Cammy 的 Cannon Strike (空中 dive kick) 让她的跳跃进攻很难 anti-air。她的 Cannon Spike 是完全无敌的 DP (5f)，是强力的逆转和 anti-air。用 2HP anti-air 她的常规跳跃，214LK anti-air 她的空中进攻。"
      - "中距离是关键战场：用 5MK 和 2MP 试探。Cammy 的 Spiral Arrow 是 -14 on block 可以用 2LP > 236LP 惩罚。进入 Sprint 距离后注意 Cammy 的 OD Cannon Spike 是完全无敌的逆转——用 Sprint~Stop 诱骗。Cammy 的 5HK 是 -2 on block 比较安全，但你的 2MP 可以 counterpoke。"
      - "DI 在 Cammy 出 Spiral Arrow 或重攻击时使用。DR 用于对攻。CA 在 Cammy 跳入或 Cannon Strike 时使用。注意 Cammy 的 SA1 有打击无敌但启动较慢。SA3 Install 后你的速度和 Cammy 匹配甚至超过，可以主导节奏。"
    keyMoves: ["2HP", "214LK", "Sprint~Stop"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的风系控场让节奏变化多端，需要适应他的速度"
    strategies:
      - "Rashid 的核心威胁是 Arabian Cyclone (风圈) 控场和 Eagle Spike 接近。他的 5LP 距离较长（1.09+ range），影响你的 spacing trap。Rashid 的 Wing Stroke (空中冲刺) 让他的空中角度很难预测。Arabian Gust (跑动) 让他快速接近但可以被拦截。用 3MK Slide 穿风圈，2HP anti-air 他的空中进攻。"
      - "中距离用 5MK 和 2MP 控制。Rashid 的 Eagle Spike 是 -5 on block 比较安全但可以用 2LP 或延迟攻击 counter。进入 Sprint 距离后注意 Rashid 的 OD Eagle Spike 有完全无敌。用 Sprint~Stop 诱骗然后 punish。Rashid 的移动速度也很快，你的速度优势不如对其他角色明显。"
      - "DI 在 Rashid 出重 Eagle Spike 或风圈时使用。DR 在他的攻击间隙突进。CA 在 Rashid 空中进攻时使用。注意 Rashid 的 SA2 是完全无敌的逆转。角落压制时 Shuriken Bomb setplay 对 Rashid 也有效但要注意他的 OD Eagle Spike 逃脱。"
    keyMoves: ["3MK Slide", "2HP", "Sprint~Stop"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I. 的毒系 setplay 很麻烦，但她的防御薄弱让 Kimberly 可以持续压制"
    strategies:
      - "A.K.I. 的核心威胁是毒液系统和 Orbs 设置。被上毒后你的血量持续下降，需要更积极地进攻。她的 5LK 有较长距离（1.08+ range）。A.K.I. 的 Toxic Glamour (蛇行) 是快速接近工具但 -6 on block 可以用 2LP 或 236LP 惩罚。她的 Cruel Blossom (毒爆) 在毒状态下伤害极高——被上毒后不要贪心进攻。用 3MK Slide 穿她的波动。"
      - "优势距离在中近距离：A.K.I. 的防御工具非常有限，她没有完全无敌的逆转（只有 SA3 是完全无敌）。这意味着你可以大胆地在她起身时压制。用 Sprint 系统持续施压，Shuriken Bomb setplay 在角落对她几乎无解。A.K.I. 的 2HP 是 -4 on block 可以用 236LP 惩罚。"
      - "DI 在 A.K.I. 出重攻击或设置 Orbs 时使用。DR 在她的攻击间隙突进。CA 在 A.K.I. 尝试上毒的恢复帧时使用。SA3 Install 后速度优势让你可以一直压制她不让她有时间设置毒系 setplay。注意 A.K.I. 的 SA1 是打击无敌的逆转。"
    keyMoves: ["Sprint 系统", "Shuriken Bomb", "DR~2MK"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离对峙困难，但 Kimberly 的速度可以找到破绽"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (中距离快速拳) 和 Psycho Rush 接近。他的 5LP 距离较长（0.94+ range）。Ed 的 Kill Dash (闪避攻击) 可以穿过你的攻击但可以被 Perfect Parry。他的 Psycho Snapper 是 counter stance 会读取你的攻击时机。用 2MP 的快速恢复 poke，5MK 在他的 Flicker 范围外。"
      - "接近方式：用 DR 窿过他的 Flicker。3MK Slide 在中距离惩罚他的 poke 企图。进入 Sprint 距离后注意 Ed 的 OD Psycho Upper 有完全无敌是强力的逆转。用 Sprint~Stop 诱骗他出 OD Psycho Upper 然后 punish。Ed 的防御工具有限（除了 OD Psycho Upper），没有 meter 时可以大胆压制。"
      - "DI 在 Ed 出重攻击或 Psycho Rush 时使用。DR 在他的 Flicker 间隙突进。CA 在 Ed 尝试 Kill Dash 或重攻击时使用。注意 Ed 的 SA1 有打击无敌但启动较慢。角落压制时 Shuriken Bomb setplay 对 Ed 很有效。"
    keyMoves: ["Drive Rush", "Sprint~Stop", "5MK"]
  - opponent: "akuma"
    difficulty: "disadvantageous"
    summary: "Akuma 的全面工具箱和极高伤害让每个失误都很致命"
    strategies:
      - "Akuma 的核心威胁是 Gohadoken 控场、Shoryuken 逆转和极高伤害输出。他的 5LP 和 2LP 都是 4f 启动且距离较长。Akuma 的 HP Shoryuken 有完全无敌（5f），是极强的逆转和 anti-air。他的 5HP 有很长的距离和 forward movement 但 -7 on block 可以用 2LP 惩罚。Demon Flip (空中冲刺) 让他的跳跃角度很难预测。"
      - "接近方式：用 3MK Slide 穿波动，j.2MP Elbow Drop 跳过波动。Akuma 的血量只有 9500（最低之一），所以你不需要太多命中就能击杀。但他的伤害输出极高（一个连段可能 4000+），所以你也不能承受太多失误。用 5MK 和 2MP 在他的波动范围外 poke。进入 Sprint 距离后注意他的 OD Shoryuken 是完全无敌的。"
      - "DI 在 Akuma 出 5HP 或重攻击时使用。DR 在波动后突进。CA 在 Akuma 跳入或出重攻击的恢复帧时使用。注意 Akuma 的 SA1 (Raging Demon) 是完全无敌的 command grab——无法站防。SA3 Install 后你的速度提升帮助穿越他的控场。注意 Akuma 的空中 Gohadoken 让你的 anti-air 时机更难把握。"
    keyMoves: ["3MK Slide", "Sprint~Stop", "5MK"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "M. Bison 的 Psycho Power 让他攻防兼备，需要打乱他的节奏"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Cannon 波动和 Bison Warp 传送。他的 5LK 距离较长（1.09+ range），影响你的 spacing trap。Bison 的 Psycho Axe (5HP) 有装甲并且距离极长但 -5 on block 可以用 236LP 惩罚。他的 Head Press (踩踏) 可以被 2HP 或 214LK anti-air。Bison Warp 传送让他可以快速切换位置。"
      - "优势距离在中距离：用 5MK poke，2MP counterpoke。Bison 的 Psycho Impact 是 -7 on block 可以用 2LP 确认惩罚。进入 Sprint 距离后注意 Bison 的 OD Blast 是打击无敌的逆转。用 Sprint~Stop 诱骗他出逆转然后 punish。Bison 没有完全无敌的 DP，所以你的起身压制比较安全（除了 SA3）。"
      - "DI 在 Bison 出 Psycho Axe 或重攻击时使用。DR 在他的波动后突进。CA 在 Bison 尝试 Head Press 或重攻击时使用。注意 Bison 的 SA2 有打击无敌。角落压制时 Shuriken Bomb setplay 对 Bison 很有效因为他没有可靠的 escape 工具。"
    keyMoves: ["2HP", "5MK", "Sprint 系统"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 的 Power Wave 和 Burn Knuckle 是稳定的工具，但 Kimberly 可以用速度压制"
    strategies:
      - "Terry 的核心威胁是 Power Wave 地面波动和 Burn Knuckle 接近。他的 5LP 和 2LP 都是 4f 启动且距离较长。Terry's Rising Tackle 是完全无敌的 DP (5f) 是强力的逆转。他的 Crack Shoot 是 overhead 攻击但 -5 on block 可以用 2LP 惩罚。Power Dunk 是他的 anti-air 但不是无敌的。用 3MK Slide 穿 Power Wave。"
      - "中距离用 5MK 和 2MP 控制。Terry 的 Burn Knuckle 是 -10 on block 可以用 2LP > 236LP 惩罚。进入 Sprint 距离后注意 Terry 的 OD Rising Tackle 有完全无敌。用 Sprint~Stop 诱骗。Terry 没有_meter 时防御工具有限。注意 Terry 的 Power Charge 有装甲可以吸你的轻攻击。"
      - "DI 在 Terry 出 Burn Knuckle 或重攻击时使用。DR 在 Power Wave 后突进。CA 在 Terry 跳入或 Rising Tackle 的恢复帧时使用。注意 Terry 的 SA1 有打击无敌但启动慢。SA3 Install 后速度优势让你可以一直压制他不让他设置 Power Wave 控场。"
    keyMoves: ["3MK Slide", "Sprint~Stop", "5MK"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai 的扇子和忍者工具让中距离很棘手，但 Kimberly 的近距离压制更强"
    strategies:
      - "Mai 的核心威胁是扇子飞行道具和 Musasabi no Mai (空中冲刺)。她的 5LP 和 5LK 都有较长距离（1.09+ range），让你的 spacing trap 对她效果不好。Mai 的 Kachousen (扇子投掷) 是中距离 poke 工具。她的空中进攻角度多变，需要精确的 anti-air 时机。用 214LK anti-air 她的空中进攻。"
      - "接近方式：用 DR 穿扇子，3MK Slide 穿飞行道具。进入中距离后用 5MK 和 2MP 试探。Mai 的防御工具有限——她的 Ryuei Jin (counter) 可以读取你的攻击时机但可以被打断。进入 Sprint 距离后持续用 Overhead/Low/Stop 三择施压。"
      - "DI 在 Mai 出重攻击或扇子时使用。DR 在她的攻击间隙突进。CA 在 Mai 空中进攻时使用。注意 Mai 的 SA1 和 SA2 都有各自的用途。角落压制时 Shuriken Bomb setplay 对 Mai 很有效。SA3 Install 后速度优势让你更容易接近她。"
    keyMoves: ["Drive Rush", "214LK", "Sprint 系统"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的治疗能力和长距离 attack 让持久战不利，需要积极进攻"
    strategies:
      - "Elena 的核心威胁是治疗能力和 Capoeira 的长距离攻击。她的 2LP 距离较长（1.08+ range），影响 spacing trap。Elena 的 Mamelasshoru (长距离 kick) 让中距离 poke 很有效。她的 Lynx Tail (旋转踢) 是 multi-hit 攻击但恢复帧较长。最关键的是她的 Healing 能力——如果让她有时间治疗，你的伤害优势会被抵消。"
      - "对策是持续进攻不给 Elena 治疗的机会。用 5MK 和 DR 快速接近。进入 Sprint 距离后用 Overhead/Low/Stop 三择持续施压。Elena 的 Scrub (handstand kick) 可以避开一些低攻击。用 2MP 作为快速 poke 工具。Elena 的防御工具有限，没有完全无敌的逆转（除了 SA3）。"
      - "DI 在 Elena 出重攻击或 Lynx Tail 时使用。DR 用于持续保持近距离。CA 在 Elena 尝试治疗或出重攻击时使用。SA3 Install 后速度提升让你可以一直追着她打，不给她任何喘息空间。角落压制时 Shuriken Bomb setplay 是最好的策略。"
    keyMoves: ["Sprint 系统", "Drive Rush", "Shuriken Bomb"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "对手信息有限，保持 Kimberly 核心打法——用速度优势控制节奏"
    strategies:
      - "Volcano Handshake 的核心招式和特性需要在对局中摸索。保持 Kimberly 的核心打法：用 5MK 和 2MP 在中距离控制，确认后 DR 进入连段。用 3MK Slide 穿波和试探对手习惯。2HP anti-air 对手的跳跃进攻。"
      - "接近后用 Sprint 系统建立 Overhead/Low/Stop 三择压制。如果对手没有完全无敌的逆转，可以大胆起身压制。用 Shuriken Bomb 在角落建立 setplay。注意观察对手的攻击模式，找到 punishes 的窗口。"
      - "DI 在对手出重攻击或恢复帧长的招式时使用。DR 用于快速接近和确认。CA 保留到关键时刻。SA3 的 Install 状态提升后整体性能增强。保持进攻节奏，不要让对手有时间适应。"
    keyMoves: ["5MK", "Sprint 系统", "DR~2MK"]
---
