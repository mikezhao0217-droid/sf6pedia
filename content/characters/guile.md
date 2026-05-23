---
name: "Guile"
subtitle: "美国空军的骄傲"
overview: "Guile是经典的蓄力型角色，以最强的波动系飞行道具Sonic Boom和强力的对空Flash Kick著称。他的游戏计划围绕Sonic Boom进行区域控制，观察对手反应并惩罚：对手跳入用Flash Kick对空，对手防御则继续波动消耗Drive Gauge。拥有优秀的中距离普通技(5MK, 2MK, 5HP)和丰富的指令普通技(4HP, 6HK, 4LK)，使他在全距离都有对策。Guile是波动战之王，也是压制型角色最难突破的防线。"
keyMoves:
  - name: "Sonic Boom"
    input: "[4]6P (后蓄力→前+拳)"
    description: "SF6中最强的波动系飞行道具。10f启动，30f恢复，全版本+3 on hit(Perfect版+4)。LP版慢速适合跟波推进，HP版快速赢得波动战。OD版2hit击倒+48 KD。Perfect版在3f窗口内输入6+P触发，额外伤害和+4帧数优势，是角落连段的关键。所有版本在block时都消耗对手Drive Gauge（LP 2500/MP 4000/HP 3000）。"
    startup: 10
    active: 0
    recovery: 30
    damage: "550 (600 Perfect)"
  - name: "Flash Kick (Somersault Kick)"
    input: "[2]8K (下蓄力→上+脚)"
    description: "Guile的核心对空和连段收尾技。LK版5f启动，AA无敌1-7f，KD+36，-30 on block。HK版7f启动，AA无敌1-9f，1200伤害。OD版6f启动，完全无敌1-11f，是Guile最好的reversal。Perfect版在3f窗口内输入8+K触发，额外200伤害。所有版本-30以上on block，必须确保命中。"
    startup: 5
    active: 6
    recovery: 41
    damage: "1000 (1200 Perfect)"
  - name: "Sonic Blade + Sonic Cross"
    input: "214P → 6P (波动盾+强化波动)"
    description: "Sonic Blade是放置型飞行道具，LP版16f启动持续45f。在Blade活动时输入6P发射Sonic Boom，穿过Blade变为Sonic Cross——更强力的多hit波动（600+400），击倒+44 KD。HP Blade持续100f。OD Blade~OD Cross墙壁弹射。用于增强波动战优势，但不安全在近距离使用（启动时脚下有大判定框）。"
    startup: 16
    active: 45
    recovery: 26
    damage: "400+400 (Sonic Cross)"
  - name: "Sonic Hurricane (SA1)"
    input: "[4]646P"
    description: "7hit超级波动。8f启动，打击/投掷无敌1-8f，KD+41，2000伤害，-26 on block。可惩罚大部分sweep和其他靠pushback安全的招式。HP版角度向上，用于连段juggle和远距离对空（无无敌）。Blade活动时无法使用。30%最低伤害缩放。"
    startup: 8
    active: 51
    recovery: 81
    damage: "2000"
  - name: "Solid Puncher (SA2)"
    input: "214214P"
    description: "安装型Super，激活Sonic Break能力持续25秒。Sonic Break是无蓄力要求的快速波动（11f启动，+2 on hit），最多7次。开启时Guile在波动战中几乎无敌，可以连续投射压制对手。SA2的超级冻结时间允许Guile蓄力后续连段。在cancelable招式后使用获得帧数优势。"
    startup: 6
    active: 0
    recovery: 0
    damage: "0 (Install)"
  - name: "Crossfire Somersault (SA3/CA)"
    input: "[4]646K"
    description: "Guile的终极逆转技。9f启动，完全无敌1-14f，4000伤害（Critical Art 4500），-59 on block。用于惩罚大破绽、逃离角落或终结回合。可从Sonic Boom cancel进入，也可从Flash Kick cancel进入（输入[1]7K→646K）。CA在25%血量以下可用。50%最低伤害缩放。"
    startup: 9
    active: 6
    recovery: 70
    damage: "4000 (4500 CA)"
  - name: "5MK (Standing Medium Kick)"
    input: "5MK"
    description: "Guile最核心的普通技。7f启动，+1 on hit/-4 on block，5个活动帧，700伤害。拥有出人意料的对空判定框，在远距离是优秀的对空按钮。不可取消，但是完美的中距离poke工具，配合Sonic Boom控制距离。和2MK互补形成完整的地面控制。"
    startup: 7
    active: 5
    recovery: 18
    damage: "700"
  - name: "6HK (Reverse Spin Kick)"
    input: "6HK"
    description: "投掷无敌+低攻击回避的神技。17f启动，-1 on hit/-8 on block，1000伤害。投掷无敌4-28f，低攻击回避7-17f（非空中状态）。是极好的投掷诱骗和counterpoke工具。Counter-hit击倒+29，Punish Counter击倒+55。在对手尝试打断Sonic Boom出招时使用效果极佳。"
    startup: 17
    active: 3
    recovery: 26
    damage: "1000"
  - name: "6MP (Full Bullet Magnum)"
    input: "6MP"
    description: "Guile的overhead指令技。20f启动，+2 on hit/-3 on block，800伤害。Drive Rush后可连段（link 2MP）。跟在慢速Sonic Boom后面走路，混合6MP和2MK是击杀低血量对手的有效手段。在Drive Rush后使用获得+4帧数优势可连段。"
    startup: 20
    active: 3
    recovery: 19
    damage: "800"
  - name: "2MK (Crouching Medium Kick)"
    input: "2MK"
    description: "Guile核心的低段poke。8f启动，+4 on hit/-5 on block，500伤害。有Target Combo followup到6MP（low→overhead混合）。Drive Rush后可link到5MP、2MP、5HP等核心连段按钮。Counter-hit/Punish Counter后6MP followup保持counter状态弹地。"
    startup: 8
    active: 3
    recovery: 18
    damage: "500"
