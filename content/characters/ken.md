---
name: "Ken"
subtitle: "The Fire-Breathing Fist"
overview: "Ken is an aggressive rushdown character who dominates with his Quick Dash run system, Jinrai Kick pressure sequences, and devastating Dragonlash Kick approach tools. His unique Run mechanic lets him cancel into multiple options — stop for frame traps, overhead/low mix-ups, or Dragonlash Kick for combo starters — making his offense layered and difficult to defend. With a reliable anti-air Shoryuken, strong Drive Rush conversions, and excellent corner carry, Ken is a top-tier character who rewards proactive play with explosive damage."
keyMoves:
  - name: "Jinrai Kick (LK)"
    input: "236LK"
    description: "Ken's signature pressure tool. LK version is 15f startup, safe on block at -3. The real threat is the follow-up mix: Senka Snap Kick (overhead, P followup) or low kick (K followup). Delayed follow-ups create frame traps. Opponents must guess high/low/throw after blocked Jinrai, making it the core of Ken's offensive loop."
    startup: 15
    active: 3
    recovery: 18
    damage: 600
  - name: "Jinrai Kick (MK)"
    input: "236MK"
    description: "17f startup version with better range. The go-to Jinrai from mid-range footsies. Same high/low follow-up system but the increased range means you can start pressure from further out. MK Jinrai → Senka Snap on hit gives hard knockdown for oki. On block, the delayed Senka is a frame trap that catches mashing."
    startup: 17
    active: 3
    recovery: 20
    damage: 700
  - name: "Jinrai Kick (HK)"
    input: "236HK"
    description: "19f startup with the longest range but -6 on block — punishable if opponent reads it. Use selectively to catch opponents walking back. HK Jinrai on hit combos into Senka Snap for corner carry. The threat of this move keeps opponents from disengaging freely."
    startup: 19
    active: 3
    recovery: 22
    damage: 800
  - name: "Shoryuken (LP)"
    input: "623LP"
    description: "Ken's DP anti-air. LP version has 5f startup with invincibility frames 1-8, making it excellent for anti-airing jump-ins. HP version has 9f startup and deals 1200 damage. OD Shoryuken is fully invincible frames 1-10 and can follow up with a second hit. Essential for keeping opponents honest in the air."
    startup: 5
    active: 10
    recovery: 34
    damage: 900
  - name: "Hadoken (HP)"
    input: "236HP"
    description: "Ken's fireball. HP version has 20f startup and is +3 on hit. LP version is fastest at 14f but -3 on block. OD Hadoken wall splats for combo follow-up. Use HP Hadoken to control mid-range spacing and complement footsies. Ken's Hadoken doesn't have Ryu's Denjin charge system, but the OD version's wall splat is a powerful tool."
    startup: 20
    active: 0
    recovery: 27
    damage: 600
  - name: "Dragonlash Kick"
    input: "214K (during Run)"
    description: "Approaching kick from Run state. LK version is 18f startup with combo potential on late hit — spacing it to connect on the last active frame enables links into 2LP or 5MP. MK and HK versions deal more damage and carry further to the corner. OD Dragonlash is a key combo extender from 2MK confirms."
    startup: 18
    active: 6
    recovery: 24
    damage: 800
  - name: "Quick Dash (Run~Stop)"
    input: "66KK or 236KK~Stop"
    description: "Ken's defining movement mechanic. Run cancels from normals (5MP~HK, 5HP~HK) allow frame traps and combo extensions. Run~Stop is +2 on block, creating sustained pressure. Use Run~Stop → 2LP → 5MP~HP target combo for confirm routes. The threat of Run → Dragonlash or Run → overhead forces opponents to constantly guess."
    startup: 0
    active: 0
    recovery: 12
    damage: 0
  - name: "Tatsumaki Senpukyaku (LK)"
    input: "214LK"
    description: "Ken's hurricane kick. LK version is safe for spacing, MK and HK versions carry opponents to the corner. HK Tatsumaki is -10 on block so only use in combos. Air Tatsumaki provides horizontal air movement for cross-up attempts. Core combo ender for midscreen routes."
    startup: 16
    active: 8
    recovery: 22
    damage: 800
  - name: "Heat Rush (Level 2 Super)"
    input: "214214K"
    description: "Fully invincible frames 1-7. 7f startup dealing 2800 damage. Ken dashes forward with a fiery strike. Can combo after OD Dragonlash in the corner. Good as a reversal or anti-air option. The forward movement makes it useful for punishing predicted approaches."
    startup: 7
    active: 0
    recovery: 0
    damage: 2800
  - name: "Shippu Jinraikyaku (Critical Art)"
    input: "236236K"
    description: "Fully invincible frames 1-30. 9f startup dealing 4000 damage (4500 as Critical Art). Ken's ultimate comeback tool. Use to punish big whiffs, escape corner pressure, or close out a round. The animation is a rapid series of flaming kicks. KD +17 on hit."
    startup: 9
    active: 0
    recovery: 0
    damage: 4000