tips:
  - "核心波动循环：在远距离用LP Sonic Boom（慢速）跟在后面走路，观察对手反应。对手跳入→Flash Kick对空（5f启动，AA无敌1-7f）；对手DI→Perfect Parry吸收后反打；对手防御→继续发波消耗Drive Gauge。HP Sonic Boom（快速）用于赢得波动战。Perfect Sonic Boom（+4 on hit）可link 2LP，是角落连段关键。"
  - "中距离控制是Guile的强项。5MK（7f，+1 on hit）和2MK（8f，+4 on hit）是最好的poke。4HP（Burning Straight, 9f, +1/-4）维持后蓄力同时poke。4MK/6MK（Rolling Sobat, 11f, +3/-6）低攻击回避可对抗对手的2MK。5HK（13f, +4/-4）远距离poke，仅可Super cancel。"
  - "连段路线：中屏BnB——5MP(+6)→2MP(+4)→HP Sonic Boom / HK Flash Kick。角落BnB——5MP→2MP~2MP TC(KD+44)→HP Sonic Boom循环。Drive Rush路线——2MK~DR→5MP→4HP~HP Sonic Boom。角落Perfect Boom循环是Guile最高伤害但需要精确蓄力分区。"
  - "Drive Rush是Guile接近和连段延伸的关键。2MK~DR给予link到所有重要按钮。5MP~DR→4HP在中距离获得+15帧数优势。DR~6MP overhead连段（link 2MP）。DR~4LK（Knee Bazooka）接近+低回避+帧数优势。在角落用DR延伸Perfect Boom循环获得最大伤害。"
  - "对付冲脸型角色（Cammy, Kimberly, Juri），保持蓄力是核心。始终按住[1]（下后）方向，用2MK和4HP poke。Sonic Boom后不要急着跟——保持蓄力等Flash Kick。6HK是投掷诱骗神技（投掷无敌4-28f），对手试图throw loop时使用。4LK和4MK可以回避低攻击。"
  - "SA2 Solid Puncher的Sonic Break让Guile在波动战中无敌。在cancelable招式block后使用（如5HK~SA2）获得帧数优势。Sonic Break不需要蓄力，11f启动+2 on hit，可连续投射最多7次。混合快速和慢速Break制造blockstring间隙。在角落配合Sonic Break是最大的伤害来源。"
  - "DI使用时机：对手出sweep或重攻击时DI。Guile的5HP/4HP cancel到DI有7f blockstring gap。被DI打中后wall splat→2HK~3HK TC→LK Flash Kick>OD Flash Kick。注意Burnout时5HP>DI只有3f gap可以Stun。DR使用：确认poke命中后延伸连段，或跟在Sonic Boom后面快速接近。"
  - "Drive Reversal（20f启动，完全无敌1-22f）用于逃离对手的压力循环。在被角落压制时使用打断对手的frame trap节奏。CA（Crossfire Somersault）保留到关键时刻——对手whiff大技能时、逃离角落、或终结回合。Guile防守很强所以不需要急于用CA。"
  - "Perfect Sonic Boom是Guile技术的分水岭。在3f窗口内输入6+P，Guile会喊'PERFECT!'。+4 on hit允许link 2LP，是角落连段循环的基础。在neutral中Perfect Boom更容易做到，special cancel时timing更紧。Perfect Flash Kick（3f窗口输入8+K）额外200伤害。"
  - "Sonic Blade在对波时非常强但近距离危险。HP Blade持续100f，如果Sonic Boom穿过变为Sonic Cross（KD+44, 600+400伤害）。OD Blade~OD Cross墙壁弹射。注意Blade启动时脚下有大hurtbox容易被sweep打。不要在对手近距离时放Blade——只在中远距离对波时使用。"