tips:
  - "开局用 HP Hadoken (20f, +3 on hit) 控制中距离，观察对手反应。对手跳入用 LP Shoryuken (5f, invincible 1-8) 对空；对手按按钮用 2MP (+5 on hit) 确认。确认命中后用 Run~Stop 取消进入 Jinrai 压制循环。HP Hadoken 命中后你仍有帧数优势，可以继续推进。"
  - "Ken 的核心连段路线：2MK → OD Dragonlash Kick 是中屏最稳定的确认路线，damage ~2000。角落用 j.HP → 2HP → 214LK → 623MP。Drive Rush 路线：St.HP → DR → B.HK → Cr.HP → 236HK (Jinrai) → Senka Snap 是角落最高伤害。Run~Stop 确认路线：5MP~HK~Stop → 2LP → 5MP~HP → 236LK 是中近距离核心确认。"
  - "立回中善用 2MP (+5 on hit, +1 on block) 和 5MK (+1 on hit, -3 on block) 试探。2MP 是 Ken 最好的确认按钮，打中可以 Run cancel 或 DR 接连段，被防只 +1 很安全。5MK 距离更长用于中距离 footsies。6HP（target combo 入口）是 -7 on block，谨慎使用。"
  - "Quick Dash / Run 系统是 Ken 的灵魂。5MP~HK~Run~Stop 是 +2 on block 的持续压力工具。Run 后可以出 Dragonlash Kick（接近+连段）、overhead（中段）、low（下段）或 throw。让对手在 Run 后不断猜测是 Ken 压制的核心。Drive Rush 后 Run~Stop → 2LP → 5MP~HP 是标准 confirm 路线。"
  - "对付远距离角色（Guile, Dhalsim, JP），不要急着跳入——Shoryuken 虽强但跳入是给他们反制机会。用 Hadoken 对波，找对手波动的间隙 Drive Rush 突进。进入中距离后用 Jinrai Kick 系统压制，不要让对手逃跑。Run~Stop 保持近距离持续压力。"
  - "Jinrai Kick 的高/低混合是 Ken 最强的进攻武器。236K → P (Senka Snap/中段) 和 236K → K (下段) 的二选一让对手无法安心防御。Jinrai blocked 后 delay Senka 是 frame trap 可以打 mash。注意 Jinrai HK (-6 on block) 是可被惩罚的，多用 LK (-3) 和 MK 版本。"
  - "Dragonlash Kick 的 late hit 技巧：让 Dragonlash 在最后一帧命中可以 link 进 2LP 或 5MP，这是 Ken 中距离 combo 的关键。OD Dragonlash 从 2MK confirm 是最重要的 BnB 入口。anti-air 始终用 LP Shoryuken，不要省——让对手不敢跳就是最好的回报。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "镜像对决式的中距离博弈，谁的 Jinrai/Flash Knuckle 压制更精准谁赢"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 接近和 Sand Blast 波动控制。你的 HP Hadoken (+3 on hit) 和他的 HP Sand Blast (+3 on hit) 帧数相同，波动战是纯技术对抗。Luke 的 Perfect Flash Knuckle HP (+4 on block) 是他的核心压制工具——不要乱按按钮，看清他是否 charged 再反应。用 LP Shoryuken (5f) anti-air 他的 jump-in。"
      - "中距离你的 5MK 和 2MP 和 Luke 速度差不多。关键是 Jinrai Kick vs Flash Knuckle 的博弈：你的 Jinrai LK (-3 on block) 和他的 Flash Knuckle LP (-18 on block) 比，你的更安全。Luke 的 5HK 有超远距离但 -6 on block 可以用 2MP 惩罚。用 Run~Stop 保持近距离压力，不要给他 space charge Flash Knuckle。"
      - "DI 时机：Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用 DI。DR 用于确认 2MP 命中后延伸连段。Luke 的 CA (Pale Rider, 10f) 比你的稍慢 (9f)，在 CA 对决中你有微弱优势。保留 CA 到击杀或关键时刻。DR 用于突破他的 Sand Blast 波动压制。"
    keyMoves: ["Jinrai Kick (LK)", "2MP", "LP Shoryuken"]
  - opponent: "ryu"
    difficulty: "advantageous"
    summary: "Ken 的 Run 系统和 Jinrai 压力让 Ryu 的 Denjin 充能节奏被严重干扰"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 后的强化 Hadoken 和 Hashogeki。他的波动控制在中距离很强，但 Ken 的 Run 系统让接近比大多数角色容易。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block 可以用 2MP 惩罚。Ryu 的 5HK 和 sweep 是主要 poke 但都是负帧，用 2MP 确认后 DR 取消惩罚。"
      - "你的优势在于 Run~Stop 压力循环。Ryu 的 Shoryuken LP 版本只有 6f startup（比你的 5f 慢），你的 2MP +5 on hit 可以安全地打 frame trap。Ryu 没有好办法处理 Run → Dragonlash 的接近——如果他 Shoryuken 你就 block 惩罚 (-27 on block)。Jinrai 的高/低混合让 Ryu 的防御很被动。"
      - "DI 在 Ryu 出 heavy Hadoken 或 sweep 时使用。DR 用于快速接近不让他 free charge Denjin。Ryu 的 CA (Shin Shoryuken, 9f) 和你的速度一样，不要在他有 CA 时 whiff 大招。CA 在确认 hit 或 Ryu whiff Shoryuken 时使用。对局节奏：主动进攻，用 Hadoken 试探后 Run 接近，不要被动对波。"
    keyMoves: ["Run~Stop", "Jinrai Kick (MK)", "2MP"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "Chun-Li 的长距离 poke 让接近有难度，但一旦进入 Jinrai 范围她就很难受"
    strategies:
      - "Chun-Li 的 5MP、2MP、5HP 判定距离极长，远中距离是她的领地。注意她的 Serenity Stream 姿态会蹲低避开你的 5LP、5MP 和 Hadoken。不要盲目发波——等她姿态结束或出招后再进攻。她的 2HP 是 -12 on block 可以惩罚。用 DR 穿过她的波动和 poke 是关键接近手段。"
      - "一旦进入 2MP 距离（中近距离），Chun-Li 的长距离普通技不再有优势。你的 Jinrai LK (-3 on block) 在近距离比她的按钮更有效。Run~Stop → throw/2LP/overhead 的混合让她难以防御。anti-air 她的 jump 和空中腿用 LP Shoryuken。她的 5HK recovery 长可以 2MP 惩罚。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 用于突破她的中距离 poke 墙——从 2MK~DR 确认进入连段。Chun-Li 的 OD Tensho Kicks 是她的逆转但不是完全无敌，可以大胆起身压制。CA 在她空中攻击跳入或 whiff 重攻击时使用。"
    keyMoves: ["Drive Rush", "Jinrai Kick (LK)", "LP Shoryuken"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时疯狂压制，不给他 free drink 的机会"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口用 Jinrai Kick 和 Run~Stop 疯狂进攻。开局立刻用 DR 或 Run 接近，不给他喝酒的空间。如果让他喝到 Level 4，他的 frame trap 和 damage 大幅提升。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2MP 惩罚。"
      - "Jamie 的 DP（OD The Devil Inside）是他唯一的逆转选项但不是完全无敌。当 Jamie 没有 meter 时可以大胆起身压制。用 Jinrai LK/MK 的高/低混合持续施压，mix 在 throw 之间。Jamie 的 2LP 是 4f 可以 mash，但你的 Run~Stop (+2 on block) frame trap 可以打他 mash。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 时使用。DR 用于快速接近不给他喝酒空间。Jamie 的 SWK（stepkick）是 frame trap 工具，注意不要乱按按钮。CA 在他跳入或出危险的大招时使用。始终保持进攻节奏——防守就是给他喝酒的机会。"
    keyMoves: ["Jinrai Kick (LK)", "Run~Stop", "Drive Rush"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Ken 最难打的对局之一，Guile 的 Sonic Boom 控制和 Flash Kick 对空让接近非常困难"
    strategies:
      - "Guile 是 Ken 最不利的对局。Sonic Boom + Sonic Blade 的组合让你的 Hadoken 无法有效对抗。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一。核心方法是用 Perfect Parry 吸波节省 Drive Gauge，然后找时机 DR 突进。HP Hadoken 和 Guile 对波时注意他可以 charge Sonic Boom 更快，波动战你会输。"
      - "一旦进入中近距离，Guile 的普通技不如你的好。2MP (+5) 和 5MK 是核心。Guile 的 5HP 是 -6 on block，确认后可以惩罚。他的 2HK sweep 是 -10 on block，用 2LP 或 2MP 惩罚。Flash Kick LP 是 -25 on block，用重攻击或 Jinrai Kick 重罚。用 Run~Stop 保持近距离压力不让他 free charge。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用，可以打断他的蓄力节奏。DR 在读准他的波动时机后突进，不要盲目 DR 因为 Flash Kick 会打你。CA 保留到关键时刻——Guile 防守很强可能需要 CA 来破防。耐心是关键：逐步缩短距离，不要急躁跳入。"
    keyMoves: ["Perfect Parry", "Drive Rush", "2MP"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的机动性需要冷静应对，但她的防御弱点让 Ken 的 Jinrai 压制特别有效"
    strategies:
      - "Kimberly 的核心威胁是她的传送混合（run stop overhead/low/throw）和幻影 dive kick。用 LP Shoryuken anti-air 她的空中进攻。她的 teleport 有明显的启动动画，用 2MP 或 5LP 打断她 teleport 后的恢复帧。不要乱出重攻击——她会 teleport 绕过。"
      - "Kimberly 的防御很弱：她没有完全无敌的 DP，只有 OD Bushin Senpukyaku 作为逆转。这意味着你可以大胆地在她起身用 Jinrai Kick 高/低混合压制。Run~Stop → throw/overhead/low 的混合在她没有逆转时特别有效。她的 5HK 是 -6 on block 可以用 2MP 惩罚。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离。CA 在她空中进攻时用，因为她在空中无法变招。距离控制：不要被她压制在角落，如果被推到角落用 DR 逃跑。"
    keyMoves: ["LP Shoryuken", "Jinrai Kick (LK)", "Run~Stop"]
  - opponent: "juri"
    difficulty: "even"
    summary: "双方都想进攻，先建立节奏的一方获胜——Ken 的 Run 系统比 Fuha 更灵活"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是最脆弱的，这是你进攻的最佳窗口。用 Jinrai Kick 或 DR 赶在她完成充电前打断。Juri 有 stock 时她的 623HP (DP) 和 214HP (hashogeki) 都会消耗 stock 变强，注意她的 stock 数量。Juri 的 5HP 是 -7 on block 用 2MP 惩罚。"
      - "中距离是关键战场：Juri 的 5MP 和 2MP 速度和你的差不多，但她的 2MK 是低攻击有更长距离。用 2MP (+5 on hit) 作为主要确认工具。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 Jinrai Kick 或 DR 取消惩罚。你的 Run~Stop 比她的 Fuha 循环更灵活——持续用 Run 威胁保持进攻主动。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是她最好的逆转，注意在她有 meter 时不要 predictable。CA 保留到中后期回合，Juri 的伤害输出很高所以你可能需要 CA 来追赶。对局节奏：始终主动，用 Jinrai 压制不让她 free charge。"
    keyMoves: ["2MP", "Jinrai Kick (MK)", "Drive Rush"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Blanka 的电球和混乱移动可以被冷静的 anti-air 和 punish 反制"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball (horizontal/vertical) 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6，用 2MP 或 Jinrai Kick 惩罚。HP Blanka Ball 是 -10 on block 可以用重攻击或 Dragonlash Kick 惩罚。不要在 Electricity 范围内按按钮——它是 +4 on block。"
      - "用中距离 poke (5MK, 2MP) 和 Hadoken 控制距离。Blanka 的 ground vertical ball 是 -26 on block，重罚。Blanka 的 5HK rolling attack 有长距离但 -6 on block。他的 2LP 是 4f startup 可以 mash 你的 gap。在远距离用 HP Hadoken 逼他接近，然后 anti-air 用 LP Shoryuken。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用，可以打断他的移动。DR 用于在 Blanka Ball 被防后追击。Blanka 的 CA 有 invincible startup，不要 predictable 地进攻。如果 Blanka 滚动逃跑用 Run 追击——你的移动速度比大多数角色更适合追击 Blanka。"
    keyMoves: ["LP Shoryuken", "2MP", "Jinrai Kick (LK)"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "远距离被 Dhalsim 牵制，需要耐心逐步接近——一旦近身就持续压制不放手"
    strategies:
      - "Dhalsim 想在远距离用 Yoga Fire 和长距离 limb (5HP, 5MK, 2MK) 控制你。你的 HP Hadoken 可以和 Yoga Fire 对波但 Dhalsim 的恢复更快。不要跳——他的 anti-air (Yoga Blast, 5LP) 非常可靠。方法：Perfect Parry 吸波节省 Drive Gauge，然后用 DR 突进。不要浪费 Drive Gauge 在波动战上。"
      - "一旦进入中近距离，Dhalsim 没有好的逆转选项（除了 OD Yoga Blast 和 CA）。用 Jinrai Kick 高/低混合持续压制。Run~Stop (+2 on block) 让你保持近距离不让他逃跑。Dhalsim 的 Yoga teleport 可以逃跑但 26f startup 可以反应——如果他 teleport 到你身边用 LP Shoryuken 或 2MP 打他。他的 5HP limb 是 -4 到 -6 on block 可以 2MP 惩罚。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb 时使用。DR 是你主要的接近手段——从远距离 2MK~DR 或直接 Raw DR 穿波动。CA 在 Dhalsim teleport 后或出 risky limb 时使用。核心心态：耐心接近，一旦近身就绝不放手。用 Run~Stop 循环不给他任何 space。"
    keyMoves: ["Drive Rush", "Perfect Parry", "Run~Stop"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Honda 的 charge 依赖让 Ken 的持续 Run 压力成为噩梦"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 2MP 或 Jinrai Kick 惩罚。HHS 是 -10 on block 可以用重连段惩罚。Honda 的 Sumo Headbutt (charge back-forward) 有 armor 但可以用 DI 打断。anti-air 他的 jump 用 LP Shoryuken。"
      - "持续进攻不给他 charge 时间是关键。HP Hadoken 逼他动，一旦接近用 Jinrai LK (-3 on block) 循环压制。Run~Stop 保持近距离让他无法蓄力。Honda 的 5HP 是 16f startup 很慢，用 2MP 在恢复帧打他。Honda 没有完全无敌的 DP（除了 OD Sumo Smash），可以大胆起身压制。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于快速接近不给他 charge 空间。CA 在 Honda 出 buttslam landing recovery 时使用。对局节奏：全程进攻，用 Run 系统持续施压，Honda 被迫在无 charge 情况下防守非常被动。"
    keyMoves: ["Jinrai Kick (LK)", "Run~Stop", "2MP"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的压力循环可以用 Jinrai 反制——谁先建立节奏谁赢"
    strategies:
      - "Dee Jay 的核心威胁是 MG Strike (air slash) 混合和 Jackknife Maximum (flash kick)。MG Strike 的 low/high 混合需要读取——不要乱按按钮，看清后再反应。Jackknife HP 是 -29 on block，重罚。Dee Jay 的 5MK 是很好的 poke 但 -3 on block。"
      - "用 2MP (+5 on hit) 和 5MK 在中距离和他交换按钮。Dee Jay 想保持压力循环，你的 Jinrai Kick 可以打断他的 gap。他的 Double Rolling Sobat 是 -4 on block 可以用 2MP 惩罚。Run~Stop 让你保持中近距离持续进攻，Dee Jay 在防守时不如进攻时强。"
      - "DI 在 Dee Jay 出 Jackknife 或 MG Strike heavy 版时使用。DR 用于打断他的压力循环或确认 2MP 后延伸连段。Dee Jay 的 SA2 是快速逆转，有 meter 时不要 predictable。CA 在他 MG Strike 跳跃时使用可以打他落地。"
    keyMoves: ["2MP", "Jinrai Kick (MK)", "LP Shoryuken"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "趁 Medal Level 低时疯狂压制——Ken 的 Run 系统让 Manon 几乎无法叠 Medal"
    strategies:
      - "Manon 的威胁随 Medal Level 增长（command grab damage 和 range 增加）。Level 0-1 时她的 command grab 范围很短，大胆进攻。Ken 的 Run 系统是最适合 rush down Manon 的工具之一——Jinrai 高/低混合不给她 hit confirm 叠 medal 的空间。开局立刻用 Run 接近，持续压制不让她 free combo。"
      - "Manon 没有 3f button（她的 2LP 是 4f），你的 2LP (4f) 可以在近距离和她公平竞争。她的 5MP 是 8f startup 比你的 2MP 慢。用 Run~Stop (+2 on block) 保持近距离压力，mix 在 throw 和 Jinrai 高/低之间。Manon 的 Renverse (command grab) 在 Level 5 时伤害极高——但如果持续压制她根本到不了那个 level。"
      - "DI 在 Manon 出 heavy attack 或 attempting medal combo 时使用。DR 用于快速接近和延伸连段。Manon 的 OD Chassé (reversal kick) 是她最好的逆转但不是完全无敌。CA 在她出 risky command grab whiff 时使用。全程进攻是最好的防守。"
    keyMoves: ["Run~Stop", "Jinrai Kick (LK)", "Drive Rush"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 慢但痛——用速度优势和 Jinrai 压制让她没有出手空间"
    strategies:
      - "Marisa 的核心威胁是 armored attacks (Gladius, Quadriga) 和巨大单发伤害。她的 5HP 是 14f startup 很慢但 armored。不要用重攻击挑战她的装甲——用快按钮（2LP 4f, 2MP 6f）打她 armor 的间隙。Marisa 的 2HP 是 -15 on block 可以重罚。"
      - "你的速度优势是关键。5MK (8f) 和 2MP (6f) 比 Marisa 的任何按钮都快。用 Jinrai Kick 持续施压——Marisa 的 armored move 不如你的速度快，在她 armor 启动前就打中。Run~Stop 保持近距离不让她 free charge Gladius。如果她出 charge move 用 DI 打断（armor 不能挡 DI）。"
      - "DI 在 Marisa 出 Gladius charge 或 Quadriga 时使用。DR 用于确认 poke 命中后延伸。Marisa 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在她 whiff Gladius 或 Quadriga 时使用。对局节奏：全程进攻，Marisa 的慢速让她很难在 Jinrai 压力下找到出手机会。"
    keyMoves: ["2MP", "Jinrai Kick (LK)", "Run~Stop"]
  - opponent: "jp"
    difficulty: "even"
    summary: "JP 的区域控制需要耐心突破，但 Ken 的 Run 和 DR 是最好的突破工具之一"
    strategies:
      - "JP 的核心威胁是 Torbalan (portal) 区域控制和 Eminence (far anti-air)。不要站在 full screen——逐步用 Hadoken 和 Perfect Parry 接近。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 Jinrai Kick 惩罚。他的 5HP 是 -8 on block 用 2MP 确认惩罚。"
      - "Run 系统是你接近的主要工具——Run~Dragonlash Kick 可以穿过部分波动和 portal。一旦进入中距离，JP 的普通技不如你的好。用 2MP 和 5MK 控制地面。Jinrai Kick 的高/低混合让 JP 在中距离防守很被动。JP 的 Torbalan 有 startup 时间，可以用 DR 或 Run 打断。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 在读准他的 portal timing 后突进。JP 的 CA 是全程无敌的，不要在他有 CA 时 whiff 大招。Heat Rush (SA2) 可以作为逆转在 JP 压制你时使用。耐心接近，一旦进入 Run 距离就不放过机会。"
    keyMoves: ["Run~Stop", "Drive Rush", "2MP"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "保持中距离不进 SPD 范围，Jinrai 压制让 Zangief 无法接近"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 armored attacks。永远不要站在 SPD 范围内不动——如果你在近距离，必须在按按钮或跳。HP SPD range 很大，需要保持中距离。Zangief 的 forward dash 是 18f 可以反应，听到 dash 声音就跳或按 LP。Zangief 的 lariat 是 anti-air 但可以被低攻击（2MK, 2LK）打。"
      - "用 5MK、2MP、2MK 和 HP Hadoken 在中距离持续骚扰。Jinrai Kick (LK, -3 on block) 是完美的中距离 poke 工具——安全、有 follow-up 混合、而且保持在 SPD 范围外。Zangief 的 5HP 是 -6 on block 可以用 2MP 惩罚。如果他尝试接近用 Run~Dragonlash Kick 打退他。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal，有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。始终保持中距离，用 Jinrai 压制不让他进入 SPD 范围。"
    keyMoves: ["Jinrai Kick (LK)", "5MK", "2MP"]
  - opponent: "lily"
    difficulty: "even"
    summary: "在她积累 Wind Stock 之前施压，Run 系统让她的 charge 窗口极短"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock，充能时是最脆弱的。趁这个窗口用 Run~Dragonlash 或 DR 进攻。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变得更强。Lily 的 2LP 是 4f 可以在近距离和你交换。"
      - "中距离你的工具更优：5MK 和 2MP 的 frame data 比 Lily 的普通技好。她的 5MP 是 9f startup 比你的 6f 慢。Lily 的 Condor Spire (approaching move) 是 -6 on block 可以用 2MP 惩罚。anti-air 她的 Condor Dive 用 LP Shoryuken。Jinrai 压制在她没有 stock 时特别有效。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断她的充能。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。对局节奏：主动进攻，用 Run 系统不给她 free charge 的机会。"
    keyMoves: ["Run~Stop", "2MP", "LP Shoryuken"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "高速对决——anti-air 和 Jinrai 压制是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 的角度变化大，需要仔细观察 anti-air 时机——用 LP Shoryuken 或 5MP 打她。Spiral Arrow 是 -6 到 -9 on block 取决于版本，用 2MP 惩罚。Cammy 的 5MP 是 5f startup 很快要小心。"
      - "中距离用 5MK 和 2MP 交换。Cammy 的速度和你的差不多，但你的 Jinrai Kick 系统提供更好的持续压制。Run~Stop 保持近距离压力，她的 Hooligan Combination 是空中混合但可以 anti-air 打掉。她的 5HK 是 -5 on block 可以用 2MP 惩罚。DR 用于确认 2MP 命中后延伸连段。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认后延伸连段。Cammy 的 OD Cannon Spike 是她的逆转但不是完全无敌。CA 在她 Cannon Strike 跳入时使用。对局节奏：主动用 Jinrai 压制，不要被动应对她的 speed。"
    keyMoves: ["LP Shoryuken", "Jinrai Kick (LK)", "2MP"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动可以用冷静的 anti-air 和 Run 压制反制"
    strategies:
      - "Rashid 的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 可以用 2MP 惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——不要追他空中，等他落地。Rashid 的 5MP 是 6f startup 很快，中距离要小心。"
      - "保持中距离用 5MK 和 HP Hadoken 控制节奏。Rashid 想用 speed control 比赛节奏，你需要用 Hadoken 和 Jinrai 压制让他慢下来。他的 Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。anti-air 他的 Eagle Spike 用 LP Shoryuken。Run~Stop 让你在他落地时保持近距离。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速逆转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。核心心态：不要被他的 speed 搞乱节奏，用自己的 Jinrai 压制建立节奏。"
    keyMoves: ["LP Shoryuken", "Jinrai Kick (MK)", "5MK"]
  - opponent: "a-k-i"
    difficulty: "advantageous"
    summary: "趁 A.K.I. 设置毒之前 rush down——她的防御弱到 Jinrai 压力特别致命"
    strategies:
      - "A.K.I. 的核心威胁是毒系统（toxic brew, 毒蛇 trap）。她需要时间设置毒 cloud 和 ground trap，趁她 setup 时用 Run~Dragonlash 快速接近。被毒后不要慌——毒伤害是可以承受的，继续进攻。她的 5MP 是 6f startup 很快但 range 短。"
      - "中近距离你的 Jinrai 压制比她的工具更强。2MP (+5 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离，保持在 5MK 距离。她的 2HP 是 -10 on block 可以惩罚。她的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以 DI 打断。Run~Stop 保持近距离持续压制不给她 setup 时间。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。CA 在她 whiff toxic trap 或 jump-in 时使用。全程进攻是最好的策略——防守就是给她 setup 的机会。"
    keyMoves: ["Run~Stop", "Jinrai Kick (LK)", "Drive Rush"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难，用 Hadoken 和 DR 找突破口"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——用 HP Hadoken 从更远的距离攻击，不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。Ed 的 5HP 是 -6 on block 可以用 2MP 惩罚。"
      - "接近方式：用 Perfect Parry 吸他的 psycho ball，然后 DR 突进。Ed 的 5MP 是 8f 和你的差不多。一旦进入 Jinrai range，Ed 的 defense 不强。用 Jinrai LK 高/低混合压制，mix 在 throw 之间。Ed 的 Snatcher (command grab) range 短保持中距离安全。角落里用 Run~Stop 循环压制。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 或 risky approach 时使用。耐心找到突破口然后持续压制。"
    keyMoves: ["HP Hadoken", "Drive Rush", "Jinrai Kick (LK)"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 伤害恐怖但血量只有 9000——一个 Jinrai 确认就能重创他"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合。他的 health 只有 9000（比你的 10000 少 1000），所以一个 good Jinrai confirm 就能重创他。Demon Flip 的 punch/kick/throw 混合需要读取——用 LP Shoryuken 打他的 flip punch，jump out 打他的 flip throw。Akuma 的 air Hadoken 让他的空中进攻更有层次。"
      - "中距离你的 5MK 和 2MP 可以和 Akuma 交换。他的 5MP 是 5f startup 很快要小心。Akuma 的 Gohadoken startup 比你的 Hadoken 快但伤害差不多。他的 5HK 是 -6 on block 可以惩罚。关键是不让他 free 地设置 air fireball —— anti-air 他的 jump 用 LP Shoryuken。Run~Dragonlash 是突破他波动控制的好工具。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段——对 Akuma 每个 hit 都很珍贵因为他的低血量。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break，不要在他有 meter 时 predictable。CA 在他 demon flip 或 whiff heavy attack 时使用。"
    keyMoves: ["LP Shoryuken", "Jinrai Kick (MK)", "2MP"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Power 压力可以用 Jinrai 反制——谁的循环更强谁赢"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 2MP 惩罚。Scissors (LK version) 是 +1 on block 让他保持压力——不要乱按按钮，等他 scissors heavy 版本（-6 on block）再 punish。他的 5HP 是 -5 on block 用 2MP 惩罚。"
      - "用 HP Hadoken 控制中距离，Bison 需要 charge 时间来出 Psycho Crusher 和 Scissors。持续的 Hadoken 压力不让他 free charge。一旦接近用 Jinrai Kick 高/低混合压制。Bison 的 2LP 是 4f 可以 mash 但你的 Run~Stop (+2 on block) frame trap 可以打他 mash。Run~Stop 循环比他的 Scissors 循环更灵活。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于在 Hadoken 命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。"
    keyMoves: ["HP Hadoken", "Jinrai Kick (LK)", "Run~Stop"]
  - opponent: "terry"
    summary: "格斗家对决——Terry 有扎实的 neutral 但 Ken 的 Run 系统提供更多进攻选择"
    difficulty: "even"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave 的 recovery 比 Hadoken 快但伤害低。Burn Knuckle HP 版本是 -9 on block 可以用 2MP 或 Jinrai Kick 惩罚。他的 Rising Tackle 是 anti-air/DP 但不是完全无敌（OD 版本是）。Terry 的 Crack Shoot (overhead) 是 20f startup 可以反应。"
      - "中距离你的 5MK 和 2MP 比 Terry 的普通技稍快。用 HP Hadoken 和他交换波动，然后找机会 Run 接近。Jinrai Kick 的高/低混合让 Terry 的防守有压力。Run~Stop 保持近距离持续压制。他的 5MP 是 8f 和你的 2MP 速度差不多但 range 更短。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。"
    keyMoves: ["Jinrai Kick (MK)", "2MP", "LP Shoryuken"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的扇子投射和空中机动让接近变得复杂——需要耐心和精确的 DR 时机"
    strategies:
      - "Mai 的核心威胁是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。她的 air fan 让她可以在空中持续骚扰，anti-air 很困难但 LP Shoryuken 仍然是你最好的选择。不要追她空中——等她落地再进攻。她的 5MP 和 2MP range 都很长让中距离也不好打。"
      - "接近方式：用 Perfect Parry 吸 fan，然后 DR 突进。HP Hadoken 和她的 fan 对波但她的恢复可能更快。一旦接近，用 Jinrai Kick 高/低混合压制——Mai 的普通技在近距离 frame data 不如你的好。用 Run~Stop (+2 on block) 保持压力不让她逃跑。她的 command grab range 短保持中距离安全。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段——timing 必须精准。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。需要比平时更耐心，不要急于冲进去。逐步缩短距离，一旦近身就不放手。"
    keyMoves: ["Perfect Parry", "Drive Rush", "Jinrai Kick (LK)"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 需要适应，在 Jinrai range 内 Ken 可以压制"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing 需要时间——不要给她 free heal 的机会，保持压力。Elena 的 Lynx Tail 是 multi-hit 可以 DI 吸掉。"
      - "用 5MK 和 HP Hadoken 在中距离和她交换。Elena 的 5HP 是 -5 on block 可以用 2MP 惩罚。她的 Mallet Smash (overhead) 是 22f startup 可以反应 anti-air。保持在 Jinrai range 最有利——太近会被她的 capoeira mix-up 打，太远她可以 heal 或 poke。Jinrai 的高/低混合是你在中距离的核心武器。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 2MP 后延伸连段。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。Run~Stop 保持近距离不给她 heal 的空间。"
    keyMoves: ["Jinrai Kick (LK)", "5MK", "2MP"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — rely on standard Ken gameplan with Run pressure and Jinrai mix"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高伤害但启动偏慢。用快速 button (2MP 6f, 2LP 4f) 在他的 heavy attack gap 中插入。anti-air 用 LP Shoryuken，不要给他 free 的 jump-in。"
      - "保持标准 Ken gameplan：中距离用 5MK、2MP 和 HP Hadoken 控制。Jinrai Kick 高/低混合压制。在他 whiff heavy attack 时用 Run~Dragonlash 或 DR 取消惩罚。如果他有 armored move 用 DI 打断。接近后用 Run~Stop 循环压制。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。CA 在关键时刻使用。根据实际对局经验调整策略——核心不变：Run 接近 → Jinrai 压制 → 确认连段。"
    keyMoves: ["2MP", "Jinrai Kick (LK)", "LP Shoryuken"]
---

## Additional Notes

Ken Masters is one of the original Street Fighter characters and returns in Street Fighter 6 with his most aggressive incarnation yet. His Run system fundamentally changes how he approaches neutral, making him one of the most unique rushdown characters in the roster.

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | 2MK → OD Dragonlash Kick → 623MP | ~2000 |
| Corner BnB | j.HP → 2HP → 214LK → 623MP | ~2200 |
| Run~Stop Confirm | 5MP~HK~Stop → 2LP → 5MP~HP → 236LK (Jinrai) → Senka | ~2800 |
| Drive Rush Route | St.HP → DR → B.HK → Cr.HP → 236HK (Jinrai) → Senka Snap | ~3500+ |
| Light Confirm | 2LP → 2LP → 236LK (Jinrai) → Senka or 623LP | ~1200 |
| Anti-air Confirm | LP Shoryuken → OD Shoryuken (followup) | ~1500 |
| Punish Counter | 5HP~HK~Run~Stop → 2LP → 5MP~HP → 236LK → Senka | ~3000 |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +4 | -2 | Fastest normal |
| 2MP | 6f | +5 | +1 | Best confirm button |
| 5MK | 8f | +1 | -3 | Mid-range poke |
| 5HP | 7f | +1 | -6 | Heavy confirm |
| 2HP | 7f | +1 | -13 | Launcher (use in combos) |
| Jinrai LK | 15f | KD+30 | -3 | Safe pressure |
| Jinrai MK | 17f | KD+35 | -3 | Mid-range pressure |
| Jinrai HK | 19f | KD+40 | -6 | Punishable, long range |
| LP Shoryuken | 5f | KD+28 | -27 | Anti-air DP (invincible 1-8) |
| HP Hadoken | 20f | +3 | -2 | Fireball control |
| Run~Stop | 0f | +2 | +2 | Pressure tool |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 4.5
- **Back Walk Speed:** 3.0
- **Forward Dash:** 16 frames
- **Prejump Frames:** 4

### Season Updates

- **Feb 2024 Patch:** Arm hurtbox increased on frames 2-6 for Jinrai Kick; 5MK pushback increased on block
- **May 2024 Patch:** Dragonlash Kick damage scaling adjusted; Run~Stop frame data unchanged but pushback slightly increased
- **Dec 2024 Patch:** Jinrai HK on block improved from -7 to -6; OD Dragonlash now wall splats in corner for combo follow-up