matchups:
  - opponent: "luke"
    difficulty: "advantageous"
    summary: "Guile的Sonic Boom体系克制Luke的中距离工具，Luke难以突破波动防线"
    strategies:
      - "核心策略：波动压制+耐心等待。Luke想用HP Sand Blast对波，但你的Sonic Boom恢复更快（30f vs 27f Sand Blast但Boom有更快的启动和优势帧）。用HP Sonic Boom赢得波动战，LP Sonic Boom跟波推进。Luke的Perfect Flash Knuckle HP是+4 on block——不要在他有Drive meter时乱按按钮。Luke接近后用5MK和2MK控制中距离，4HP维持蓄力。"
      - "特别注意Luke的Flash Knuckle MP charged版（-1 on block）接近工具。如果Luke用DR接近，6HK（投掷无敌+低回避）可以打他的DR~2MK/throw混合。Flash Kick是Luke跳入的噩梦——不要急着用，保持蓄力等他跳。Luke的Rising Uppercut（5f）是他的逆转，但只有LP版有完全无敌。"
      - "DI在Luke出Sand Blast或Flash Knuckle HP时使用。DR不推荐盲目使用——Guile更想保持在远中距离波动压制。SA1 Sonic Hurricane可以打断Luke的Sand Blast循环。SA2开启后Sonic Break让Luke无法接近。CA保留到最后击杀——Luke血量10000和你一样，不急于用。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "6HK"]
  - opponent: "ryu"
    difficulty: "advantageous"
    summary: "经典对波战，Guile的Sonic Boom在帧数上全面优于Ryu的Hadoken"
    strategies:
      - "波动战是核心：Sonic Boom（10f启动，+3 on hit）vs Hadoken（13f启动，Ryu版帧数不如Boom）。HP Sonic Boom速度快赢得对波。Ryu蓄Denjin Charge时用HP Sonic Boom打断不要让他白充。Ryu的HP Hashogeki没充能时-4 on block可以2MP惩罚。Ryu的5HK和sweep是主要poke，但5HK有20%伤害缩放。"
      - "Ryu的Shoryuken LP版（6f启动，无敌1-15f）是可靠的逆转。不要在Ryu有meter时predictable地进攻。Ryu想用Hadoken控场后DR接近——用Flash Kick对空他的jump-in，2HP（9f, anti-air）在没有蓄力时使用。Ryu的5MP是6f很快但range不如你的5MK。"
      - "DI在Ryu出HP normal或sweep时使用。Sonic Blade+Sonic Cross在远距离增强波动优势。SA1用于惩罚Ryu的sweep（-12 on block用SA1直接打）。SA2开启后Sonic Break压制Ryu的波动。CA在Ryu跳入或whiff Shoryuken时使用。整体节奏：波动压制为主，偶尔用5MK/2MK poke。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "SA1 Sonic Hurricane"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "Chun-Li的长距离普通技和Serenity Stream让波动战复杂化，但Guile的中距离poke可以应对"
    strategies:
      - "Chun-Li的5MP、2MP、5HP都有极长判定距离，让她在中远距离很强。特别注意她的Serenity Stream姿态——会蹲低避开你的5LP、5MP和所有版本Sonic Boom。不要盲目发波，等她姿态结束后再波动。Chun-Li没有完全无敌的reversal（除了OD Tensho Kicks），所以一旦接近可以持续压制。"
      - "距离控制是关键：保持在5MK距离用5MK（7f, +1 on hit）和2MK（8f, +4 on hit）poke。Chun-Li的5HK（spinning bird kick输入）可以被2MP或5MK在恢复帧惩罚。4HP（Burning Straight, 9f）维持蓄力同时poke。Chun-Li想用DR突破你的中距离防线——保持Flash Kick蓄力。"
      - "DI在Chun-Li出2HP或sweep时使用，这些恢复帧长。DR用于突破她的长距离poke墙——DR~4LK接近+低回避。SA1 Sonic Hurricane可以打断她的长距离攻击。SA2开启后用Sonic Break保持压力。CA在她用空中攻击跳入时使用。整体节奏：波动为主但比平时更谨慎，避免被Serenity Stream读准。"
    keyMoves: ["Sonic Boom", "5MK", "2MK", "4HP"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "Guile的波动和防反对策完美克制Jamie的接近型打法，尤其限制他喝酒的空间"
    strategies:
      - "Jamie的威胁随喝酒等级增长。Level 0-1时他非常弱，趁这个窗口用Sonic Boom持续压制不给他喝酒空间。Jamie需要214P充能来获得drink——趁他充能时HP Sonic Boom打他。如果他喝到Level 4，他的frame trap和damage大幅提升需要更谨慎。开局立刻用Sonic Boom建立节奏，不让他靠近。"
      - "Jamie的Bakushin（酒步）是快速接近工具但-4 on block，用2MP惩罚。他的command grab在有酒时范围增大——保持中距离避免。Jamie的DP（OD The Devil Inside）是他唯一的逆转，但不是完全无敌的。当Jamie没有逆转时，可以用5MP(+6)→2MP循环在起身压制。anti-air他的jump用LK Flash Kick（5f启动）。"
      - "DI在Jamie用heavy attack或attempting drink时使用。DR不推荐——保持远中距离波动压制更有利。Jamie的SWK（stepkick）是frame trap工具，注意不要乱按按钮。SA1用于惩罚Jamie的大招whiff。SA2开启后Sonic Break让Jamie完全无法接近。CA保留到最后击杀。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "2MK"]
  - opponent: "guile"
    difficulty: "even"
    summary: "镜像战——波动战和蓄力管理的博弈，耐心和读招决定胜负"
    strategies:
      - "镜像战的核心是波动节奏和蓄力管理。不要盲目对波——注意对手的Sonic Boom节奏。HP Boom速度快但LP Boom跟波推进更好。如果对手出Sonic Blade，用HP Sonic Boom穿过或等Blade消散再进攻。对手的Sonic Cross击倒+44是巨大威胁——看到Blade要小心。6HK（投掷无敌）是对手throw attempt的克星。"
      - "距离控制：5MK和2MK是双方的poke主力。4HP维持蓄力同时poke。谁先失去蓄力谁就处于劣势。对手的Flash Kick和你的完全相同——不要在没有确认的情况下跳入。角落的Perfect Boom循环是最大伤害来源，但执行难度极高。2HP（9f anti-air）在没有蓄力时替代Flash Kick。"
      - "DI在对手出Sonic Blade或heavy normal时使用。DR用于确认poke后延伸连段。SA1 Sonic Hurricane可以打断对手的sweep和大招。SA2开启后Sonic Break在波动战中获得巨大优势。CA保留到最后击杀——镜像战通常很接近，CA可能是翻盘关键。整体节奏：波动为主，偶尔poke，保持蓄力耐心等待。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "6HK"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly的机动性需要冷静应对，但她的防御弱点让Guile可以持续压制"
    strategies:
      - "Kimberly的核心威胁是run stop混合（overhead/low/throw）和幻影dive kick。用LK Flash Kick anti-air她的空中进攻——她的teleport有明显的启动动画，用2LP或5LP打断teleport后的恢复帧。不要乱出重攻击——她会teleport绕过。6HK（投掷无敌4-28f）打她的run stop throw attempt非常有效。"
      - "Kimberly的防御很弱：她没有完全无敌的DP，只有OD Bushin Senpukyaku作为逆转。这意味着你可以更大胆地用5MP(+6)→2MP循环压制。Sonic Boom持续压制让她无法free teleport。4LK（Knee Bazooka）低回避可以打她的2MK。保持中距离用5MK和2MK poke。"
      - "DI在Kimberly出heavy run stop或幻影dive kick时使用。DR用于追击她teleport后的距离。她的5HK是-6 on block可以用2MP惩罚。SA1用于打断她的teleport或run stop。SA2开启后Sonic Break让她完全无法接近。CA在她空中进攻时用，因为她在空中无法变招。"
    keyMoves: ["Flash Kick", "6HK", "Sonic Boom", "5MK"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri的Fuha stock和速度是威胁，但Guile的波动可以限制她的自由行动"
    strategies:
      - "Juri的核心是Fuha stock系统。她在stock充能时（214K动作）是最脆弱的——趁这个窗口用Sonic Boom打她。Juri有stock时她的623HP (DP)和214HP (hashogeki)都消耗stock变强。Juri的Ryodansatsu（sweep）是-9 on block可以用2MP~Flash Kick或2MP~Sonic Boom惩罚。她的5HP是-7 on block，2LP或2MP确认惩罚。"
      - "中距离交换：Juri的5MP（5f）和2MP速度很快，但你的5MK（7f）range更好。用5MK和Sonic Boom控制中距离节奏。Juri想用DR接近——保持Flash Kick蓄力。Juri的2MK是低攻击有长距离，用4LK或4MK低回避对抗。Juri没有完全无敌的reversal（OD DP需要stock），在她没有stock时可以大胆压制。"
      - "DI在Juri充Fuha stock时使用可以打断。DR在读准她波动时机后突进。Juri的OD DP是她最好的逆转，注意在她有meter时不要predictable。SA1用于惩罚她的大招whiff。SA2开启后Sonic Break在波动战中压制。CA保留到中后期回合——Juri伤害很高你可能需要CA追赶。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "4LK"]
  - opponent: "ken"
    difficulty: "advantageous"
    summary: "Guile的波动体系压制Ken的传统波动打法，Ken接近困难"
    strategies:
      - "波动战是Guile的优势：Sonic Boom（10f, +3 on hit）全面优于Ken的Hadoken（14f）。HP Sonic Boom速度快赢得对波。不要跳入——Ken的HP Shoryuken完全无敌是可靠reversal。Ken想用Jinrai Kick（236K）混合（high/low/throw）进攻，但你需要先让他接近——Sonic Boom持续压制让他难以突进。"
      - "Ken的sweep是-9 on block可以用2MP~Flash Kick惩罚。他的6HP（target combo入口）是-7 on block。5MK和2MK控制中距离。Ken的5MK（+1 on hit）是好的中距离poke但range不如你的5MK。Ken的Jinrai delay版本可以frame trap——不要乱按按钮，看清延迟版本后再反应。4HP维持蓄力poke。"
      - "DI在Ken出heavy Hadoken或sweep时使用。DR不建议——保持远中距离波动压制更有利。SA1 Sonic Hurricane可以打断Ken的sweep和heavy attack。SA2开启后Sonic Break让Ken完全无法波动战。CA在Ken whiff Shoryuken或跳入时使用。整体节奏：波动压制为主，耐心等待Ken犯错。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MK"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Guile的波动和对空完美克制Blanka的混乱移动，Blanka难以接近"
    strategies:
      - "Blanka的核心威胁是Blanka Ball（水平/垂直）和Electricity。Blanka Ball LP/MP版on block是-4到-6，用2MP惩罚。HP Blanka Ball是-10 on block可以用Flash Kick或5HP重罚。不要在Electricity范围内按按钮——它是+4 on block。Sonic Boom持续压制不让Blanka free接近——他必须用Ball或jump来穿越波动。"
      - "用5MK和2MK在中距离控制。Blanka的ground vertical ball是-26 on block，重罚。他的5HK rolling attack有长距离但-6 on block。anti-air他的jumping attacks用LK Flash Kick（5f启动，AA无敌1-7f）。Blanka的2LP是4f startup可以mash你的gap。4LK低回避可以打他的low attack。"
      - "DI在Blanka出Blanka Ball或vertical ball时使用，可以打断他的移动。DR不建议——保持距离波动压制。Blanka的CA有invincible startup，不要predictable进攻。SA1 Sonic Hurricane可以打断Blanka Ball的接近。SA2开启后Sonic Break持续压制。CA在Blanka whiff Ball或Electricity时使用。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "2MP"]
  - opponent: "dhalsim"
    difficulty: "advantageous"
    summary: "Guile是波动战之王，Dhalsim的远距离控制可以被Sonic Boom+Blade体系压制"
    strategies:
      - "Dhalsim想在远距离用Yoga Fire和长距离limb（5HP, 5MK, 2MK）控制你。你的HP Sonic Boom可以和Yoga Fire对波。Sonic Blade+Sonic Cross体系让Dhalsim的波动完全失效——Cross有更高的projectile priority。不要盲目跳——Dhalsim的anti-air（Yoga Blast, 5LP）非常可靠。如果必须接近用Perfect Parry吸波动节省Drive Gauge然后DR突进。"
      - "一旦进入中近距离，Dhalsim没有好的逆转选项（除了OD Yoga Blast和CA）。用5MP(+6)→2MP循环持续压制。他的Yoga Teleport可以逃跑但26f startup可以反应——2HP或Flash Kick打他teleport后。Dhalsim的5HP limb是-4到-6 on block，确认后2MP惩罚。Sonic Boom持续压制不让他heal或free poke。"
      - "DI在Dhalsim出Yoga Fire或长limb时使用。DR是你主要的接近手段——2MK~DR从远距离确认进入连段。SA1 Sonic Hurricane可以打断Dhalsim的长距离攻击。SA2开启后Sonic Break在波动战中获得绝对优势。CA在Dhalsim teleport后或出risky limb时使用。整体节奏：波动压制为主，逐步推进。"
    keyMoves: ["Sonic Boom", "Sonic Blade", "Flash Kick", "5MK"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Honda的蓄力依赖让Guile的波动压制特别有效，持续压力不给Honda蓄力空间"
    strategies:
      - "Honda的核心威胁是Headbutt（buttslam）和Hundred Hand Slap（HHS）。HP Headbutt是-5 on block可以用2MP或4HP惩罚。HHS是-10 on block可以用Flash Kick重罚。Honda的Sumo Headbutt有armor但DI可以打断。Sonic Boom持续压制不给Honda charge时间——他必须先防御波动才能蓄力出Headbutt。"
      - "持续进攻不给他charge时间是关键。HP Sonic Boom逼他防御，一旦接近用5MK和2MK控制地面。Honda的5HP是16f startup很慢，用2MP在恢复帧打他。Honda没有完全无敌的DP（除了OD Sumo Smash），可以大胆起身压制。anti-air Honda的jump用LK Flash Kick。4LK低回避可以打他的low attack。"
      - "DI在Honda出HHS或charge heavy attack时使用。DR不建议——保持波动压制节奏。SA1 Sonic Hurricane用于惩罚Honda的大招whiff。SA2开启后Sonic Break持续压制不给charge空间。CA在Honda出buttslam landing recovery时使用。整体节奏：波动持续压制，不给Honda任何喘息空间。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MP"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay的压力循环和波动可以和Guile对波，需要更谨慎的距离控制"
    strategies:
      - "Dee Jay的核心威胁是MG Strike（air slash）混合和Jackknife Maximum（flash kick）。MG Strike的low/high混合需要读取——不要乱按按钮，看清后再反应。Jackknife HP是-29 on block可以重罚。Dee Jay的波动可以和Sonic Boom对波但恢复不如你快。Dee Jay的5MK是好的poke但-3 on block。"
      - "用5MK和2MK在中距离和他交换。Dee Jay想保持压力循环，用Flash Kick打断他的gap。他的Double Rolling Sobat是-4 on block可以用2MP惩罚。当Dee Jay没有meter时他没有好的逆转（OD Jackknife不是完全无敌），可以更大胆压制。Sonic Blade+Sonic Cross在波动战中获得优势。"
      - "DI在Dee Jay出Jackknife或MG Strike heavy版时使用。DR用于确认2MP后延伸连段。SA1 Sonic Hurricane打断Dee Jay的压力循环。SA2开启后Sonic Break在波动战中获得优势。CA在他MG Strike跳跃时使用可以打他落地。整体节奏：波动对波为主，但比平时更注意Dee Jay的接近混合。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MP"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "Guile的波动压制限制Manon的medal积累，远距离控制让Manon难以接近"
    strategies:
      - "Manon的威胁随Medal Level增长（command grab damage和range增加）。Level 0-1时她的command grab范围很短，可以更放心波动压制。如果让她叠到Level 3-4+，command grab变成巨大威胁需要更谨慎。Sonic Boom持续压制不给她用hit confirm叠medal的空间。Manon的5MP是8f startup比你的2MP慢。"
      - "Manon没有3f button（她的2LP是4f），在近距离你的2LP（4f, +5 on hit）可以和她公平竞争。用5MK和2MK在中距离控制。Manon的Renverse（command grab）在Level 5时伤害极高——保持中距离就安全。她的OD Chassé（reversal kick）不是完全无敌。Sonic Boom跟波推进时注意不要走进command grab range。"
      - "DI在Manon出heavy attack或attempting medal combo时使用。DR不建议——保持中距离波动压制。SA1用于惩罚Manon的whiff。SA2开启后Sonic Break持续压制。CA在她出risky command grab whiff时使用。整体节奏：波动压制为主，不给Manon叠medal的空间。"
    keyMoves: ["Sonic Boom", "5MK", "2MK", "Flash Kick"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Guile的波动和距离控制完美克制Marisa的慢速装甲攻击"
    strategies:
      - "Marisa的核心威胁是armored attacks（Gladius, Quadriga）和巨大单发伤害。她的5HP是14f startup很慢但armored——不要用重攻击挑战她的装甲，用Sonic Boom从远距离消耗。Marisa的2HP是-15 on block可以重罚。她的移动速度慢让波动压制特别有效——Marisa很难穿越Sonic Boom接近。"
      - "你的速度优势是关键。5MK（7f）和2MP（6f）比Marisa的任何按钮都快。用这些快速poke在中距离骚扰。Marisa想让你在她armor范围内交换，你不想这样——保持在5MK距离poke然后后退发波。4MK/6MK（Rolling Sobat）低回避可以打她的low attack。anti-air她的jump用Flash Kick。"
      - "DI在Marisa出Gladius charge或Quadriga时使用——armor不能挡DI。DR用于确认poke命中后延伸连段。Marisa的SA2是armored reversal，有meter时不要predictable。SA1 Sonic Hurricane可以打断她的charge attack。SA2开启后Sonic Break让她完全无法接近。CA在她whiff Gladius或Quadriga时使用。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MP"]
  - opponent: "jp"
    difficulty: "advantageous"
    summary: "Guile的Sonic Boom+Blade体系完美克制JP的区域控制，JP难以展开portal压制"
    strategies:
      - "JP的核心威胁是Torbalan（portal）区域控制和Eminence（远距离对空）。Sonic Boom可以和JP的波动对波——HP Sonic Boom速度足以打断他的portal startup。Sonic Blade+Sonic Cross在projectile priority上压过JP的一切。JP的2HP是好的poke但-13 on block可以用Flash Kick或SA1惩罚。他的5HP是-8 on block。"
      - "不要站在full screen——逐步用Sonic Boom和Perfect Parry接近。JP想用portal控制你的移动，但你的Sonic Boom可以打断portal startup。一旦进入中距离，JP的普通技不如你的好——5MK和2MK控制地面。JP的OD Eminence是他的reversal但不是完全无敌。Sonic Cross在波动战中有更高priority。"
      - "DI在JP出Torbalan或heavy attack时使用。DR在读准他的portal timing后突进。JP的CA是全程无敌的，不要在他有CA时whiff大招。SA1 Sonic Hurricane可以打断JP的portal和波动。SA2开启后Sonic Break让JP的区域控制完全失效。CA在JP出risky limb或portal时使用。"
    keyMoves: ["Sonic Boom", "Sonic Blade", "5MK", "Flash Kick"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Guile是Zangief最不愿意面对的角色之一，波动压制完美克制Gief的接近困难"
    strategies:
      - "Zangief的核心威胁是SPD（command grab）和armored attacks。永远不要站在SPD范围内不动——如果近距离必须按按钮或跳。HP SPD range很大，需要保持中距离。Sonic Boom持续压制让Gief无法free接近——他必须jump、lariat穿波、或DR突进。jump用Flash Kick对空，lariat用2MK（低攻击）打。"
      - "用5MK、2MK和HP Sonic Boom在中距离持续骚扰。Zangief的forward dash是18f可以反应——听到dash声音就跳或按2LP。Zangief的lariat是anti-air但可以被低攻击（2MK, 2LK）打。他的5HP是-6 on block可以用2MP惩罚。4LK和4MK低回避可以打他的low attack。6HK（投掷无敌）是SPD的克星。"
      - "DI在Zangief出lariat或heavy normal时使用——lariat不能挡DI。DR不建议——保持中距离波动压制。Zangief的SA1和SA3都是armored reversal，有meter时不要predictable。SA1 Sonic Hurricane可以打断他的approach。SA2开启后Sonic Break让他完全无法接近。CA在Zangief jump-in或whiff SPD时使用。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "6HK"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "Guile的波动压制限制Lily的Wind Stock积累，远距离控制让Lily难以接近"
    strategies:
      - "Lily的核心是Wind Stock系统。她需要charge（214P）来获得stock，充能时是最脆弱的——趁这个窗口用Sonic Boom打她。有stock时她的Tomahawk Buster（DP）和Condor Dive变强。Sonic Boom持续压制不给她free charge的空间。Lily的2LP是4f可以在近距离和你交换。"
      - "中距离你的工具更优：5MK（7f）和2MP（6f）的frame data比Lily的普通技好。她的5MP是9f startup比你的2MP慢。Lily的Condor Spire（approaching move）是-6 on block可以用2MP惩罚。anti-air她的Condor Dive用LK Flash Kick（5f启动）。4LK低回避可以打她的low attack。"
      - "DI在Lily charge Wind Stock或出Condor Spire时使用。DR不建议——保持波动压制。Lily的SA2是armored reversal。SA1 Sonic Hurricane打断她的charge。SA2开启后Sonic Break持续压制不给charge空间。CA在她空中Condor Dive时使用。整体节奏：波动持续压制，不给她积累stock的机会。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MP"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "Cammy的机动性和dive kick让对空时机更难把握，但Sonic Boom仍然有效"
    strategies:
      - "Cammy的核心威胁是Cannon Strike（dive kick）和Spiral Arrow（slide）。Cannon Strike的角度变化大，需要仔细观察对空时机——LK Flash Kick（5f, AA无敌1-7f）是对空首选。如果Cannon Strike角度太浅，用2HP（9f anti-air）。Spiral Arrow是-6到-9 on block取决于版本，用2MP~Flash Kick惩罚。"
      - "中距离用5MK和Sonic Boom交换。Cammy的5MP是5f startup很快，注意她的快速button。她的5HK是-5 on block可以用2MP惩罚。Cammy的Hooligan Combination是空中混合但可以用Flash Kick对空。Sonic Boom持续压制让她无法free dive kick。4LK和4MK低回避对抗她的low attack。6HK（投掷无敌）打她的throw attempt。"
      - "DI在Cammy出Spiral Arrow或heavy Cannon Strike时使用。DR不建议——保持中距离波动压制。Cammy的OD Cannon Spike是她的reversal但不是完全无敌。SA1 Sonic Hurricane可以打断她的Spiral Arrow。SA2开启后Sonic Break持续压制。CA在她Cannon Strike跳入时使用。整体节奏：波动为主但特别注意dive kick对空。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "6HK"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid的空中机动性需要精确对空，但Sonic Boom仍然能有效控制地面节奏"
    strategies:
      - "Rashid的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和mix-up。Eagle Spike HP版是-7 on block可以用2MP惩罚。他的Ysaar（whirlwind）给他额外的jump和glide option——不要追他空中，等他落地再波动。Rashid的5MP是6f startup很快，中距离要小心。Sonic Boom控制地面让他难以在地面上自由行动。"
      - "保持中距离用5MK和Sonic Boom控制节奏。Rashid想用速度控制比赛节奏，你需要用自己的波动让他慢下来。他的Arabian Sky High（overhead）是22f startup可以反应block。anti-air他的Eagle Spike用Flash Kick。Rashid想用glide绕过波动——注意他空中变向的时机。4MK/6MK低回避对抗他的low attack。"
      - "DI在Rashid出Eagle Spike或heavy whirlwind move时使用。DR不建议——保持波动控制节奏。Rashid的SA2是快速reversal。SA1 Sonic Hurricane可以打断他的空中approach。SA2开启后Sonic Break持续压制。CA在他Eagle Spike whiff或glide landing时使用。整体节奏：波动为主，精确对空是关键。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "2MP"]
  - opponent: "a-k-i"
    difficulty: "advantageous"
    summary: "Guile的波动压制限制A.K.I.的毒设置空间，远距离控制让毒系攻击难以展开"
    strategies:
      - "A.K.I.的核心威胁是毒系统（toxic brew, 毒蛇trap）。她需要时间设置毒cloud和ground trap，趁她setup时用Sonic Boom持续压制。被毒后不要慌——毒伤害是可以承受的，继续波动节奏。她的5MP是6f startup很快但range短。Sonic Boom持续压制不给她free setup的空间。"
      - "中距离你的button质量更好。5MK（+1 on hit）和2MK（+4 on hit）是核心poke。A.K.I.的toxic command grab需要近距离，保持在5MK距离就安全。她的2HP是-10 on block可以2MP~Flash Kick惩罚。她的Nightshade Pulse（projectile）startup很慢（20f+）可以DI打断或HP Sonic Boom对波赢。"
      - "DI在A.K.I.出Nightshade Pulse或setup toxic trap时使用。DR不建议——保持波动压制。A.K.I.的OD Heel Strike是她的reversal但range有限。SA1 Sonic Hurricane打断她的setup。SA2开启后Sonic Break持续压制不给setup时间。CA在她whiff toxic trap或jump-in时使用。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MK"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed的Psycho Flicker让中距离变得危险，需要更谨慎的波动节奏"
    strategies:
      - "Ed的核心威胁是Psycho Flicker（长距离快速poke）和Kill Rush（approaching armor move）。Psycho Flicker的range很长让中距离很危险——用HP Sonic Boom从更远距离攻击，不要走进Flicker range。Kill Rush是armored但DI可以打断。Ed的波动可以和Sonic Boom对波但恢复不如你快。"
      - "接近方式：用Perfect Parry吸他的psycho ball，然后DR突进或继续波动。Ed的5MP是8f和你的差不多。他的5HP是-6 on block可以用2MP惩罚。Ed的Snatcher（command grab）range短，保持中距离就安全。4HP维持蓄力同时poke。Sonic Blade+Sonic Cross在波动战中获得优势。"
      - "DI在Ed出Kill Rush或Psycho Ball heavy版时使用。DR不建议——保持波动节奏。Ed的SA2是快速armored reversal。SA1 Sonic Hurricane打断他的approach。SA2开启后Sonic Break在波动战中获得优势。CA在他Psycho Rush whiff或risky approach时使用。整体节奏：波动为主但比平时更远距离。"
    keyMoves: ["Sonic Boom", "5MK", "4HP", "Flash Kick"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma伤害恐怖但血量低（9000），一个正确的punish就能重创他"
    strategies:
      - "Akuma的核心威胁是巨大伤害输出和demon flip混合。他的health只有9000（比你少1000），所以一个good conversion就能重创他。Demon Flip的punch/kick/throw混合需要读取——用LK Flash Kick打他的flip punch，jump out打他的flip throw。Sonic Boom持续压制不让他free demon flip。anti-air他的jump用Flash Kick。"
      - "中距离你的5MK和2MP可以和Akuma交换。他的5MP是5f startup很快要小心。Akuma的Gohadoken startup比你稍快但Sonic Boom恢复更快——波动战你仍有优势。他的5HK是-6 on block可以2MP惩罚。关键是不让他free设置air fireball——Flash Kick对空。4LK低回避对抗他的low attack。Sonic Blade+Sonic Cross在波动战中有优势。"
      - "DI在Akuma出heavy Gohadoken或sweep时使用。DR不建议——保持波动节奏。Akuma的SA1（Raging Demon）是command grab有armor break，不要在他有meter时predictable。SA1 Sonic Hurricane可以打断他的approach。SA2开启后Sonic Break持续压制。CA在他demon flip或whiff heavy attack时使用——对Akuma每个hit都珍贵。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "2MP"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison的Psycho Power接近需要蓄力，Guile的波动可以打断他的蓄力节奏"
    strategies:
      - "M. Bison的核心威胁是Psycho Crusher接近和Scissors Loop压力。HP Psycho Crusher是-8 on block可以用2MP或4HP惩罚。Scissors（LK版）是+1 on block让他保持压力——不要乱按按钮，等他scissors heavy版（-6 on block）再punish。他的5HP是-5 on block。Sonic Boom持续压制不给Bison free charge时间。"
      - "用HP Sonic Boom控制中距离，Bison需要charge时间来出Psycho Crusher和Scissors。持续的Sonic Boom压力不让他free charge。一旦接近用5MK和2MK控制地面。Bison的2LP是4f可以mash但你的2LP也是4f可以对抗。4HP维持蓄力同时poke。6HK（投掷无敌）打他的throw attempt。anti-air用Flash Kick。"
      - "DI在Bison出Psycho Crusher或heavy Scissors时使用。DR不建议——保持波动压制。Bison的SA2是armored reversal，有meter时不要predictable。SA1 Sonic Hurricane打断他的Psycho Crusher。SA2开启后Sonic Break持续压制不给charge空间。CA在他whiff Psycho Crusher或Scissors时使用。"
    keyMoves: ["Sonic Boom", "5MK", "4HP", "Flash Kick"]
  - opponent: "terry"
    difficulty: "advantageous"
    summary: "Guile的波动体系压制Terry的传统波动，Terry接近手段有限"
    strategies:
      - "Terry的核心威胁是Power Wave（波动）和Burn Knuckle（approaching move）。Power Wave的恢复比Sonic Boom快但伤害低。Sonic Boom在波动战中全面优于Power Wave——HP Sonic Boom速度足以赢对波。Burn Knuckle HP版是-9 on block可以用2MP~Flash Kick惩罚。他的Rising Tackle是anti-air/DP但只有OD版完全无敌。"
      - "中距离你的5MK和2MP比Terry的普通技稍快。他的5MP是8f和你的2MP差不多但range更短。Terry的Crack Shoot（overhead）是20f startup可以反应block。用HP Sonic Boom和他交换波动，然后5MK和2MK控制地面。Terry的Buster Wolf（SA1）是armored reversal但可以用DI打断。"
      - "DI在Terry出Burn Knuckle或heavy Power Wave时使用。DR不建议——保持波动压制节奏。SA1 Sonic Hurricane打断他的波动。SA2开启后Sonic Break持续压制。CA在他whiff Burn Knuckle或jump-in时使用。整体节奏：波动持续压制为主，Terry难以突破防线。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MP"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai的fan波动和空中机动让波动战复杂化，需要更灵活的距离管理"
    strategies:
      - "Mai的核心威胁是fan projectile和air mobility。她的fan波动可以多角度发射让接近变得复杂。她的air fan让她可以在空中持续骚扰，anti-air很困难——不要追她空中，等她落地再发波。Sonic Boom仍然有效但需要更灵活的角度管理。Sonic Blade+Sonic Cross在projectile priority上有优势。"
      - "接近方式：Perfect Parry吸fan节省Drive Gauge。HP Sonic Boom和她的fan对波。一旦接近，Mai的普通技frame data不如你的好——用5MK和2MK控制。她的command grab range短保持中距离安全。4LK低回避对抗她的low attack。anti-air她的空中fan用Flash Kick但timing更难。6HK（投掷无敌）打她的throw attempt。"
      - "DI在Mai出fan projectile或air approach时使用。DR不建议——需要比平时更耐心。Mai的SA2是快速reversal。SA1 Sonic Hurricane可以打断她的空中approach。SA2开启后Sonic Break持续压制。CA在她空中fan whiff或landing时使用。整体节奏：波动为主但需要更灵活的距离调整。"
    keyMoves: ["Sonic Boom", "Flash Kick", "5MK", "Sonic Blade"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena的capoeira range需要适应，但Sonic Boom仍然能有效控制节奏"
    strategies:
      - "Elena的核心威胁是deceptive range的capoeira kicks和healing ability。她的5MK和2MK的range比看起来长，需要保持适当距离。她的healing需要时间——不要给她free heal的机会，Sonic Boom持续压制。Elena的Lynx Tail是多hit可以Perfect Parry吸收或DI打。Sonic Boom控制地面节奏不让Elena free接近。"
      - "用5MK和HP Sonic Boom在中距离和她交换。Elena的5HP是-5 on block可以用2MP惩罚。她的Mallet Smash（overhead）是22f startup可以反应block。保持在5MK距离最有利——太近会被capoeira mix-up打，太远她可以heal或poke。4MK/6MK低回避对抗她的capoeira low attack。anti-air用Flash Kick。"
      - "DI在Elena出Lynx Tail或heavy capoeira move时使用。DR不建议——保持波动控制。Elena的SA2是invincible reversal。SA1 Sonic Hurricane打断她的approach。SA2开启后Sonic Break持续压制不给heal空间。CA在她whiff capoeira kick或heal attempt时使用。整体节奏：波动持续压制，不给任何喘息。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MK"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data available — rely on fundamental zoning gameplan"
    strategies:
      - "Volcano Handshake作为新角色数据有限。根据已有信息，他的核心工具是Burning Fist系列攻击，具有高伤害但启动偏慢。用Sonic Boom从远距离持续压制，不给他free接近的空间。保持标准Guile gameplan：远距离波动，中距离5MK/2MK poke，anti-air用Flash Kick。"
      - "保持中距离用5MK、2MK和Sonic Boom控制。在他whiff heavy attack时用2MP~Flash Kick或2MP~Sonic Boom惩罚。如果他有armored move用DI打断。4HP维持蓄力同时poke。4LK和4MK低回避对抗他的low attack。6HK（投掷无敌）打他的throw attempt。"
      - "DI在他出heavy attack或charge move时使用。DR不建议——保持波动节奏。SA1 Sonic Hurricane打断他的大技能。SA2开启后Sonic Break持续压制。CA在关键时刻使用。根据实际对局经验调整策略。"
    keyMoves: ["Sonic Boom", "5MK", "Flash Kick", "2MP"]
---

## Additional Notes

Guile is the archetypal charge character in Street Fighter, debuting in Street Fighter II (1991). He returns in SF6 with the strongest fireball zoning toolkit in the game, centered around Sonic Boom.

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | 5MP → 2MP → HP Sonic Boom | ~2000 |
| Midscreen BnB (Punish) | 2MP~2MP TC → HP Sonic Boom | ~1800 |
| Anti-Air | LK Flash Kick → HK Flash Kick (juggle) | ~2200 |
| Drive Rush Route | 2MK~DR → 5MP → 4HP~HP Sonic Boom | ~2500 |
| Corner Perfect Boom | 5MP → 2MP~2MP TC → Perfect LP Boom → 2LP → loop | ~3500+ |
| Corner Max Damage | DI Wall Splat → 2HK~3HK TC → LK Flash Kick > OD Flash Kick | ~3000 |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +5 | -2 | Fastest normal, chain starter |
| 2MP | 6f | +4 | -2 | Combo filler, TC into 2MP |
| 5MP | 7f | +6 | 0 | Primary combo starter |
| 5MK | 7f | +1 | -4 | Best mid-range poke |
| 4HP | 9f | +1 | -4 | Charge-maintaining poke |
| 5HP | 7f | -1 | -6 | Heavy confirm, PC stagger |
| 2MK | 8f | +4 | -5 | Low poke, TC to 6MP overhead |
| Sonic Boom | 10f | +3(+4P) | -3 | Best fireball in the game |
| LK Flash Kick | 5f | KD+36 | -30 | Primary anti-air |
| OD Flash Kick | 6f | KD+29 | -33 | Fully invincible reversal |
| 6HK | 17f | -1 | -8 | Throw invuln 4-28f |
| SA1 Sonic Hurricane | 8f | KD+41 | -26 | Strike/throw invuln |
| SA3 Crossfire Somersault | 9f | KD+16 | -59 | Fully invincible |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 4.3
- **Back Walk Speed:** 3.2
- **Forward Dash:** 21 frames
- **Prejump Frames:** 4
