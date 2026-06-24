// ─────────────────────────────────────────────
// EXERCISE BANK DATA
// ─────────────────────────────────────────────
const DUMBBELL_BANK = [
  // ── CHEST ──
  {id:'db_bench',name:'Dumbbell Bench Press',muscle:'chest',muscles:['chest','triceps','front delts'],type:'compound',how:'Lie flat on a bench, dumbbells at chest level, elbows at 45° from your torso. Press up and slightly inward until arms are fully extended. Lower slowly, feeling a stretch across your chest. Keep shoulder blades retracted and feet flat on the floor throughout.',cue:'Arch your upper back slightly and keep shoulder blades pinched together. This protects your shoulders and gives your chest more surface area to press from. Don\'t let the dumbbells touch at the top — keep tension on the pecs.',alt:'db_floor_press'},
  {id:'db_incline_press',name:'Incline Dumbbell Press',muscle:'chest',muscles:['upper chest','front delts','triceps'],type:'compound',how:'Set bench to 30–45°. Sit with dumbbells resting on upper thighs, use knees to kick them up as you lie back. Hold at chest level, elbows ~45° from torso. Press up until arms fully extended. Lower slowly, feel stretch in upper chest.',cue:'Don\'t go too steep or it becomes a shoulder press. Drive through the upper chest — imagine pushing two walls apart at the top. Keep dumbbells in line with upper chest, not over your eyes.',alt:'db_bench'},
  {id:'db_decline_press',name:'Decline Dumbbell Press',muscle:'chest',muscles:['lower chest','triceps'],type:'compound',how:'Set bench to slight 15–30° decline. Lie back with legs secured. Hold dumbbells at sides of lower chest, press up and slightly inward. Lower slowly with control.',cue:'A steeper decline doesn\'t mean more lower chest activation — keep it subtle. Anything beyond 30° shifts emphasis away from the pecs entirely.',alt:'decline_pushup'},
  {id:'db_flye',name:'Dumbbell Chest Flyes',muscle:'chest',muscles:['chest','front delts'],type:'isolation',how:'Lie flat on bench, arms extended over chest, palms facing each other, slight bend locked in elbows. Lower weights in a wide arc out to sides. Stop when you feel a significant chest stretch. Reverse the arc squeezing dumbbells back together. Don\'t touch them at top — stop short to keep tension.',cue:'Think of hugging a large barrel. The motion is all shoulder — your elbows stay fixed. If elbows are bending significantly, weight is too heavy. Go lighter and feel more.',alt:'db_incline_flye'},
  {id:'db_incline_flye',name:'Incline Dumbbell Flyes',muscle:'chest',muscles:['upper chest','front delts'],type:'isolation',how:'Set bench to 30°. Lie back, press dumbbells to lockout. Slightly retract shoulder blades, unlock elbows, slowly lower laterally maintaining elbow angle. Reverse by squeezing pecs together, bring dumbbells back to start without touching.',cue:'Imagine you\'re trying to hug a tree. Go lighter than you think you need — incline flies are a feel exercise. Getting 15 clean reps with a good stretch is worth more than grinding 8 messy ones.',alt:'db_flye'},
  {id:'db_pullover',name:'Dumbbell Pullover',muscle:'chest',muscles:['chest','lats','serratus','triceps'],type:'isolation',how:'Lie perpendicular across flat bench, shoulders resting on bench, hips dropped toward floor. Hold single dumbbell with both hands overhead, arms nearly straight with slight elbow bend. Lower behind head in arcing motion until deep stretch through chest and lats. Pull back over chest.',cue:'Arnold\'s forgotten gem. Focus on feeling the lats pull the weight back, not your arms. Keep the weight light — this is a feel and stretch exercise. The rib cage expansion you feel is the point.',alt:'db_flye'},
  {id:'db_squeeze_press',name:'Dumbbell Squeeze Press',muscle:'chest',muscles:['inner chest','triceps','front delts'],type:'compound',how:'Lie flat on bench, press dumbbells together with palms facing each other. Squeeze them hard throughout the entire movement. Lower to chest while maintaining the squeeze, press back up. Never let the dumbbells separate.',cue:'The constant squeeze creates more inner chest activation than a standard press. Think of trying to crush the dumbbells together — that tension is what makes this exercise different.',alt:'db_bench'},
  {id:'db_floor_press',name:'Dumbbell Floor Press',muscle:'chest',muscles:['chest','triceps'],type:'compound',how:'Lie on floor with knees bent, feet flat. Hold dumbbells at chest level. Press up until arms fully extended. Lower until triceps touch the floor lightly — this is your range limiter. Press back up.',cue:'The floor limits your range of motion, which actually reduces shoulder stress. Great option if your shoulders are feeling beat up from overhead work. Triceps do more work here than bench press.',alt:'db_bench'},
  {id:'decline_pushup',name:'Decline Push-Ups',muscle:'chest',muscles:['lower chest','triceps','front delts'],type:'compound',how:'Place feet on a bench or box, hands on floor shoulder-width apart. Lower chest to floor with elbows at ~45° from torso. Press back up explosively. The elevated feet angle shifts emphasis to the lower chest.',cue:'If your gym has dip bars — use them and lean slightly forward to hit the lower pec over the triceps. Your chest should already be pumped from the session at this point — this is a finisher.',alt:'db_decline_press'},
  // ── BACK ──
  {id:'db_bent_row',name:'Dumbbell Bent-Over Row',muscle:'back',muscles:['lats','rhomboids','traps','biceps'],type:'compound',how:'Stand holding dumbbells, hinge forward until torso is ~45° to floor. Begin by driving elbows back behind body while retracting shoulder blades. Row dumbbells to lower chest, squeeze at top for 1 second. Lower with control.',cue:'Don\'t shrug at the top — this is a back exercise not a trap exercise. Think about putting your elbows in your back pockets. If you feel your biceps overworking, use a false grip (don\'t wrap thumb around dumbbell).',alt:'db_single_row'},
  {id:'db_single_row',name:'Single-Arm Dumbbell Row',muscle:'back',muscles:['lats','rhomboids','biceps'],type:'compound',how:'Plant one knee and same-side hand on bench, other foot on floor. Hold dumbbell in free hand, arm extended. Drive elbow back toward hip, keeping it close to body. Squeeze lat at top. Lower with control through full range.',cue:'Go heavy here — this is your heaviest back exercise. The last 2 reps of each set should be a genuine fight. Your back grows from heavy pulling. Allow the shoulder to protract at the bottom for full lat stretch.',alt:'db_chest_supported_row'},
  {id:'db_chest_supported_row',name:'Chest-Supported Dumbbell Row',muscle:'back',muscles:['lats','rhomboids','rear delts','biceps'],type:'compound',how:'Set incline bench to 45°. Sit chest-down against bench, feet planted on floor. Let arms hang straight down holding dumbbells. Squeeze shoulder blades then bend elbows to bring dumbbells toward rib cage. Reverse slowly.',cue:'This eliminates lower back fatigue and lets you focus entirely on pulling muscles. Great for people who struggle to feel their back during rows. Pause for 1 second at the top of every rep.',alt:'db_bent_row'},
  {id:'db_rdl',name:'Romanian Deadlift (Dumbbells)',muscle:'back',muscles:['hamstrings','glutes','erector spinae','traps'],type:'compound',how:'Stand with dumbbells in front of thighs, slight knee bend. Push hips back — not down — lowering dumbbells along front of legs. Feel hamstring stretch load progressively. Drive hips forward to stand, squeezing glutes at top.',cue:'Think "close a car door with your butt" to get the hip hinge pattern right. Your knees stay soft but largely fixed. Don\'t round your lower back — if you can\'t maintain a flat back, reduce the weight or limit depth.',alt:'db_deadlift'},
  {id:'db_deadlift',name:'Dumbbell Deadlift',muscle:'back',muscles:['erector spinae','glutes','hamstrings','traps','lats'],type:'compound',how:'Stand with dumbbells at sides, feet hip-width. Push hips back and lower dumbbells along front of legs until they reach mid-shin. Keep back flat, chest up. Drive through whole foot to stand, squeeze glutes at top.',cue:'The heaviest compound you can do with dumbbells. It trains the entire posterior chain from calves to traps. Don\'t bend your knees so much that you turn this into a squat — it\'s a hip hinge.',alt:'db_rdl'},
  {id:'db_shrug',name:'Dumbbell Shrugs',muscle:'back',muscles:['upper traps'],type:'isolation',how:'Stand holding dumbbells at sides, arms straight. Shrug shoulders directly upward toward ears — no rolling. Squeeze traps at top, pause 1 second. Lower with control. For deeper stretch, hinge slightly at hips before lifting.',cue:'No rolling — that\'s a shoulder injury waiting to happen. Straight up, squeeze, straight down. Shrugs complement the rest of your back after deadlifts and rows have already hammered your lats and rhomboids.',alt:'db_upright_row'},
  {id:'db_upright_row',name:'Dumbbell Upright Row',muscle:'back',muscles:['traps','front delts','medial delts','biceps'],type:'compound',how:'Stand holding dumbbells in front of thighs, overhand grip. Pull dumbbells straight up, leading with elbows, keeping them higher than wrists throughout. Raise to upper chest height. Lower with control.',cue:'Keep the dumbbells close to your body throughout. Stop at upper chest — going higher increases impingement risk. Wide grip shifts emphasis more toward delts, narrow grip toward traps.',alt:'db_shrug'},
  {id:'db_rear_delt_flye',name:'Bent-Over Rear Delt Flyes',muscle:'back',muscles:['rear delts','rhomboids','lower traps'],type:'isolation',how:'Hinge at hips until torso is near parallel to floor. Hold dumbbells hanging, slight bend in elbows. Raise arms out to sides to shoulder height, squeezing rear delts at top. Lower with control — 3 seconds down.',cue:'Arnold called the rear delt the most neglected head. Nobody cares how heavy you rear delt fly — control and contraction matter more than load. Light weight done with perfect squeezing of the rear delt beats heavy weight every time.',alt:'db_chest_supported_row'},
  {id:'db_t_raise',name:'Dumbbell T-Raises',muscle:'back',muscles:['rear delts','lower traps','rhomboids'],type:'isolation',how:'Stand with slight forward lean, dumbbells hanging. Raise both arms directly out to sides until forming a "T" shape at shoulder height. Squeeze shoulder blades hard at top. Lower with control.',cue:'Imagine trying to show off your shirt logo to the ceiling. Keep the movement controlled — this targets the rear delts and improves shoulder stability that your pressing work can\'t build.',alt:'db_rear_delt_flye'},
  {id:'db_y_raise',name:'Dumbbell Y-Raises',muscle:'back',muscles:['lower traps','rear delts'],type:'isolation',how:'Stand or lie face down on incline bench. Hold light dumbbells. Raise both arms forward and out to form a "Y" shape above your head. Squeeze at top. Lower slowly.',cue:'This is a corrective movement as much as a strength exercise. The Y-raise targets the lower traps and is critical for long-term shoulder health. Keep the weights very light — these are not a strength exercise.',alt:'db_t_raise'},
  {id:'db_pullover_back',name:'Single-Arm Dumbbell Pullover',muscle:'back',muscles:['lats','chest','serratus'],type:'isolation',how:'Lie on back on bench, holding one dumbbell in one hand in front of chest. Keep arm slightly bent. Lower dumbbell behind head while keeping arm nearly straight. Pull back to start by driving elbow toward hip.',cue:'Focus on feeling your lat pull the weight, not your arm. The stretch at the bottom is the point — don\'t rush through it. This is one of the few exercises that loads the lat in a fully stretched position.',alt:'db_pullover'},
  // ── SHOULDERS ──
  {id:'arnold_press',name:'Seated Arnold Press',muscle:'shoulders',muscles:['front delts','medial delts','triceps'],type:'compound',how:'Sit on bench, hold dumbbells at chin height with palms facing YOU. Press up while rotating outward — finish with palms facing forward at the top. Control the rotation back down to start.',cue:'Arnold invented this movement. The rotation hits both the front AND side delt through a greater range than a standard press. Start lighter than you think — the rotation adds difficulty. This is your primary shoulder builder.',alt:'db_shoulder_press'},
  {id:'db_shoulder_press',name:'Dumbbell Shoulder Press',muscle:'shoulders',muscles:['front delts','medial delts','triceps'],type:'compound',how:'Sit or stand, dumbbells at shoulder height, palms facing forward, elbows at 90°. Press up until arms fully extended, don\'t let dumbbells touch. Lower slowly back to start.',cue:'Standing requires more core tension than seated. Sit for heavier loads, stand for core engagement. Don\'t let the dumbbells clang together at the top — stop just short and keep tension on the delts.',alt:'arnold_press'},
  {id:'db_lateral_raise',name:'Dumbbell Lateral Raises',muscle:'shoulders',muscles:['medial delts'],type:'isolation',how:'Stand with dumbbells at sides, slight bend in elbows. Lead with elbows — not your hands. Raise to just above shoulder height, pause 1 second at top. Lower 3 seconds down.',cue:'15 lbs is your ceiling right now — don\'t rush past it. Lead with your elbows and imagine you\'re pouring a glass of water at the top (pinky slightly higher than thumb). This is a form exercise first and always.',alt:'db_cable_lateral'},
  {id:'db_cable_lateral',name:'Cable Lateral Raise',muscle:'shoulders',muscles:['medial delts'],type:'isolation',how:'Stand sideways to cable, handle in opposite hand across body. Pull cable out to side in a lateral raise arc, leading with elbow. Pause at shoulder height, lower slowly.',cue:'Cable provides constant tension throughout the range — dumbbells only have tension at the top. Both are valuable. The cable version tends to feel better on the shoulder joint for many people.',alt:'db_lateral_raise'},
  {id:'db_front_raise',name:'Dumbbell Front Raises',muscle:'shoulders',muscles:['front delts','upper chest'],type:'isolation',how:'Stand with dumbbells at thighs, palms facing down. Raise both arms forward, keeping arms straight, until shoulder height. Pause briefly. Lower slowly.',cue:'Front raises isolate the anterior delt, but be aware your front delts already get heavy work from pressing. Use these sparingly — if your pressing is solid, your front delts won\'t be a weak point.',alt:'arnold_press'},
  {id:'db_rear_delt_raise',name:'Seated Rear Delt Raises',muscle:'shoulders',muscles:['rear delts','rhomboids'],type:'isolation',how:'Sit at edge of bench, lean forward so chest is over thighs. Hold dumbbells hanging below bench. Raise out to sides with slight elbow bend, squeezing rear delts at top. Lower 3 seconds.',cue:'Sitting removes the temptation to use momentum. The rear delt is the most neglected head of the shoulder — most people skip it and wonder why their shoulders look flat from the side.',alt:'db_rear_delt_flye'},
  {id:'db_face_pull',name:'Dumbbell Face Pull Simulation',muscle:'shoulders',muscles:['rear delts','external rotators','traps'],type:'isolation',how:'Lie face-down on low incline bench, arms extended down holding light dumbbells. Pull dumbbells toward face — elbows out wide, hands near ears at top. Squeeze rear delts and external rotators. Lower slowly.',cue:'This simulates a cable face pull using an incline bench. It targets the external rotators — the most undertrained muscles in most programs. Critical for long-term shoulder health. Use very light weight.',alt:'db_rear_delt_raise'},
  // ── BICEPS ──
  {id:'db_curl',name:'Dumbbell Bicep Curl',muscle:'biceps',muscles:['biceps brachii','brachialis'],type:'isolation',how:'Stand feet shoulder-width, dumbbells at sides, palms forward. Curl toward shoulders keeping elbows pinned to sides. Supinate fully at top and squeeze. Lower 3 seconds.',cue:'No swinging — momentum is a wasted rep. Arnold said if you\'re swinging, the weight is too heavy. Slow eccentric (3 seconds down) is where most hypertrophy happens. Supinate at the top for full contraction.',alt:'db_hammer_curl'},
  {id:'db_hammer_curl',name:'Hammer Curl',muscle:'biceps',muscles:['biceps','brachialis','brachioradialis'],type:'isolation',how:'Stand with dumbbells at sides, palms facing in (neutral grip). Curl toward shoulder keeping neutral grip throughout — don\'t rotate. Squeeze at top, lower 3 seconds.',cue:'The neutral grip hits the brachialis — the muscle underneath the bicep that adds thickness and pushes the bicep peak up. Sitting removes body English and forces strict form. Great for arm thickness.',alt:'db_curl'},
  {id:'db_incline_curl',name:'Incline Dumbbell Curl',muscle:'biceps',muscles:['biceps long head'],type:'isolation',how:'Sit on incline bench, arm hangs behind torso at bottom. Don\'t swing forward to get the rep. Curl up with control, feel the long head stretch at the bottom fully before curling.',cue:'Arnold credited this most for his bicep peak. The arm-behind-torso position stretches the long head more than standing curls. Don\'t swing forward — if you\'re swinging, the bench angle is doing nothing.',alt:'db_concentration_curl'},
  {id:'db_concentration_curl',name:'Concentration Curls',muscle:'biceps',muscles:['biceps peak'],type:'isolation',how:'Sit on bench, legs spread. Hold dumbbell in one hand, elbow braced on inner thigh. Zero momentum. Curl toward chest, squeeze at top for 1 full second. Switch arms.',cue:'Arnold\'s signature. An ACE study found concentration curls are the most effective exercise for bicep activation. Elbow braced on thigh means zero momentum — only the bicep can do the work. Squeeze for that full second.',alt:'db_incline_curl'},
  {id:'db_reverse_curl',name:'Reverse Curl',muscle:'biceps',muscles:['brachialis','brachioradialis','forearms'],type:'isolation',how:'Hold dumbbells with overhand (pronated) grip, palms facing down. Curl toward shoulders keeping this overhand grip. The motion feels harder — that\'s because the bicep is in a weaker position.',cue:'The reverse grip hits the brachialis and brachioradialis more than standard curls. This builds arm thickness and forearm development that standard curls miss. Use about 70% of your normal curl weight.',alt:'db_hammer_curl'},
  {id:'db_zottman_curl',name:'Zottman Curl',muscle:'biceps',muscles:['biceps','brachialis','brachioradialis','forearms'],type:'isolation',how:'Curl with supinated grip (palms up) to top. At peak, rotate hands to pronated grip (palms down). Lower slowly with pronated grip. Rotate back to supinated at bottom.',cue:'One exercise that trains both the curl (supinated up) and reverse curl (pronated down) patterns. The slow pronated descent builds brachialis and forearm strength while giving you the full bicep contraction on the way up.',alt:'db_curl'},
  {id:'db_cross_body_curl',name:'Cross-Body Curl',muscle:'biceps',muscles:['biceps','brachialis'],type:'isolation',how:'Stand with dumbbells at sides. Curl one dumbbell across your body toward the opposite shoulder, keeping elbow close to body. Alternate arms.',cue:'The cross-body angle provides a slightly different stimulus than standard curls. The brachialis is more active in this position. Good variation to cycle in when standard curls feel stale.',alt:'db_hammer_curl'},
  // ── TRICEPS ──
  {id:'db_skull_crusher',name:'Dumbbell Skull Crushers',muscle:'triceps',muscles:['triceps long head','triceps lateral head'],type:'isolation',how:'Lie flat on bench, dumbbells start above chest with elbows pointing up. Lower slowly toward temples. Keep elbows pointing at ceiling throughout — if they flare, it becomes a press. Press back to start.',cue:'The "skull" name tells you what happens if you lose control. Keep elbows locked in and pointing at the ceiling. This targets the long head — the biggest portion of the tricep. Control every inch of the descent.',alt:'db_overhead_tri_ext'},
  {id:'db_overhead_tri_ext',name:'Overhead Tricep Extension',muscle:'triceps',muscles:['triceps long head'],type:'isolation',how:'Hold one dumbbell overhead with both hands, arms extended. Bend elbows to lower dumbbell behind head. Keep elbows close to ears. Push back to overhead fully.',cue:'The overhead position stretches the long head of the triceps under load — research shows this stretch is superior for muscle growth compared to pushdowns. Elbows close to ears throughout — don\'t let them flare.',alt:'db_skull_crusher'},
  {id:'db_kickback',name:'Tricep Kickbacks',muscle:'triceps',muscles:['triceps','lateral head'],type:'isolation',how:'Hinge at hips, torso near parallel to floor. Upper arm pinned to body parallel to floor, elbow at 90°. Extend arm back until fully straight. Squeeze tricep at lockout. Bend back to 90°.',cue:'Keep the upper arm completely still — only the forearm moves. The squeeze at full extension is critical. Lower weight than you think — if you have to swing to get extension, reduce it. Perfect form here.',alt:'db_skull_crusher'},
  {id:'db_close_grip_press',name:'Close-Grip Dumbbell Press',muscle:'triceps',muscles:['triceps','inner chest','front delts'],type:'compound',how:'Lie flat on bench, hold dumbbells close together (touching or nearly touching) above chest, elbows pointing toward feet. Press up using arms to push, not chest. Keep dumbbells close together throughout.',cue:'Unlike a standard press, focus on straightening the arms using your triceps. The close grip reduces chest and shoulder involvement. Keep the dumbbells as close together as possible for the full set.',alt:'db_skull_crusher'},
  {id:'db_tate_press',name:'Tate Press',muscle:'triceps',muscles:['triceps'],type:'isolation',how:'Lie flat on bench, dumbbells above chest, elbows flared out 90° to sides. Lower dumbbells by bending elbows — they move OUT not back. Press back by extending arms, elbows stay wide.',cue:'This is a tricep press with elbows flared wide — opposite of a close-grip press. It hits the tricep differently, especially the lateral head. Keep elbows at 90° throughout — don\'t let them drift back.',alt:'db_kickback'},
  {id:'db_single_arm_tri_ext',name:'Single-Arm Overhead Tricep Extension',muscle:'triceps',muscles:['triceps long head'],type:'isolation',how:'Stand or sit. Hold one dumbbell overhead in one hand, elbow pointing up. Lower behind head by bending elbow. Drive back to full extension. Complete set, switch arms.',cue:'Unilateral overhead extensions expose strength imbalances between arms. The long head of the tricep makes up two-thirds of the arm\'s size — training it in the stretched overhead position is the most effective approach.',alt:'db_overhead_tri_ext'},
  // ── QUADS ──
  {id:'db_goblet_squat',name:'Dumbbell Goblet Squat',muscle:'quads',muscles:['quads','glutes','core'],type:'compound',how:'Hold one dumbbell vertically at chest with both hands, elbows tucked inside knees at bottom. Chest up, drive through heels to stand. Go as deep as mobility allows — ideally thighs parallel or below.',cue:'The front-loaded position acts as a counterbalance, making it easier to hit proper depth with an upright torso. This is one of the best squat variations for people who train with dumbbells and teaches proper squat mechanics.',alt:'db_squat'},
  {id:'db_squat',name:'Dumbbell Squat',muscle:'quads',muscles:['quads','glutes','hamstrings','core'],type:'compound',how:'Hold dumbbells at sides or on shoulders. Stand feet shoulder-width, toes slightly out. Squat until thighs parallel, chest up, knees tracking over toes. Drive through heels to stand.',cue:'The goblet squat teaches mechanics — the dumbbell squat builds load. Once you have solid squat mechanics from goblet squats, load up here. Keep chest up and don\'t let knees cave in.',alt:'db_goblet_squat'},
  {id:'db_lunge',name:'Walking Dumbbell Lunges',muscle:'quads',muscles:['quads','glutes','hamstrings','calves'],type:'compound',how:'Hold dumbbells at sides, full stride forward, back knee nearly touches floor. Keep torso upright. Drive through front heel to step forward. Alternate legs walking forward.',cue:'The walking motion adds a balance challenge over stationary lunges. Keep your torso upright — don\'t lean forward. Drive through the heel of the front foot, not the toes.',alt:'db_reverse_lunge'},
  {id:'db_reverse_lunge',name:'Reverse Lunge',muscle:'quads',muscles:['quads','glutes','hamstrings'],type:'compound',how:'Stand with dumbbells at sides. Step backward with one foot, lower back knee toward floor. Front thigh parallel to floor. Drive through front heel to return to standing.',cue:'Reverse lunges are easier on the knee than forward lunges because you\'re stepping back — less forward shear force on the knee joint. Great option if forward lunges cause knee discomfort.',alt:'db_lunge'},
  {id:'db_step_up',name:'Dumbbell Step-Ups',muscle:'quads',muscles:['quads','glutes','core'],type:'compound',how:'Use a bench or box. Step up driving through the heel of the working leg — don\'t push off the back foot. Full extension at top, controlled step down.',cue:'Unilateral work fixes left/right strength imbalances that compound lifts hide. Drive through the heel of the working leg only. If you feel your back foot helping, the box is too high or weight is too heavy.',alt:'db_lunge'},
  {id:'db_lateral_lunge',name:'Lateral Lunge',muscle:'quads',muscles:['quads','adductors','glutes'],type:'compound',how:'Stand with dumbbells at sides, feet together. Step wide to one side, push hips back and bend that knee while leaving other leg straight. Drive off the bent leg to return.',cue:'Multi-planar movement — most leg training is forward/back. Lateral lunges train your adductors and the gluteus medius (outer glute) that standard squats and lunges underwork. Knee and toes pointing same direction.',alt:'db_lunge'},
  {id:'db_sumo_squat',name:'Dumbbell Sumo Squat',muscle:'quads',muscles:['inner quads','adductors','glutes'],type:'compound',how:'Stand with feet wider than shoulder-width, toes turned out 45°. Hold one heavy dumbbell vertically between legs with both hands. Squat until thighs parallel. Drive through heels to stand, squeeze glutes.',cue:'Wide stance and turned-out toes shift emphasis to the inner quad and adductors more than a standard squat. The sumo squat also allows more upright torso position, making it easier on the lower back.',alt:'db_goblet_squat'},
  // ── HAMSTRINGS ──
  {id:'db_rdl_ham',name:'Dumbbell Romanian Deadlift',muscle:'hamstrings',muscles:['hamstrings','glutes','erector spinae'],type:'compound',how:'Hold dumbbells at thighs, slight knee bend that stays fixed. Push hips back as you hinge forward, lowering dumbbells along front of legs. Feel hamstring stretch load fully. Drive hips forward to stand.',cue:'Hip hinge not a squat — your knees stay soft but largely fixed. Feel the hamstring stretch at the bottom. The stretch is the point. Drive hips forward (not up) to stand. Squeeze glutes hard at top.',alt:'db_stiff_leg_dl'},
  {id:'db_stiff_leg_dl',name:'Stiff-Leg Deadlift',muscle:'hamstrings',muscles:['hamstrings','glutes','lower back'],type:'compound',how:'Like the RDL but with knees nearly locked. Hold dumbbells, hinge at hips with legs nearly straight. Lower until you feel a strong hamstring stretch. Drive hips forward to stand.',cue:'More hamstring isolation than the RDL because the near-locked knees prevent the quads from assisting. Keep the back flat — rounding compromises the stretch and loads the spine poorly.',alt:'db_rdl_ham'},
  {id:'db_nordic_ham',name:'Nordic Hamstring Curl (Dumbbell assisted)',muscle:'hamstrings',muscles:['hamstrings'],type:'isolation',how:'Kneel on a mat, secure ankles under a bench or have someone hold them. Hold a dumbbell to chest for counterweight. Lower body slowly forward by extending knees, resisting with hamstrings. Use hands to catch yourself at bottom if needed, push back up.',cue:'One of the most effective hamstring exercises. The eccentric (lowering) phase is the key — the slower you go, the more hamstring damage (and therefore growth) you create. Use the dumbbell as counterweight to manage difficulty.',alt:'db_rdl_ham'},
  {id:'db_good_morning',name:'Dumbbell Good Morning',muscle:'hamstrings',muscles:['hamstrings','erector spinae','glutes'],type:'compound',how:'Hold dumbbells at shoulders or behind neck. Stand with slight knee bend. Hinge at hips — push them back, lower chest toward floor. Feel hamstring stretch. Drive hips forward to stand.',cue:'This movement looks simple but teaches the hip hinge pattern in a new way. The weight is on your back/shoulders, which forces your erectors to work hard. Keep a neutral spine — don\'t round.',alt:'db_rdl_ham'},
  // ── GLUTES ──
  {id:'db_hip_thrust',name:'Dumbbell Hip Thrust',muscle:'glutes',muscles:['glutes','hamstrings'],type:'compound',how:'Sit on floor with upper back against bench. Place dumbbell on hip crease. Drive hips up until body forms a straight line from knees to shoulders. Squeeze glutes hard at top. Lower slowly.',cue:'The hip thrust is the most direct glute exercise you can do. The full hip extension at the top is where the glute contracts hardest. Pause for 1 second at the top and squeeze — don\'t just pump up and down.',alt:'db_glute_bridge'},
  {id:'db_glute_bridge',name:'Dumbbell Glute Bridge',muscle:'glutes',muscles:['glutes','hamstrings'],type:'compound',how:'Lie on back, knees bent, feet flat. Place dumbbell on hip crease. Drive hips up by squeezing glutes. Body forms straight line from knees to shoulders at top. Lower slowly.',cue:'Same movement as hip thrust but lying on the floor. Less range of motion than the hip thrust, but great for beginners. The squeeze at the top matters more than how high you go.',alt:'db_hip_thrust'},
  {id:'db_cable_pullthrough',name:'Cable Pull-Through',muscle:'glutes',muscles:['glutes','hamstrings'],type:'compound',how:'Face away from cable, rope handle between legs. Hinge back until you feel glute stretch, then drive hips forward explosively to stand. Squeeze glutes hard at lockout.',cue:'Drive the hips through to the lockout — the hard glute squeeze at the top is the whole point, not how far you bend. Keep a neutral spine; this is a hip hinge, not a squat. No cable? Sub a dumbbell sumo squat, 3×15.',alt:'db_hip_thrust'},
  {id:'db_donkey_kickback',name:'Dumbbell Donkey Kickback',muscle:'glutes',muscles:['glutes'],type:'isolation',how:'Get on hands and knees on a mat. Place dumbbell behind one knee, flex that knee to hold it. Drive that heel straight back and up until leg is parallel to floor. Squeeze glute at top. Lower slowly.',cue:'Pure glute isolation. The dumbbell adds resistance to the kickback motion. Squeeze at the top for 1 second before lowering. Keep hips level — don\'t rotate to get more range.',alt:'db_hip_thrust'},
  {id:'db_curtsy_lunge',name:'Curtsy Lunge',muscle:'glutes',muscles:['glutes','outer quads','adductors'],type:'compound',how:'Stand with dumbbells at sides. Step one foot back and across behind your body (like a curtsy). Lower down until front thigh is near parallel. Drive through front heel to stand.',cue:'The crossing pattern uniquely activates the gluteus medius — the muscle that gives your glutes a rounder shape from the side. This is the most neglected glute movement and one of the most effective.',alt:'db_reverse_lunge'},
  // ── CALVES ──
  {id:'db_calf_raise',name:'Dumbbell Calf Raises',muscle:'calves',muscles:['gastrocnemius','soleus'],type:'isolation',how:'Stand holding dumbbells at sides. Rise on balls of feet, pause 1 second at top. Lower fully — use a step for full range of motion (heels dropping below step level). Repeat.',cue:'Arnold trained calves obsessively after having them pointed out as a weakness. High reps and full range of motion — not heavy weight. The pause at the top is essential. Calves respond to volume, not ego weight.',alt:'db_seated_calf'},
  {id:'db_seated_calf',name:'Seated Calf Raise',muscle:'calves',muscles:['soleus'],type:'isolation',how:'Sit on bench, dumbbells balanced on thighs just above knees. Place balls of feet on a step or raised surface. Lower heels for full stretch, raise as high as possible, pause at top.',cue:'The seated position bends the knee which takes the gastrocnemius out of the movement — isolating the soleus, the deeper calf muscle. You\'ll need less weight than standing calf raises. Both variations complement each other.',alt:'db_calf_raise'},
  {id:'db_single_leg_calf',name:'Single-Leg Calf Raise',muscle:'calves',muscles:['gastrocnemius','soleus'],type:'isolation',how:'Hold one dumbbell in one hand for balance (or hold wall), one foot raised. Rise on ball of standing foot, pause at top, lower fully past platform level for deep stretch.',cue:'Unilateral calf raises expose strength and size imbalances between calves. You\'ll get a deeper contraction training one at a time. Most people have a stronger and a weaker calf — this fixes that.',alt:'db_calf_raise'},
  // ── CORE ──
  {id:'db_crunch',name:'Weighted Crunch',muscle:'core',muscles:['rectus abdominis'],type:'isolation',how:'Lie on back, knees bent, feet flat. Hold dumbbell to chest or behind head. Crunch upper body toward knees using abs, not neck. Squeeze abs at top. Lower slowly.',cue:'Don\'t pull on your neck — your hands are there for support. The movement is small — you\'re flexing the spine, not doing a sit-up. Squeeze the abs at the top like you\'re trying to touch your ribcage to your pelvis.',alt:'db_leg_raise'},
  {id:'db_leg_raise',name:'Leg Raises',muscle:'core',muscles:['lower abs','hip flexors'],type:'isolation',how:'Lie flat, lower back pressed down. Hold dumbbells above chest or grip bench behind head. Raise legs to 90° keeping them straight. Lower slowly without touching floor.',cue:'Press your lower back into the floor — don\'t let it arch. The lower abs are engaged when you resist the legs from pulling the pelvis into anterior tilt. Control the lowering phase — that\'s where the work happens.',alt:'db_crunch'},
  {id:'db_russian_twist',name:'Russian Twist',muscle:'core',muscles:['obliques','transverse abdominis'],type:'isolation',how:'Sit on floor, lean back to ~45°, feet off floor, hold one dumbbell with both hands. Rotate side to side, touching dumbbell to floor on each side.',cue:'The rotation targets the obliques — the muscles that give your waist definition. Keep feet off the ground for added core demand. Don\'t just move your arms — rotate your entire torso.',alt:'db_wood_chop'},
  {id:'db_wood_chop',name:'Dumbbell Wood Chop',muscle:'core',muscles:['obliques','shoulders','lats'],type:'compound',how:'Hold one dumbbell with both hands. Start high on one side (above shoulder), swing diagonally across body and down to opposite knee in a chopping motion. Hips rotate with the movement.',cue:'A full rotational movement that trains your obliques through an athletic range of motion. Hips and shoulders rotate together — don\'t just move your arms. This is a multi-joint, multi-plane exercise.',alt:'db_russian_twist'},
  {id:'db_plank',name:'Plank',muscle:'core',muscles:['transverse abdominis','rectus abdominis','obliques'],type:'isolation',how:'Forearms and toes on floor, body in a straight line from head to heels. Hips level — don\'t let them sag or pike. Squeeze glutes, brace core, breathe normally.',cue:'Think of your body as a rigid plank of wood. Squeeze glutes AND brace core — both together make the plank significantly harder and more effective. If you\'re shaking, you\'re doing it right.',alt:'db_crunch'},
  {id:'db_renegade_row',name:'Renegade Row',muscle:'core',muscles:['core','lats','triceps','chest'],type:'compound',how:'Start in high plank position, hands on dumbbells. Perform a push-up, then row one dumbbell toward hip while balancing on the other hand and feet. Hips stay square. Alternate sides.',cue:'The anti-rotation demand on your core is what makes this elite. Your abs have to fight against the rotating force of the row. Use hex dumbbells for stability. The narrower your foot stance, the harder the core challenge.',alt:'db_plank'},
  {id:'db_farmers_carry',name:'Farmer\'s Carry',muscle:'core',muscles:['core','traps','grip','calves'],type:'compound',how:'Hold heavy dumbbells at sides, stand tall, walk forward for distance or time. Keep shoulders back, core braced, head neutral. Small controlled steps.',cue:'One of the most underrated exercises. Heavy carries build full-body stability, grip strength, and core endurance simultaneously. Walk as far as possible before setting down — the goal is to not put them down.',alt:'db_plank'},
];
// ─────────────────────────────────────────────
// BODYWEIGHT / CALISTHENICS BANK
// ─────────────────────────────────────────────
const BODYWEIGHT_BANK = [
  // ── CHEST ──
  {id:'bw_incline_pushup',name:"Incline Push-Up",muscle:'chest',muscles:["chest","triceps","front delts"],type:'compound',difficulty:'beginner',how:"Place your hands on a raised surface — a counter, desk, or sturdy chair — with your body in a straight line from head to heels. Lower your chest to the edge, then press back up. The higher the surface, the easier the rep.",cue:"The incline takes weight off your hands so you can groove clean reps and full range. Keep a straight line — don't let the hips sag. As it gets easy, use a lower surface.",alt:'bw_pushup',easier:"Wall push-up (hands on a wall)",harder:"Standard push-up on the floor"},
  {id:'bw_pushup',name:"Push-Up",muscle:'chest',muscles:["chest","triceps","front delts"],type:'compound',difficulty:'beginner',how:"Hands slightly wider than your shoulders, body in a straight rigid line. Lower until your chest is just above the floor with elbows about 45 degrees from your torso, then press back to full lockout.",cue:"Squeeze your glutes and brace your core so the whole body moves as one plank. Keep the elbows tucked around 45 degrees, not flared out to 90.",alt:'bw_incline_pushup',easier:"Incline or knees push-up",harder:"Decline (feet-elevated) push-up"},
  {id:'bw_wide_pushup',name:"Wide Push-Up",muscle:'chest',muscles:["chest","front delts"],type:'compound',difficulty:'beginner',how:"Set your hands wider than a standard push-up. Lower your chest between your hands and press back up. The wider base biases the chest over the triceps.",cue:"Don't go so wide that it stresses the shoulders — a bit wider than standard is plenty. Feel the stretch across the chest at the bottom of each rep.",alt:'bw_pushup',easier:"Incline wide push-up",harder:"Archer push-up"},
  {id:'bw_decline_pushup',name:"Decline Push-Up",muscle:'chest',muscles:["upper chest","front delts","triceps"],type:'compound',difficulty:'intermediate',how:"Put your feet on a bench or step with hands on the floor. Lower your chest and press up. The downward angle shifts the load onto the upper chest and shoulders.",cue:"The higher your feet, the more this becomes a shoulder press. Keep the core tight so the lower back doesn't arch as you fatigue.",alt:'bw_pushup',easier:"Standard push-up",harder:"Pike push-up (feet higher still)"},
  {id:'bw_archer_pushup',name:"Archer Push-Up",muscle:'chest',muscles:["chest","triceps","front delts"],type:'compound',difficulty:'advanced',how:"From a wide push-up, shift your weight to one side as you lower while the other arm stays straight out to the side. Press up and alternate sides — each rep loads mostly one arm.",cue:"A stepping stone to the one-arm push-up. The straight 'archer' arm only assists — push with the bent one. Keep your hips square to the floor.",alt:'bw_pushup',easier:"Wide push-up",harder:"One-arm push-up"},
  {id:'bw_pseudo_planche_pushup',name:"Pseudo Planche Push-Up",muscle:'chest',muscles:["chest","front delts","triceps"],type:'compound',difficulty:'advanced',how:"In a push-up, turn your hands so the fingers point toward your feet and lean your shoulders forward past your hands. Lower and press while holding that forward lean.",cue:"The forward lean dumps huge load onto the chest and front delts and builds straight-arm strength toward the planche. Protract the shoulders — push the floor away from you.",alt:'bw_decline_pushup',easier:"Standard push-up",harder:"Tuck planche / planche lean"},
  {id:'bw_explosive_pushup',name:"Explosive / Clap Push-Up",muscle:'chest',muscles:["chest","triceps","front delts"],type:'compound',difficulty:'advanced',how:"Lower under control, then press up so explosively that your hands leave the floor (clap optional). Land softly with bent elbows and flow straight into the next rep.",cue:"Power work — quality over quantity. Only the up-phase is explosive; absorb the landing with soft elbows. End the set the instant your push-off slows.",alt:'bw_pushup',easier:"Standard push-up",harder:"Clap-to-chest push-up"},
  // ── BACK ──
  {id:'bw_inverted_row',name:"Inverted Row",muscle:'back',muscles:["lats","rhomboids","traps","biceps"],type:'compound',difficulty:'intermediate',how:"Lie under a sturdy table edge or a low bar, grip it overhand with a straight body and heels on the floor. Pull your chest to the edge by driving the elbows back, squeeze the shoulder blades, then lower under control.",cue:"The horizontal pull most home setups can manage. The more horizontal your body, the harder it is — bend the knees to scale it down. Squeeze the shoulder blades; don't just yank with the arms.",alt:'bw_doorway_row',easier:"Bend knees / more upright torso",harder:"Feet elevated, body fully horizontal"},
  {id:'bw_doorway_row',name:"Doorway Row",muscle:'back',muscles:["lats","rhomboids","biceps"],type:'compound',difficulty:'beginner',how:"Face an open doorframe, grip both sides at chest height, put your toes near the base and lean back with straight arms. Pull your chest toward the frame, then lower back to a straight-arm lean.",cue:"A true no-equipment back option. Step your feet forward to make it harder, back to make it easier. Lead with the elbows and keep the chest proud.",alt:'bw_inverted_row',easier:"Feet further back / more upright",harder:"Single-arm doorway row"},
  {id:'bw_towel_row',name:"Towel Door Row",muscle:'back',muscles:["lats","rhomboids","biceps"],type:'compound',difficulty:'beginner',how:"Loop a strong towel over the top of a securely latched door, holding both ends. Sit back with straight arms and pull yourself up toward the door, squeezing your back, then lower slowly.",cue:"Test the door and towel before you trust them with full weight. This trains the same horizontal pull as a row — drive the elbows toward your hips.",alt:'bw_doorway_row',easier:"More upright stance",harder:"Lean back further / single arm"},
  {id:'bw_pullup',name:"Pull-Up",muscle:'back',muscles:["lats","rhomboids","biceps","core"],type:'compound',difficulty:'advanced',how:"Hang from a bar with an overhand grip a little wider than your shoulders. Pull your chest toward the bar by driving the elbows down until your chin clears it, then lower all the way to a dead hang.",cue:"The king of pulling. Start every rep from a full hang and pull the elbows down and back. No bar? Use the inverted row. Can't do one yet? Train slow negatives.",alt:'bw_inverted_row',easier:"Negatives / band-assisted / inverted row",harder:"Weighted or archer pull-up"},
  {id:'bw_chinup',name:"Chin-Up",muscle:'back',muscles:["lats","biceps","rhomboids"],type:'compound',difficulty:'intermediate',how:"Hang from a bar with an underhand (palms toward you) grip about shoulder-width. Pull until your chin clears the bar, then lower to a full hang.",cue:"The underhand grip lets the biceps assist, so most people are stronger here than on pull-ups — a great way to earn your first bar pull-up.",alt:'bw_pullup',easier:"Negatives / band-assisted",harder:"Weighted chin-up"},
  {id:'bw_scapular_pull',name:"Scapular Pull-Up",muscle:'back',muscles:["lower traps","lats","rhomboids"],type:'isolation',difficulty:'intermediate',how:"Hang from a bar with straight arms. Without bending the elbows, pull your shoulder blades down and together to raise your body a few inches, then relax back to the hang.",cue:"This teaches the scapular control that makes pull-ups possible and keeps the shoulders healthy. Small range, big payoff — think 'put your shoulder blades in your back pockets'.",alt:'bw_pullup',easier:"Scapular rows on a low bar or table",harder:"Full pull-up"},
  {id:'bw_superman',name:"Superman",muscle:'back',muscles:["lower back","glutes","rear delts"],type:'isolation',difficulty:'beginner',how:"Lie face down with your arms extended overhead. Lift your arms, chest, and legs off the floor at the same time, squeeze, then lower under control.",cue:"Trains the spinal erectors and the whole back chain with zero equipment. Lift with the back muscles, not by cranking the neck — keep your gaze on the floor.",alt:'bw_reverse_snow_angel',easier:"Lift arms and legs separately",harder:"Pause and hold at the top"},
  {id:'bw_reverse_snow_angel',name:"Reverse Snow Angel",muscle:'back',muscles:["rear delts","lower traps","rhomboids"],type:'isolation',difficulty:'beginner',how:"Lie face down, arms by your sides with palms down and chest slightly lifted. Sweep your arms overhead along the floor and back, like a snow angel, keeping them just off the ground.",cue:"A corrective gem for the rear delts and lower traps that pressing never touches. Keep the arms low and the movement slow — control beats range here.",alt:'bw_superman',easier:"Smaller range of motion",harder:"Prone Y-T-W raises"},
  // ── SHOULDERS ──
  {id:'bw_pike_pushup',name:"Pike Push-Up",muscle:'shoulders',muscles:["front delts","medial delts","triceps"],type:'compound',difficulty:'intermediate',how:"From a downward-dog position (hips high, body in an inverted V), bend your elbows to lower the crown of your head toward the floor, then press back up.",cue:"The vertical pressing path makes this your main bodyweight shoulder builder. Keep the hips high and stacked over the shoulders — the more vertical, the more delt.",alt:'bw_elevated_pike_pushup',easier:"Bend the knees / hands elevated",harder:"Elevate the feet (closer to a handstand)"},
  {id:'bw_elevated_pike_pushup',name:"Elevated Pike Push-Up",muscle:'shoulders',muscles:["front delts","medial delts","triceps"],type:'compound',difficulty:'advanced',how:"Same as the pike push-up but with your feet up on a box or bench so the torso is nearly vertical. Lower your head toward the floor between your hands and press up.",cue:"The closest you'll get to a handstand push-up without going upside down. Keep the forearms vertical and the elbows tracking forward for the best carryover.",alt:'bw_pike_pushup',easier:"Floor pike push-up",harder:"Wall handstand push-up"},
  {id:'bw_wall_handstand_hold',name:"Wall Handstand Hold",muscle:'shoulders',muscles:["front delts","medial delts","core"],type:'isolation',difficulty:'intermediate',how:"Kick up into a handstand with your heels resting against a wall. Hold a stacked position — hands, shoulders, and hips in a line — and breathe.",cue:"Builds the straight-arm shoulder strength and balance every advanced press needs. Push the floor away to keep the shoulders 'tall'. Come down the moment your form breaks.",alt:'bw_wall_walk',easier:"Pike hold / partial wall walk",harder:"Wall handstand push-up"},
  {id:'bw_wall_walk',name:"Wall Walk",muscle:'shoulders',muscles:["front delts","core","triceps"],type:'compound',difficulty:'intermediate',how:"Start in a push-up with your feet against the base of a wall. Walk your feet up the wall while walking your hands back toward it, climbing toward a handstand, then reverse back down.",cue:"A full-body shoulder and core builder that teaches the handstand position safely. Move slowly and keep the core braced so your back doesn't overarch.",alt:'bw_wall_handstand_hold',easier:"Walk only partway up",harder:"Hold a wall handstand at the top"},
  {id:'bw_handstand_pushup',name:"Wall Handstand Push-Up",muscle:'shoulders',muscles:["front delts","medial delts","triceps"],type:'compound',difficulty:'advanced',how:"Kick into a wall-supported handstand. Bend the elbows to lower your head toward the floor, then press back to full extension.",cue:"The bodyweight overhead press. Earn it with pike and elevated-pike work first. Lower under control to a folded towel and keep the elbows from flaring wide.",alt:'bw_elevated_pike_pushup',easier:"Elevated pike push-up",harder:"Deficit or freestanding handstand push-up"},
  {id:'bw_shoulder_tap',name:"Plank Shoulder Taps",muscle:'shoulders',muscles:["front delts","core"],type:'isolation',difficulty:'beginner',how:"In a high plank with a slightly wide stance, tap one hand to the opposite shoulder, replace it, then tap with the other hand. Keep the hips from rocking.",cue:"An anti-rotation move that builds shoulder stability and core control. The goal is to keep the hips dead still — the slower you tap, the harder it works.",alt:'bw_plank',easier:"Wider feet / from the knees",harder:"Feet together / add a push-up"},
  // ── BICEPS ──
  {id:'bw_underhand_inverted_row',name:"Underhand Inverted Row",muscle:'biceps',muscles:["biceps","lats","rhomboids"],type:'compound',difficulty:'intermediate',how:"Set up under a table edge or low bar with an underhand (palms-up) grip. Pull your chest to the bar leading with a hard biceps and back squeeze, then lower slowly.",cue:"The supinated grip throws more load onto the biceps than an overhand row — about as close to a bodyweight curl as you'll get. Keep the elbows tucked and squeeze at the top.",alt:'bw_chinup',easier:"More upright torso",harder:"Feet elevated, body horizontal"},
  {id:'bw_door_curl',name:"Isometric Door Curl",muscle:'biceps',muscles:["biceps"],type:'isolation',difficulty:'beginner',how:"Stand close to a doorframe and grip the edge at elbow height, palm up, elbow at your side. Pull hard as if curling and lean your weight back, holding the contraction — or let your body lower and curl back up.",cue:"Bodyweight biceps isolation is limited, so this leans on a hard contraction and your own bodyweight. Keep the elbow pinned to your side and squeeze for the full count.",alt:'bw_underhand_inverted_row',easier:"Less lean / shorter holds",harder:"Single arm, more weight on the pull"},
  // ── TRICEPS ──
  {id:'bw_diamond_pushup',name:"Diamond Push-Up",muscle:'triceps',muscles:["triceps","inner chest","front delts"],type:'compound',difficulty:'intermediate',how:"Form a diamond with your thumbs and index fingers under your chest. Lower with the elbows tucked close to your sides, then press up.",cue:"The narrow hand position shifts the work to the triceps. Keep the elbows brushing past your ribs, not flaring out, to keep the load on the arms.",alt:'bw_bench_dip',easier:"Diamond push-up on the knees or an incline",harder:"Feet-elevated diamond push-up"},
  {id:'bw_bench_dip',name:"Bench / Chair Dip",muscle:'triceps',muscles:["triceps","front delts"],type:'compound',difficulty:'beginner',how:"Place your hands on the edge of a bench or chair behind you, legs out front and hips off the edge. Bend the elbows to lower your hips toward the floor, then press back up to lockout.",cue:"Keep the elbows pointing straight back, not flaring out, to protect the shoulders. Bend your knees to make it easier, or extend / elevate the legs to make it harder.",alt:'bw_parallel_dip',easier:"Bend the knees, feet close in",harder:"Feet elevated / weight on the lap"},
  {id:'bw_parallel_dip',name:"Parallel Bar Dip",muscle:'chest',muscles:["chest","triceps","front delts"],type:'compound',difficulty:'advanced',how:"Support yourself on parallel bars (or two sturdy surfaces) with arms locked. Lower by bending the elbows until your shoulders are just below them, then press back to lockout.",cue:"Stay fairly upright to bias the triceps, or lean forward to bias the lower chest. Don't sink past a comfortable shoulder stretch. A huge upper-body builder.",alt:'bw_bench_dip',easier:"Bench dips / band-assisted dips",harder:"Weighted dips"},
  {id:'bw_bodyweight_skullcrusher',name:"Bodyweight Tricep Extension",muscle:'triceps',muscles:["triceps"],type:'isolation',difficulty:'intermediate',how:"Grip a waist-height bar or sturdy table edge, walk your feet back, and lean in with a straight body. Bending only at the elbows, lower your forehead toward the bar, then extend the arms to push back up.",cue:"A bodyweight skull crusher — keep the upper arms still and the elbows pointing forward so only the triceps work. Walk the feet back to make it harder.",alt:'bw_diamond_pushup',easier:"More upright / higher bar",harder:"Lower bar, more horizontal body"},
  // ── QUADS ──
  {id:'bw_squat',name:"Bodyweight Squat",muscle:'quads',muscles:["quads","glutes","core"],type:'compound',difficulty:'beginner',how:"Feet shoulder-width, toes slightly out. Push your hips back and bend the knees to lower until your thighs are at least parallel, chest up, then drive through your heels to stand.",cue:"The foundation of all leg training. Keep the knees tracking over the toes and your weight through the mid-foot and heels. Go as deep as your mobility allows with a flat back.",alt:'bw_split_squat',easier:"Sit down to a box or chair",harder:"Jump squat or split squat"},
  {id:'bw_split_squat',name:"Split Squat",muscle:'quads',muscles:["quads","glutes","hamstrings"],type:'compound',difficulty:'beginner',how:"Stand in a long staggered stance. Lower straight down until the back knee nearly touches the floor and the front thigh is parallel, then drive up through the front heel. Finish all reps, then switch legs.",cue:"A stationary lunge that builds single-leg strength with less balance demand. Keep the torso upright and most of the weight on the front leg.",alt:'bw_bulgarian_split_squat',easier:"Hold a wall for balance",harder:"Bulgarian split squat (back foot raised)"},
  {id:'bw_bulgarian_split_squat',name:"Bulgarian Split Squat",muscle:'quads',muscles:["quads","glutes","hamstrings"],type:'compound',difficulty:'intermediate',how:"Rest the top of your back foot on a bench or chair behind you, front foot a stride ahead. Lower until the front thigh is parallel, then drive up through the front heel.",cue:"One of the best scalable single-leg builders. Most of your weight stays on the front foot — the back leg just balances. A slight forward lean hits more glute, upright hits more quad.",alt:'bw_split_squat',easier:"Lower the back-foot surface / hold support",harder:"Slow tempo or a jump variation"},
  {id:'bw_reverse_lunge',name:"Reverse Lunge",muscle:'quads',muscles:["quads","glutes","hamstrings"],type:'compound',difficulty:'beginner',how:"From standing, step one foot back and lower until the back knee nearly touches the floor, then drive through the front heel to return to standing. Alternate or finish one side at a time.",cue:"Easier on the knees than forward lunges because there's less forward shear. Keep the torso tall and step back far enough that the front shin stays roughly vertical.",alt:'bw_walking_lunge',easier:"Hold support / shorter range",harder:"Walking or jumping lunges"},
  {id:'bw_walking_lunge',name:"Walking Lunge",muscle:'quads',muscles:["quads","glutes","hamstrings","calves"],type:'compound',difficulty:'intermediate',how:"Step forward into a lunge until both knees are about 90 degrees, then drive through the front heel and bring the back foot through into the next lunge, walking forward.",cue:"Adds a balance and stability challenge over stationary lunges. Keep the torso upright and push through the front heel, not the toes.",alt:'bw_reverse_lunge',easier:"Stationary reverse lunge",harder:"Add a knee drive or hold weight"},
  {id:'bw_wall_sit',name:"Wall Sit",muscle:'quads',muscles:["quads","glutes"],type:'isolation',difficulty:'beginner',how:"Slide your back down a wall until your hips and knees are at 90 degrees with your thighs parallel to the floor. Hold, keeping your back flat to the wall and weight in your heels.",cue:"A pure isometric quad burner — no movement, just time. Keep breathing and the knees stacked over the ankles. Add seconds to your hold each week.",alt:'bw_squat',easier:"Higher hips / shorter holds",harder:"Single-leg wall sit / longer holds"},
  {id:'bw_jump_squat',name:"Jump Squat",muscle:'quads',muscles:["quads","glutes","calves"],type:'compound',difficulty:'intermediate',how:"Drop into a squat, then explode straight up off both feet. Land softly with bent knees to absorb the impact and immediately sink into the next rep.",cue:"Power and conditioning in one. Soft, quiet landings protect the knees — if you can't land softly, you've done enough reps.",alt:'bw_squat',easier:"Bodyweight squat",harder:"Tuck jumps or single-leg hops"},
  {id:'bw_cossack_squat',name:"Cossack Squat",muscle:'quads',muscles:["quads","adductors","glutes"],type:'compound',difficulty:'intermediate',how:"Stand wide. Shift your weight to one side and squat down over that leg while the other stays straight with toes up, then push back to center and switch sides.",cue:"A lateral-plane squat that builds the inner thighs and hip mobility most training ignores. Keep the heel of the working leg down and the chest up.",alt:'bw_split_squat',easier:"Hold support / partial depth",harder:"Full depth, slower tempo"},
  {id:'bw_shrimp_squat',name:"Shrimp Squat",muscle:'quads',muscles:["quads","glutes"],type:'compound',difficulty:'advanced',how:"Stand on one leg, bend the other behind you and hold the foot with the same-side hand. Squat down until the raised knee lightly touches the floor, then drive back up.",cue:"The last stop before the pistol squat, with a shorter range. It demands serious single-leg strength, balance, and mobility — build up with Bulgarian split squats first.",alt:'bw_pistol_squat',easier:"Step-downs / Bulgarian split squat",harder:"Pistol squat"},
  {id:'bw_pistol_squat',name:"Pistol Squat",muscle:'quads',muscles:["quads","glutes","core"],type:'compound',difficulty:'advanced',how:"Standing on one leg, extend the other straight out in front. Squat all the way down on the standing leg, keeping the free leg off the floor, then stand back up.",cue:"The benchmark of single-leg strength, balance, and mobility. Build to it with box pistols and assisted reps. Keep the heel planted and the chest forward to stay balanced.",alt:'bw_shrimp_squat',easier:"Box pistol / hold a support",harder:"Deficit pistol / add weight"},
  {id:'bw_step_up',name:"Step-Up",muscle:'quads',muscles:["quads","glutes","core"],type:'compound',difficulty:'beginner',how:"Face a knee-height step, bench, or sturdy stair. Plant one whole foot on it and drive through that heel to stand fully on top, then lower under control. Don't push off the bottom foot.",cue:"Great for fixing left/right imbalances. Drive through the heel of the top leg only — if the bottom foot is helping, lower the step.",alt:'bw_reverse_lunge',easier:"Lower step",harder:"Higher step / slow lower / add a knee drive"},
  // ── HAMSTRINGS ──
  {id:'bw_nordic_curl',name:"Nordic Hamstring Curl",muscle:'hamstrings',muscles:["hamstrings"],type:'isolation',difficulty:'advanced',how:"Kneel tall with your ankles anchored under something solid (or held). Keeping a straight line from knees to head, lower your torso forward as slowly as you can using the hamstrings, then push off the floor with your hands to help back up.",cue:"One of the most effective hamstring builders there is — the slow lowering is the whole point. Catch yourself with your hands and assist on the way up until you can resist the full range.",alt:'bw_sliding_leg_curl',easier:"Shorter range / more hand assistance",harder:"No hands, full slow negative"},
  {id:'bw_sliding_leg_curl',name:"Sliding Leg Curl",muscle:'hamstrings',muscles:["hamstrings","glutes"],type:'isolation',difficulty:'intermediate',how:"Lie on your back with heels on towels or sliders on a smooth floor and your hips lifted into a bridge. Slide your heels out until the legs are nearly straight, then pull them back toward your hips — all while keeping the hips up.",cue:"Keeps tension on the hamstrings through both the slide-out and the curl-back. Keep your hips high the entire set — don't let your butt touch down.",alt:'bw_nordic_curl',easier:"Both legs, smaller range",harder:"Single-leg slides"},
  {id:'bw_single_leg_rdl',name:"Single-Leg RDL (Bodyweight)",muscle:'hamstrings',muscles:["hamstrings","glutes","core"],type:'compound',difficulty:'beginner',how:"Stand on one leg with a soft knee. Hinge at the hip, reaching your chest forward and the free leg back until your body forms a straight line parallel to the floor, then return to standing.",cue:"Trains the hinge pattern and balance with zero equipment. Push the hips back and feel the stretch in the standing-leg hamstring — keep the back flat.",alt:'bw_hamstring_walkout',easier:"Touch a wall or chair for balance",harder:"Slow tempo / hold a weight"},
  {id:'bw_hamstring_walkout',name:"Hamstring Bridge Walkout",muscle:'hamstrings',muscles:["hamstrings","glutes"],type:'isolation',difficulty:'intermediate',how:"Lie on your back in a glute bridge with the hips up. Keeping the hips lifted, walk your heels out step by step until the legs are almost straight, then walk them back in.",cue:"A no-slider way to load the hamstrings eccentrically. The further your feet travel from your hips, the harder the hamstrings fight to keep the bridge up.",alt:'bw_sliding_leg_curl',easier:"Walk out a shorter distance",harder:"Single-leg walkouts"},
  // ── GLUTES ──
  {id:'bw_glute_bridge',name:"Glute Bridge",muscle:'glutes',muscles:["glutes","hamstrings"],type:'isolation',difficulty:'beginner',how:"Lie on your back, knees bent and feet flat. Drive through your heels to lift the hips until your body is a straight line from knees to shoulders, squeeze the glutes hard at the top, then lower.",cue:"The squeeze at the top matters more than how high you go. Push through the heels and tuck the pelvis to keep the work in the glutes, not the lower back.",alt:'bw_single_leg_glute_bridge',easier:"Shorter range",harder:"Single-leg bridge / elevated hip thrust"},
  {id:'bw_single_leg_glute_bridge',name:"Single-Leg Glute Bridge",muscle:'glutes',muscles:["glutes","hamstrings"],type:'isolation',difficulty:'intermediate',how:"Set up in a glute bridge but extend one leg straight. Drive through the planted heel to lift the hips level, squeeze, and lower under control. Finish the side, then switch.",cue:"Doubling the load on one glute exposes and fixes side-to-side imbalances. Keep the hips level — don't let the working side dip.",alt:'bw_hip_thrust_bw',easier:"Two-leg bridge",harder:"Shoulders-elevated single-leg hip thrust"},
  {id:'bw_hip_thrust_bw',name:"Elevated Hip Thrust",muscle:'glutes',muscles:["glutes","hamstrings"],type:'compound',difficulty:'intermediate',how:"Rest your upper back on a couch or bench with feet flat on the floor. Drive your hips up until your torso is parallel to the floor, squeeze the glutes at the top, then lower with control.",cue:"The raised back gives a bigger range than a floor bridge for a stronger contraction. Tuck the chin, keep the ribs down, and finish each rep with a hard squeeze and a 1-second pause.",alt:'bw_glute_bridge',easier:"Floor glute bridge",harder:"Single-leg / pause reps"},
  {id:'bw_donkey_kick',name:"Donkey Kick",muscle:'glutes',muscles:["glutes"],type:'isolation',difficulty:'beginner',how:"On your hands and knees, keep one knee bent at 90 degrees and drive that foot toward the ceiling until the thigh is in line with your torso. Squeeze the glute at the top, then lower without touching down.",cue:"Pure glute isolation. Keep your back flat and hips square — don't twist to gain height. The squeeze at the top is the rep.",alt:'bw_fire_hydrant',easier:"Smaller range",harder:"Add a top hold or a band"},
  {id:'bw_fire_hydrant',name:"Fire Hydrant",muscle:'glutes',muscles:["glutes"],type:'isolation',difficulty:'beginner',how:"On your hands and knees, keep the knee bent and lift one leg out to the side until the thigh is about parallel to the floor, then lower under control.",cue:"Targets the gluteus medius — the side-glute that builds shape and stabilizes the hips. Brace the core so only the hip moves, not your whole torso.",alt:'bw_donkey_kick',easier:"Smaller range",harder:"Add a top hold or a band"},
  {id:'bw_frog_pump',name:"Frog Pump",muscle:'glutes',muscles:["glutes"],type:'isolation',difficulty:'beginner',how:"Lie on your back with the soles of your feet together and knees out wide (butterfly). Drive your hips up by squeezing the glutes, then lower.",cue:"The turned-out feet bias the glutes hard while taking the hamstrings and quads out of it. Pump with a strong squeeze at the top — these respond to high reps.",alt:'bw_glute_bridge',easier:"Smaller range",harder:"Pause at the top / higher reps"},
  {id:'bw_curtsy_lunge_bw',name:"Curtsy Lunge",muscle:'glutes',muscles:["glutes","quads","adductors"],type:'compound',difficulty:'beginner',how:"From standing, step one foot back and across behind the other (like a curtsy) and lower until the front thigh is near parallel, then drive back to standing.",cue:"The crossing path lights up the gluteus medius for rounder-looking glutes from the side. Keep the front knee tracking over the foot and the chest up.",alt:'bw_reverse_lunge',easier:"Shorter, shallower step",harder:"Slow tempo / hold weight"},
  // ── CALVES ──
  {id:'bw_calf_raise',name:"Standing Calf Raise",muscle:'calves',muscles:["gastrocnemius","soleus"],type:'isolation',difficulty:'beginner',how:"Stand with the balls of your feet on the edge of a step, heels hanging off. Drop the heels for a deep stretch, then rise up as high as you can onto your toes and pause.",cue:"Calves respond to full range and high reps, not speed. Get a full stretch at the bottom and a hard squeeze at the top of every rep.",alt:'bw_single_leg_calf_raise',easier:"Flat ground / hold support",harder:"Single-leg calf raise"},
  {id:'bw_single_leg_calf_raise',name:"Single-Leg Calf Raise",muscle:'calves',muscles:["gastrocnemius","soleus"],type:'isolation',difficulty:'intermediate',how:"Balance on one foot with the ball of your foot on a step, holding a wall for balance. Lower the heel for a full stretch, then rise onto your toes and squeeze. Switch legs.",cue:"Bodyweight is plenty of load when it's all on one calf. Train both sides evenly — most people have a weaker side that this will expose.",alt:'bw_calf_raise',easier:"Two-leg calf raise",harder:"Slow tempo / pause at the top"},
  // ── CORE ──
  {id:'bw_plank',name:"Plank",muscle:'core',muscles:["transverse abdominis","rectus abdominis","obliques"],type:'isolation',difficulty:'beginner',how:"On your forearms and toes, hold your body in a straight line from head to heels. Brace the abs, squeeze the glutes, and hold without letting the hips sag or pike up.",cue:"Think of your body as one rigid plank. Squeezing the glutes and bracing the abs together makes it far more effective. Quality time under tension beats a saggy long hold.",alt:'bw_hollow_hold',easier:"From the knees / hands elevated",harder:"Shoulder taps / longer holds"},
  {id:'bw_side_plank',name:"Side Plank",muscle:'core',muscles:["obliques","transverse abdominis"],type:'isolation',difficulty:'beginner',how:"On one forearm, stack your feet and lift your hips so your body is a straight line from head to feet. Hold with the hips high, then switch sides.",cue:"The best way to train the obliques and lateral core without crunching the spine. Drive the bottom hip up toward the ceiling and don't let it drift down.",alt:'bw_plank',easier:"Bottom knee down",harder:"Lift the top leg / add reach-throughs"},
  {id:'bw_hollow_hold',name:"Hollow Hold",muscle:'core',muscles:["rectus abdominis","hip flexors"],type:'isolation',difficulty:'intermediate',how:"Lie on your back, press the lower back into the floor, and lift your shoulders and straight legs a few inches off the ground with your arms overhead. Hold this dished shape.",cue:"The foundation of gymnastics core strength. The lower back must stay glued to the floor — if it arches, bend the knees or raise the arms and legs to reduce leverage.",alt:'bw_dead_bug',easier:"Tuck the knees / arms by your sides",harder:"Hollow rocks / longer holds"},
  {id:'bw_dead_bug',name:"Dead Bug",muscle:'core',muscles:["transverse abdominis","rectus abdominis"],type:'isolation',difficulty:'beginner',how:"Lie on your back with arms reaching to the ceiling and knees bent over the hips. Slowly extend the opposite arm and leg toward the floor without arching your back, then return and switch sides.",cue:"A safe, spine-friendly way to learn deep core bracing. Keep the lower back pressed flat the whole time — move slowly and only as far as you can control.",alt:'bw_hollow_hold',easier:"Move just the legs / smaller range",harder:"Straight-leg extensions / slow tempo"},
  {id:'bw_leg_raise',name:"Lying Leg Raise",muscle:'core',muscles:["lower abs","hip flexors"],type:'isolation',difficulty:'beginner',how:"Lie flat with your lower back pressed down, hands under your hips if needed. Keeping the legs straight, raise them to vertical, then lower slowly without letting them touch the floor or your back arch.",cue:"Control the lowering phase — that's where the lower abs work hardest. The moment your lower back lifts off the floor you've gone too far; shorten the range.",alt:'bw_reverse_crunch',easier:"Bend the knees / smaller range",harder:"Hanging leg raise"},
  {id:'bw_hanging_leg_raise',name:"Hanging Leg Raise",muscle:'core',muscles:["lower abs","hip flexors","grip"],type:'isolation',difficulty:'advanced',how:"Hang from a bar. Without swinging, raise your legs in front of you — knees bent to start, straight to progress — until your thighs pass parallel, then lower under control.",cue:"EMG research ranks this among the best for the lower abs, and it builds grip too. Kill the swing by curling the pelvis up rather than just lifting the legs.",alt:'bw_leg_raise',easier:"Hanging knee raises",harder:"Toes-to-bar / straight legs"},
  {id:'bw_reverse_crunch',name:"Reverse Crunch",muscle:'core',muscles:["lower abs"],type:'isolation',difficulty:'beginner',how:"Lie on your back with knees bent over your hips. Curl your pelvis up to lift the hips a few inches off the floor toward your ribs, then lower with control.",cue:"A small, precise move — you're rolling the pelvis, not throwing the legs. Think 'pull your hips toward your ribcage' and don't use momentum.",alt:'bw_leg_raise',easier:"Smaller range",harder:"Straight-leg reverse crunch / add a hold"},
  {id:'bw_bicycle_crunch',name:"Bicycle Crunch",muscle:'core',muscles:["obliques","rectus abdominis"],type:'isolation',difficulty:'beginner',how:"Lie on your back, hands by your ears. Bring one knee in while rotating the opposite elbow toward it, extending the other leg, then switch in a steady pedaling rhythm.",cue:"Research consistently ranks this among the top oblique exercises. Rotate from the torso to bring elbow and knee together — don't yank on your neck.",alt:'bw_russian_twist_bw',easier:"Slower tempo / feet higher",harder:"Slow, full-extension reps"},
  {id:'bw_v_up',name:"V-Up",muscle:'core',muscles:["rectus abdominis","hip flexors"],type:'isolation',difficulty:'intermediate',how:"Lie flat with your arms overhead. Lift your straight legs and torso at the same time, reaching your hands toward your feet to form a V, then lower under control.",cue:"A full-range rectus-abs builder that hits upper and lower at once. Keep the legs straight and reach — if your back rounds harshly, regress to tuck-ups.",alt:'bw_hollow_hold',easier:"Tuck-ups / alternating V-ups",harder:"Slow tempo / hold the top"},
  {id:'bw_flutter_kick',name:"Flutter Kicks",muscle:'core',muscles:["lower abs","hip flexors"],type:'isolation',difficulty:'beginner',how:"Lie on your back with legs straight and a few inches off the floor, lower back pressed down. Make small, quick alternating up-and-down kicks.",cue:"Keep the lower back glued to the floor — raise the kick height if it starts to arch. Small, controlled kicks keep constant tension on the lower abs.",alt:'bw_leg_raise',easier:"Higher legs / bent knees",harder:"Lower legs / longer sets"},
  {id:'bw_mountain_climber',name:"Mountain Climber",muscle:'core',muscles:["core","hip flexors","front delts"],type:'compound',difficulty:'beginner',how:"From a high plank, drive one knee toward your chest, then quickly switch legs, running your knees in and out while keeping the shoulders over your hands.",cue:"Core stability plus conditioning. Keep the hips low and level — don't let them pike up — and brace the core so the shoulders stay steady.",alt:'bw_plank',easier:"Slow, deliberate steps",harder:"Faster pace / cross-body knees"},
  {id:'bw_russian_twist_bw',name:"Russian Twist",muscle:'core',muscles:["obliques","transverse abdominis"],type:'isolation',difficulty:'beginner',how:"Sit on the floor, lean back to about 45 degrees and lift your feet. Rotate your torso to tap the floor or your hands on each side, turning from the waist.",cue:"Rotate the whole torso, not just the arms, to hit the obliques. Keep the chest up and the feet off the floor for a bigger challenge.",alt:'bw_bicycle_crunch',easier:"Feet on the floor / smaller range",harder:"Feet elevated / slow tempo"},
];
DUMBBELL_BANK.forEach(e => { e.equip = 'dumbbell'; });
BODYWEIGHT_BANK.forEach(e => { e.equip = 'bodyweight'; });
// ─────────────────────────────────────────────
// DATA LAYER — aggregates the curated built-in bank with web sources
// (free-exercise-db, pluggable for more), normalizes to one schema,
// merges keeping the most complete record, and caches offline.
// ─────────────────────────────────────────────
const EQUIP_LABELS = { dumbbell:'Dumbbells', bodyweight:'Bodyweight', barbell:'Barbell', machine:'Machines', cable:'Cable', kettlebell:'Kettlebells', bands:'Bands', other:'Other' };
const EQUIP_ORDER = ['dumbbell','bodyweight','barbell','machine','cable','kettlebell','bands','other'];
// Movement-pattern tags drive injury-aware filtering in the generator
function tagPatterns(name, category, muscle){
  const n = (name || '').toLowerCase();
  const p = new Set();
  if (category === 'plyometrics' || /\b(jump|hop|plyo|box jump|skater|bound|clap)\b/.test(n)) p.add('jumping');
  if (/\b(pistol|sissy|shrimp|jump squat|jumping lunge|box jump)\b/.test(n)) p.add('deep-knee');
  if (/\b(overhead|military|shoulder press|push press|pike|handstand|snatch|jerk|upright row|behind the neck|arnold press)\b/.test(n)) p.add('overhead');
  if (/\b(deadlift|good morning|romanian|stiff[- ]?leg|bent[- ]?over|barbell row|pendlay|clean|hyperextension|back extension|superman)\b/.test(n)) p.add('hinge');
  if (/\b(deadlift|squat|good morning|clean|snatch|barbell row)\b/.test(n)) p.add('spinal-load');
  if (/\b(skull ?crusher|\bdip\b|close[- ]?grip|french press|push[- ]?up|planche|kickback)\b/.test(n)) p.add('elbow-stress');
  return [...p];
}
// Built-in coaching entries → unified schema (these stay the highest-quality records)
const BUILTIN_BANK = [...DUMBBELL_BANK, ...BODYWEIGHT_BANK].map(e => ({
  id: e.id, name: e.name, muscle: e.muscle, muscles: e.muscles ? e.muscles.slice() : [],
  type: e.type, equip: e.equip, difficulty: e.difficulty || 'intermediate',
  how: e.how || '', cue: e.cue || '', alt: e.alt || '', easier: e.easier || '', harder: e.harder || '',
  images: [], category: 'strength', source: 'builtin', patterns: tagPatterns(e.name, 'strength', e.muscle)
}));
// EXERCISE_BANK is mutable: starts as the built-in set, replaced by the aggregate after load.
let EXERCISE_BANK = BUILTIN_BANK.slice();
// ── free-exercise-db adapter (public domain, keyless, CORS via CDN) ──
const FEDB_EQUIP = { 'dumbbell':'dumbbell','barbell':'barbell','e-z curl bar':'barbell','kettlebells':'kettlebell','cable':'cable','machine':'machine','bands':'bands','body only':'bodyweight','medicine ball':'other','exercise ball':'other','foam roll':'other','other':'other' };
const FEDB_MUSCLE = { abdominals:'core', abductors:'glutes', adductors:'quads', biceps:'biceps', calves:'calves', chest:'chest', forearms:'biceps', glutes:'glutes', hamstrings:'hamstrings', lats:'back', 'lower back':'back', 'middle back':'back', neck:'back', quadriceps:'quads', shoulders:'shoulders', traps:'back', triceps:'triceps' };
const FEDB_IMG = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
function normalizeFedb(r){
  if (!r || !r.name) return null;
  const cat = r.category || 'strength';
  if (cat === 'stretching' || cat === 'cardio') return null; // resistance pool only
  const prim = (r.primaryMuscles || []).map(m => FEDB_MUSCLE[m]).filter(Boolean);
  const sec = (r.secondaryMuscles || []).map(m => FEDB_MUSCLE[m]).filter(Boolean);
  const muscle = prim[0] || sec[0];
  if (!muscle) return null;
  const equip = FEDB_EQUIP[r.equipment] || 'other';
  const type = r.mechanic === 'compound' ? 'compound' : r.mechanic === 'isolation' ? 'isolation' : ((r.secondaryMuscles || []).length >= 2 ? 'compound' : 'isolation');
  const difficulty = r.level === 'expert' ? 'advanced' : (r.level || 'intermediate');
  return {
    id: 'fedb_' + (r.id || r.name).replace(/[^a-zA-Z0-9_-]/g, '_'),
    name: r.name, muscle, muscles: [...new Set([...(r.primaryMuscles || []), ...(r.secondaryMuscles || [])])],
    type, equip, difficulty,
    how: (r.instructions || []).join(' '), cue: '', alt: '', easier: '', harder: '',
    images: (r.images || []).map(p => FEDB_IMG + p), category: cat, source: 'free-exercise-db',
    patterns: tagPatterns(r.name, cat, muscle)
  };
}
const FEDB_URLS = [
  'https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/dist/exercises.json',
  'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json'
];
async function fetchJSON(urls){
  for (const u of (Array.isArray(urls) ? urls : [urls])){
    try { const r = await fetch(u, {mode:'cors'}); if (r.ok) return await r.json(); } catch(e) {}
  }
  return null;
}
async function sourceFedb(){
  const raw = await fetchJSON(FEDB_URLS);
  return Array.isArray(raw) ? raw.map(normalizeFedb).filter(Boolean) : [];
}
// Adapter registry — add more sources here (a wger or backend-proxied ExerciseDB adapter
// would slot in the same way and merge automatically).
const DATA_SOURCES = [{ id:'free-exercise-db', label:'free-exercise-db', fetch: sourceFedb }];
// ── merge / dedupe keeping the most complete record ──
function exKey(name){ return (name || '').toLowerCase().replace(/[^a-z0-9]+/g, '').replace(/s$/, ''); }
function completeness(e){
  let s = 0;
  if (e.source === 'builtin') s += 5;
  if (e.cue) s += 2;
  if ((e.how || '').length > 60) s += 1;
  if (e.images && e.images.length) s += 1;
  if (e.equip && e.equip !== 'other') s += 1;
  if (e.difficulty) s += 1;
  return s;
}
function mergeBanks(arrays){
  const map = new Map();
  arrays.forEach(arr => arr.forEach(e => {
    if (!e) return;
    const k = exKey(e.name);
    const cur = map.get(k);
    if (!cur){ map.set(k, e); return; }
    const keep = completeness(e) > completeness(cur) ? e : cur;
    const drop = keep === e ? cur : e;
    if ((!keep.images || !keep.images.length) && drop.images && drop.images.length) keep.images = drop.images;
    if (!keep.cue && drop.cue) keep.cue = drop.cue;
    map.set(k, keep);
  }));
  return [...map.values()];
}
// ── IndexedDB cache ──
function idbOpen(){
  return new Promise((res, rej) => {
    const req = indexedDB.open('golden_era', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('kv');
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}
async function idbGet(key){
  try { const db = await idbOpen(); return await new Promise((res, rej) => { const t = db.transaction('kv','readonly').objectStore('kv').get(key); t.onsuccess = () => res(t.result); t.onerror = () => rej(t.error); }); }
  catch(e){ return null; }
}
async function idbSet(key, val){
  try { const db = await idbOpen(); return await new Promise((res, rej) => { const t = db.transaction('kv','readwrite').objectStore('kv').put(val, key); t.onsuccess = () => res(true); t.onerror = () => rej(t.error); }); }
  catch(e){ return false; }
}
// ── orchestrator ──
const DATA = { status:'idle', count: BUILTIN_BANK.length, sources:['builtin'], ts:0, loading:false };
const DATA_TTL = 7 * 24 * 60 * 60 * 1000;
async function loadExerciseData(opts){
  opts = opts || {};
  if (DATA.loading) return;
  DATA.loading = true;
  try {
    if (!opts.force){
      const cached = await idbGet('exercises_v2');
      if (cached && cached.data && cached.data.length){
        EXERCISE_BANK = cached.data;
        DATA.status = 'cached'; DATA.count = cached.data.length; DATA.sources = cached.sources || ['builtin']; DATA.ts = cached.ts || 0;
        afterDataLoaded();
        if (Date.now() - (cached.ts || 0) < DATA_TTL){ DATA.loading = false; return; }
      }
    }
    DATA.status = 'loading'; renderDataStatus();
    const arrays = [BUILTIN_BANK];
    const used = ['builtin'];
    for (const src of DATA_SOURCES){
      const got = await src.fetch();
      if (got && got.length){ arrays.push(got); used.push(src.id); }
    }
    const fetchedAny = used.length > 1;
    const merged = mergeBanks(arrays);
    EXERCISE_BANK = merged;
    DATA.status = fetchedAny ? 'online' : (EXERCISE_BANK.length > BUILTIN_BANK.length ? 'cached' : 'offline');
    DATA.count = merged.length; DATA.sources = used; DATA.ts = Date.now();
    if (fetchedAny) await idbSet('exercises_v2', { data: merged, sources: used, ts: DATA.ts });
    afterDataLoaded();
  } catch(e){
    DATA.status = 'offline'; afterDataLoaded();
  } finally { DATA.loading = false; }
}
function afterDataLoaded(){
  renderDataStatus();
  if (currentScreen === 'bank') renderBank();
  if (currentScreen === 'random') renderGenEquip();
}
function refreshExerciseData(){ showToast('Syncing exercise data…', ''); loadExerciseData({ force:true }); }
function renderDataStatus(){
  const el = document.getElementById('dataStatus');
  if (!el) return;
  const map = { idle:'built-in only', loading:'syncing…', online:'synced from the web', cached:'cached', offline:'offline — built-in only' };
  const when = (DATA.ts && DATA.status !== 'loading') ? ' · ' + new Date(DATA.ts).toLocaleDateString() : '';
  const srcs = DATA.sources && DATA.sources.length > 1 ? DATA.sources.join(' + ') : 'built-in';
  el.innerHTML = `<span class="ds-dot ds-${DATA.status}"></span><span class="ds-text">${EXERCISE_BANK.length} exercises · ${map[DATA.status] || ''}${when}<br><span class="ds-src">sources: ${esc(srcs)}</span></span><button class="btn btn-ghost btn-sm ds-btn" onclick="refreshExerciseData()" ${DATA.status==='loading'?'disabled':''}>↻ Sync</button>`;
}
function presentEquip(){
  const set = new Set(EXERCISE_BANK.map(e => e.equip));
  return EQUIP_ORDER.filter(id => set.has(id));
}
// ─────────────────────────────────────────────
// ARNOLD PROGRAM DATA
// ─────────────────────────────────────────────
const ARNOLD_PROGRAM = {
  id: 'arnold_golden_era',
  name: 'The Golden Era Program',
  meta: '6-day · Arnold-inspired · antagonist supersets',
  desc: 'Arnold-inspired 6-day hypertrophy split built on antagonist supersets, pyramid loading, and mind-muscle connection.',
  locked: true,
  days: [
    {
      name: 'Chest + Back',
      shortName: 'Mon · Thu',
      warmup: ['Arm circles — 30 sec forward, 30 sec back','Light dumbbell rear delt flyes (10 lbs) — 2 × 15','Cat-cow — 10 reps slow','Light dumbbell bench press (20 lbs) — 1 × 15'],
      blocks: [
        {tag:'Block A · Superset',title:'Primary Compound Pair',rest:'90 sec after A2',exercises:[
          {id:'bench',label:'A1',name:'Dumbbell Bench Press',muscle:'Chest · Primary',sets:[{reps:'12',weight:'35 lbs',rpe:'7'},{reps:'10',weight:'40 lbs',rpe:'8'},{reps:'8',weight:'45 lbs',rpe:'8–9'},{reps:'6',weight:'45 lbs',rpe:'9'}],note:'Wide grip. Lower until full chest stretch. Squeeze pecs at top.',alt:'Dumbbell Floor Press'},
          {superset:true},
          {id:'row',label:'A2',name:'Dumbbell Bent-Over Row',muscle:'Back · Lats',sets:[{reps:'12',weight:'40 lbs',rpe:'7'},{reps:'10',weight:'40 lbs',rpe:'8'},{reps:'10',weight:'40 lbs',rpe:'8'},{reps:'10',weight:'40 lbs',rpe:'8'}],note:'Hinge to 45°, pull to lower chest, squeeze lat 1 second at top.',alt:'Chest-Supported Row'},
        ]},
        {tag:'Block B · Superset',title:'Upper Chest + Lat Width',rest:'90 sec after B2',exercises:[
          {id:'incline',label:'B1',name:'Incline Dumbbell Press',muscle:'Upper Chest',sets:[{reps:'12',weight:'30 lbs',rpe:'7'},{reps:'10',weight:'35 lbs',rpe:'8'},{reps:'10',weight:'35 lbs',rpe:'8'},{reps:'8',weight:'35 lbs',rpe:'8–9'}],note:'30–45° bench. Drive through upper chest.',alt:'Incline Dumbbell Flyes'},
          {superset:true},
          {id:'pullover',label:'B2',name:'Dumbbell Pullover',muscle:'Lats · Chest',sets:[{reps:'12',weight:'25 lbs',rpe:'7–8'},{reps:'12',weight:'25 lbs',rpe:'7–8'},{reps:'12',weight:'25 lbs',rpe:'7–8'},{reps:'12',weight:'25 lbs',rpe:'7–8'}],note:'Arnold\'s forgotten gem. Feel the rib cage stretch.',alt:'Single-Arm Pullover'},
        ]},
        {tag:'Block C · Superset',title:'Isolation Finishers',rest:'60 sec after C2',exercises:[
          {id:'flyes',label:'C1',name:'Dumbbell Chest Flyes',muscle:'Chest Width',sets:[{reps:'12–15',weight:'20 lbs',rpe:'7'},{reps:'12–15',weight:'20 lbs',rpe:'7'},{reps:'12–15',weight:'20 lbs',rpe:'7'}],note:'Deep stretch at bottom. Squeeze at top. Ego kills the pump here.',alt:'Floor Flyes'},
          {superset:true},
          {id:'cablepull',label:'C2',name:'Cable Straight-Arm Pulldown',muscle:'Lat Isolation',sets:[{reps:'12–15',weight:'Light stack',rpe:'7–8'},{reps:'12–15',weight:'Light stack',rpe:'7–8'},{reps:'12–15',weight:'Light stack',rpe:'7–8'}],note:'Arms nearly straight. Drive elbows toward hips.',alt:'Single-Arm DB Row 40 lbs'},
        ]},
        {tag:'Block D · Finisher',title:'Lower Chest',rest:'',exercises:[
          {id:'decpush',label:'D',name:'Decline Push-Ups',muscle:'Lower Chest',sets:[{reps:'12–15',weight:'BW',rpe:'9'},{reps:'12–15',weight:'BW',rpe:'9'},{reps:'12–15',weight:'BW',rpe:'9'}],note:'Feet on bench. Your chest should be pumped by now.',alt:'Dips (lean forward)'},
        ]},
      ]
    },
    {
      name: 'Shoulders + Arms',
      shortName: 'Tue · Fri',
      warmup: ['Shoulder rotations — 10 forward, 10 back each arm','Lateral raises (5 lbs) — 2 × 15, very slow','Wrist circles — 30 sec each direction','Light dumbbell curl (10 lbs) — 1 × 15'],
      blocks: [
        {tag:'Block A · Primary',title:'Arnold Press — His Invention',rest:'90 sec between sets',exercises:[
          {id:'arnoldpress',label:'A',name:'Seated Arnold Press',muscle:'Front + Medial Delts',sets:[{reps:'12',weight:'25 lbs',rpe:'7'},{reps:'10',weight:'30 lbs',rpe:'8'},{reps:'8',weight:'30 lbs',rpe:'8–9'},{reps:'8',weight:'30 lbs',rpe:'9'}],note:'Start palms facing you. Rotate outward as you press. More range = more delt.',alt:'Dumbbell Shoulder Press'},
        ]},
        {tag:'Block B · Superset',title:'Lateral + Rear Delt',rest:'60 sec after B2',exercises:[
          {id:'lateral',label:'B1',name:'Dumbbell Lateral Raises',muscle:'Side Delts',sets:[{reps:'12',weight:'12–15 lbs',rpe:'7–8'},{reps:'12',weight:'12–15 lbs',rpe:'7–8'},{reps:'12',weight:'12–15 lbs',rpe:'7–8'},{reps:'12',weight:'12–15 lbs',rpe:'7–8'}],note:'Lead with elbows. 15 lbs is ceiling for now.',alt:'Cable Lateral Raise'},
          {superset:true},
          {id:'reardelt',label:'B2',name:'Bent-Over Rear Delt Flyes',muscle:'Rear Delts',sets:[{reps:'12–15',weight:'10–12 lbs',rpe:'7–8'},{reps:'12–15',weight:'10–12 lbs',rpe:'7–8'},{reps:'12–15',weight:'10–12 lbs',rpe:'7–8'},{reps:'12–15',weight:'10–12 lbs',rpe:'7–8'}],note:'Most neglected head. Hinge at hips, slight elbow bend.',alt:'Seated Rear Delt Raises'},
        ]},
        {tag:'Block C · Superset',title:'Biceps + Triceps — The Arnold Arm Pump',rest:'60 sec after C2',exercises:[
          {id:'curl',label:'C1',name:'Dumbbell Bicep Curl',muscle:'Biceps',sets:[{reps:'12',weight:'25 lbs',rpe:'7'},{reps:'10',weight:'30 lbs',rpe:'8'},{reps:'10',weight:'30 lbs',rpe:'8'},{reps:'10',weight:'30 lbs',rpe:'8'}],note:'No swinging. 3 seconds down. Supinate fully at top.',alt:'Hammer Curl'},
          {superset:true},
          {id:'pushdown',label:'C2',name:'Cable Tricep Pushdown',muscle:'Triceps',sets:[{reps:'12',weight:'Mod. stack',rpe:'8'},{reps:'12',weight:'Mod. stack',rpe:'8'},{reps:'12',weight:'Mod. stack',rpe:'8'},{reps:'12',weight:'Mod. stack',rpe:'8'}],note:'Elbows pinned. Full extension. Alt: Overhead Ext 4×12 @ 30–35 lbs.',alt:'Overhead Tricep Extension 30 lbs'},
        ]},
        {tag:'Block D · Superset',title:'Peak + Long Head Isolation',rest:'60 sec after D2',exercises:[
          {id:'inclinecurl',label:'D1',name:'Incline Dumbbell Curl',muscle:'Bicep Peak',sets:[{reps:'10 ea.',weight:'20 lbs',rpe:'8'},{reps:'10 ea.',weight:'20 lbs',rpe:'8'},{reps:'10 ea.',weight:'20 lbs',rpe:'8'}],note:'Arm hangs behind torso — stretches long head. Arnold\'s secret weapon.',alt:'Cross-Body Curl'},
          {superset:true},
          {id:'skull',label:'D2',name:'Dumbbell Skull Crushers',muscle:'Tricep Long Head',sets:[{reps:'12',weight:'20 lbs ea.',rpe:'8'},{reps:'12',weight:'20 lbs ea.',rpe:'8'},{reps:'12',weight:'20 lbs ea.',rpe:'8'}],note:'Elbows at ceiling throughout. Lower to temples.',alt:'Tate Press'},
        ]},
        {tag:'Block E · Signature',title:'Concentration Curls',rest:'',exercises:[
          {id:'concurl',label:'E',name:'Concentration Curls',muscle:'Bicep Peak · Isolation',sets:[{reps:'12 ea.',weight:'20–25 lbs',rpe:'8–9'},{reps:'12 ea.',weight:'20–25 lbs',rpe:'8–9'},{reps:'12 ea.',weight:'20–25 lbs',rpe:'8–9'}],note:'Elbow braced on thigh. Zero momentum. 1 second squeeze. Leave it all here.',alt:'Zottman Curl'},
        ]},
      ]
    },
    {
      name: 'Legs + Core',
      shortName: 'Wed · Sat',
      warmup: ['Bodyweight squats — 2 × 15, slow and controlled','Hip circles — 10 each direction','Leg swings — 10 forward/back each leg','Glute bridges — 2 × 15, squeeze at top'],
      blocks: [
        {tag:'Block A · Primary',title:'Squat — Non-Negotiable',rest:'90 sec between sets',exercises:[
          {id:'goblet',label:'A',name:'Dumbbell Goblet Squat',muscle:'Quads · Glutes · Core',sets:[{reps:'12',weight:'35 lbs',rpe:'7'},{reps:'10',weight:'45 lbs',rpe:'8'},{reps:'8',weight:'50 lbs',rpe:'8–9'},{reps:'6',weight:'50 lbs',rpe:'9'}],note:'Elbows inside knees at bottom. Drive through heels.',alt:'Dumbbell Sumo Squat'},
        ]},
        {tag:'Block B · Superset',title:'Posterior Chain',rest:'90 sec after B2',exercises:[
          {id:'rdl',label:'B1',name:'Romanian Deadlift (DB)',muscle:'Hamstrings · Glutes',sets:[{reps:'10',weight:'40 lbs ea.',rpe:'8'},{reps:'10',weight:'40 lbs ea.',rpe:'8'},{reps:'10',weight:'40 lbs ea.',rpe:'8'},{reps:'10',weight:'40 lbs ea.',rpe:'8'}],note:'Hip hinge. Feel the hamstring load. Drive hips forward to stand.',alt:'Stiff-Leg Deadlift'},
          {superset:true},
          {id:'lunge',label:'B2',name:'Walking Dumbbell Lunges',muscle:'Quads · Glutes',sets:[{reps:'10 ea.',weight:'25 lbs ea.',rpe:'7–8'},{reps:'10 ea.',weight:'25 lbs ea.',rpe:'7–8'},{reps:'10 ea.',weight:'25 lbs ea.',rpe:'7–8'},{reps:'10 ea.',weight:'25 lbs ea.',rpe:'7–8'}],note:'Full stride, back knee nearly touches floor. Torso upright.',alt:'Reverse Lunge'},
        ]},
        {tag:'Block C · Superset',title:'Glute + Unilateral',rest:'60 sec after C2',exercises:[
          {id:'pullthrough',label:'C1',name:'Cable Pull-Through',muscle:'Glutes · Hamstrings',sets:[{reps:'15',weight:'Light stack',rpe:'7–8'},{reps:'15',weight:'Light stack',rpe:'7–8'},{reps:'15',weight:'Light stack',rpe:'7–8'}],note:'Drive hips through. Hard squeeze at top. Sub: Sumo squat 3×15.',alt:'DB Hip Thrust'},
          {superset:true},
          {id:'stepup',label:'C2',name:'Dumbbell Step-Ups',muscle:'Quads · Glutes',sets:[{reps:'12 ea.',weight:'20–25 lbs ea.',rpe:'7'},{reps:'12 ea.',weight:'20–25 lbs ea.',rpe:'7'},{reps:'12 ea.',weight:'20–25 lbs ea.',rpe:'7'}],note:'Drive through heel of working leg only.',alt:'Curtsy Lunge'},
        ]},
        {tag:'Block D · Calves',title:'Arnold\'s Weak Point Obsession',rest:'',exercises:[
          {id:'calf',label:'D',name:'Dumbbell Calf Raises',muscle:'Gastrocnemius · Soleus',sets:[{reps:'20–25',weight:'40 lbs ea.',rpe:'8'},{reps:'20–25',weight:'40 lbs ea.',rpe:'8'},{reps:'20–25',weight:'40 lbs ea.',rpe:'8'},{reps:'20–25',weight:'40 lbs ea.',rpe:'8'}],note:'Use a step for full range. 1 sec pause at top.',alt:'Single-Leg Calf Raise'},
        ]},
        {tag:'Block E · Core',title:'Arnold Always Finished With Abs',rest:'60 sec between rounds',exercises:[
          {id:'crunch',label:'E1',name:'Crunches',muscle:'Abs',sets:[{reps:'25',weight:'BW',rpe:'8'},{reps:'25',weight:'BW',rpe:'8'},{reps:'25',weight:'BW',rpe:'8'}],note:'No neck pulling. Squeeze abs at top.',alt:'Weighted Crunch'},
          {id:'legraise',label:'E2',name:'Leg Raises',muscle:'Lower Abs',sets:[{reps:'15',weight:'BW',rpe:'8'},{reps:'15',weight:'BW',rpe:'8'},{reps:'15',weight:'BW',rpe:'8'}],note:'Lower back pressed to floor throughout.',alt:'Russian Twist'},
          {id:'plank',label:'E3',name:'Plank',muscle:'Core Stability',sets:[{reps:'40 sec',weight:'BW',rpe:'8'},{reps:'40 sec',weight:'BW',rpe:'8'},{reps:'40 sec',weight:'BW',rpe:'8'}],note:'Squeeze glutes AND brace core. Don\'t let hips sag.',alt:'Renegade Row'},
        ]},
      ]
    }
  ]
};
// ─────────────────────────────────────────────
// MASS & POWER — Ronnie-style powerbuilding (heavy compound + high-volume back-off)
// ─────────────────────────────────────────────
const MASS_POWER = {
  id: 'mass_power',
  name: 'Mass & Power',
  meta: '5-day · powerbuilding · heavy compounds + volume',
  desc: 'Powerbuilding in the mass-monster mould: open every session with a heavy compound, then chase size with high-volume back-off work. Scaled to real working sets.',
  locked: true,
  days: [
    { name: 'Back + Biceps', shortName: 'Day 1', warmup: ["5 min row or incline walk","Band pull-aparts — 2 × 20","Light lat pulldowns — 2 × 15"], blocks: [
      {tag:'Block A · Heavy', title:'Strength Anchor', rest:'2–3 min', exercises:[
        {id:'dl', label:'A', name:"Deadlift", muscle:"Back · Posterior Chain", sets:[{reps:'8',weight:'Moderate',rpe:'7'},{reps:'5',weight:'Heavy',rpe:'8'},{reps:'4',weight:'Heavy',rpe:'9'},{reps:'4',weight:'Heavy',rpe:'9'}], note:"Brace hard, neutral spine, drive the floor away. Leave the ego, keep the form.", alt:"Rack Pull"} ]},
      {tag:'Block B · Volume', title:'Width & Thickness', rest:'90 sec', exercises:[
        {id:'bbrow', label:'B', name:"Barbell Row", muscle:"Back · Thickness", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Hinge to 45°, pull to the waist, squeeze the lats.", alt:"Pendlay Row"},
        {id:'pulldown', label:'C', name:"Lat Pulldown", muscle:"Back · Width", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Lead with the elbows, full stretch up top — chase the V-taper.", alt:"Pull-Up"} ]},
      {tag:'Block C · Arms', title:'Biceps', rest:'60 sec', exercises:[
        {id:'bbcurl', label:'D', name:"Barbell Curl", muscle:"Biceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Strict, no swing. Back work pre-fatigued them, so respect the load.", alt:"EZ-Bar Curl"},
        {id:'hammer', label:'E', name:"Hammer Curl", muscle:"Biceps · Brachialis", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Neutral grip for thickness. Last set, drop and rep to failure.", alt:"Incline Dumbbell Curl"} ]},
      {tag:'Block D · Back Volume', title:'Lats & Mid-Back', rest:'75 sec', exercises:[
        {id:'csrow', label:'F', name:"Chest-Supported Row", muscle:"Back · Mid", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Chest pinned to the pad, pause and squeeze the mid-back each rep.", alt:"Seated Cable Row"},
        {id:'strarm', label:'G', name:"Straight-Arm Pulldown", muscle:"Lats · Isolation", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Arms nearly straight, drive the bar to the thighs with the lats.", alt:"Dumbbell Pullover"} ]} ] },
    { name: 'Legs', shortName: 'Day 2', warmup: ["5 min bike","Bodyweight squats — 2 × 15","Leg swings — 10 each way","Walking lunges — 1 × 10"], blocks: [
      {tag:'Block A · Heavy', title:'Squat', rest:'2–3 min', exercises:[
        {id:'squat', label:'A', name:"Back Squat", muscle:"Quads · Glutes", sets:[{reps:'8',weight:'Moderate',rpe:'7'},{reps:'6',weight:'Heavy',rpe:'8'},{reps:'5',weight:'Heavy',rpe:'9'},{reps:'5',weight:'Heavy',rpe:'9'}], note:"Chest up, knees track over toes, drive through mid-foot.", alt:"Dumbbell Goblet Squat"} ]},
      {tag:'Block B · Volume', title:'Quads + Posterior', rest:'90 sec', exercises:[
        {id:'legpress', label:'B', name:"Leg Press", muscle:"Quads", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Controlled depth, no locking out hard at the top.", alt:"Hack Squat"},
        {id:'rdl', label:'C', name:"Romanian Deadlift", muscle:"Hamstrings · Glutes", sets:[{reps:'10',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Moderate',rpe:'8'}], note:"Push the hips back, feel the hamstring stretch, flat back.", alt:"Lying Leg Curl"} ]},
      {tag:'Block C · Finisher', title:'Calves', rest:'45 sec', exercises:[
        {id:'calf', label:'D', name:"Standing Calf Raise", muscle:"Calves", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'8'},{reps:'20',weight:'Moderate',rpe:'9'}], note:"Full stretch at the bottom, hard squeeze and pause at the top.", alt:"Seated Calf Raise"} ]},
      {tag:'Block D · Leg Volume', title:'Quads & Hamstrings', rest:'75 sec', exercises:[
        {id:'legext', label:'E', name:"Leg Extension", muscle:"Quads · Isolation", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Pause and squeeze the quads hard at the top of every rep.", alt:"Dumbbell Step-Ups"},
        {id:'legcurl', label:'F', name:"Lying Leg Curl", muscle:"Hamstrings", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Slow negative, full squeeze — point the toes to bias the hams.", alt:"Romanian Deadlift"},
        {id:'wlunge', label:'G', name:"Walking Lunge", muscle:"Quads · Glutes", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Long stride, upright torso, drive through the front heel.", alt:"Reverse Lunge"} ]} ] },
    { name: 'Chest + Triceps', shortName: 'Day 3', warmup: ["Arm circles — 30 sec each way","Band pull-aparts — 2 × 20","Light push-ups — 1 × 15"], blocks: [
      {tag:'Block A · Heavy', title:'Bench', rest:'2–3 min', exercises:[
        {id:'bench', label:'A', name:"Barbell Bench Press", muscle:"Chest · Primary", sets:[{reps:'8',weight:'Moderate',rpe:'7'},{reps:'6',weight:'Heavy',rpe:'8'},{reps:'5',weight:'Heavy',rpe:'9'},{reps:'5',weight:'Heavy',rpe:'9'}], note:"Retract the shoulder blades, controlled descent, drive evenly.", alt:"Dumbbell Bench Press"} ]},
      {tag:'Block B · Volume', title:'Upper Chest + Flye', rest:'90 sec', exercises:[
        {id:'incdb', label:'B', name:"Incline Dumbbell Press", muscle:"Upper Chest", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"30–45° bench, press through the upper chest.", alt:"Incline Barbell Press"},
        {id:'fly', label:'C', name:"Cable Fly", muscle:"Chest · Stretch", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Big stretch, squeeze the pecs together at the front.", alt:"Dumbbell Chest Flyes"} ]},
      {tag:'Block C · Triceps', title:'Triceps', rest:'60 sec', exercises:[
        {id:'cgbench', label:'D', name:"Close-Grip Bench Press", muscle:"Triceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Elbows tucked, push with the triceps not the chest.", alt:"Dumbbell Skull Crushers"},
        {id:'pushdown', label:'E', name:"Rope Pushdown", muscle:"Triceps · Lateral", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Elbows pinned, full lockout, spread the rope at the bottom.", alt:"Overhead Tricep Extension"} ]},
      {tag:'Block D · Chest & Tri Volume', title:'Finishers', rest:'75 sec', exercises:[
        {id:'dip', label:'F', name:"Chest Dip", muscle:"Lower Chest", sets:[{reps:'12',weight:'BW',rpe:'8'},{reps:'12',weight:'BW',rpe:'8'},{reps:'10',weight:'BW',rpe:'9'},{reps:'10',weight:'BW',rpe:'9'}], note:"Lean forward to bias the lower chest; add weight once you clear 12.", alt:"Decline Push-Ups"},
        {id:'skull', label:'G', name:"Skull Crusher", muscle:"Triceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Elbows pointing at the ceiling, lower to the forehead, no flare.", alt:"Overhead Tricep Extension"} ]} ] },
    { name: 'Shoulders + Traps', shortName: 'Day 4', warmup: ["Shoulder rotations — 10 each way","Light lateral raises — 2 × 15","Band face pulls — 2 × 15"], blocks: [
      {tag:'Block A · Heavy', title:'Overhead Press', rest:'2 min', exercises:[
        {id:'ohp', label:'A', name:"Overhead Press", muscle:"Front + Medial Delts", sets:[{reps:'8',weight:'Moderate',rpe:'7'},{reps:'6',weight:'Heavy',rpe:'8'},{reps:'5',weight:'Heavy',rpe:'9'}], note:"Brace the core, press in a straight line, no excessive lean.", alt:"Seated Dumbbell Press"} ]},
      {tag:'Block B · Volume', title:'Side + Rear Delts', rest:'60 sec', exercises:[
        {id:'latraise', label:'B', name:"Dumbbell Lateral Raise", muscle:"Side Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'}], note:"Lead with the elbows, control the lower — width comes from these.", alt:"Cable Lateral Raise"},
        {id:'reardelt', label:'C', name:"Rear Delt Flye", muscle:"Rear Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'}], note:"The most neglected head — slow and squeeze, no momentum.", alt:"Seated Rear Delt Raises"} ]},
      {tag:'Block C · Traps', title:'Traps', rest:'60 sec', exercises:[
        {id:'shrug', label:'D', name:"Barbell Shrug", muscle:"Traps", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Straight up to the ears, pause, no rolling.", alt:"Dumbbell Shrugs"} ]},
      {tag:'Block D · More Delts', title:'Press & Width', rest:'60 sec', exercises:[
        {id:'arnold', label:'E', name:"Arnold Press", muscle:"Front + Medial Delts", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Rotate from palms-in to palms-forward — extra range hits front and side.", alt:"Seated Dumbbell Press"},
        {id:'upright', label:'F', name:"Upright Row", muscle:"Side Delts · Traps", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Lead with the elbows, keep it to upper-chest height to spare the shoulders.", alt:"Dumbbell Upright Row"} ]} ] },
    { name: 'Arms', shortName: 'Day 5', warmup: ["Light curls — 2 × 15","Band pushdowns — 2 × 20","Wrist circles — 30 sec"], blocks: [
      {tag:'Block A · Biceps', title:'Biceps Volume', rest:'60 sec', exercises:[
        {id:'ezcurl', label:'A', name:"EZ-Bar Curl", muscle:"Biceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Strict, full range, squeeze at the top.", alt:"Barbell Curl"},
        {id:'inccurl', label:'B', name:"Incline Dumbbell Curl", muscle:"Biceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Arm hangs behind the torso for the stretch — the peak builder.", alt:"Concentration Curls"} ]},
      {tag:'Block B · Triceps', title:'Triceps Volume', rest:'60 sec', exercises:[
        {id:'skull', label:'C', name:"Skull Crusher", muscle:"Triceps · Long Head", sets:[{reps:'10',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Moderate',rpe:'9'}], note:"Elbows pointing at the ceiling, lower to the forehead.", alt:"Overhead Tricep Extension"},
        {id:'ohext', label:'D', name:"Overhead Cable Extension", muscle:"Triceps · Long Head", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Keep the elbows close to the ears, full stretch overhead.", alt:"Rope Pushdown"} ]},
      {tag:'Block C · More Arms', title:'Bi/Tri Volume', rest:'60 sec', exercises:[
        {id:'hammer', label:'E', name:"Hammer Curl", muscle:"Biceps · Brachialis", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Neutral grip for arm thickness; squeeze and control the lowering.", alt:"Cross-Body Curl"},
        {id:'cgbench', label:'F', name:"Close-Grip Bench Press", muscle:"Triceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Elbows tucked, drive with the triceps — your heaviest arm movement.", alt:"Dumbbell Skull Crushers"} ]} ] }
  ]
};
// ─────────────────────────────────────────────
// THE OLYMPIA SPLIT — Jay-style one-body-part-per-day, many angles, short rest
// ─────────────────────────────────────────────
const OLYMPIA_SPLIT = {
  id: 'olympia_split',
  name: 'The Olympia Split',
  meta: '5-day · one body part a day · high volume',
  desc: 'One body part a day, attacked from every angle with short 45–60s rests and high volume. Train abs after two or three of these sessions.',
  locked: true,
  days: [
    { name: 'Chest', shortName: 'Day 1', warmup: ["Arm circles — 30 sec each way","Band pull-aparts — 2 × 20","Light push-ups — 1 × 15"], blocks: [
      {tag:'Block · Volume', title:'Chest From Every Angle', rest:'45–60 sec', exercises:[
        {id:'incbb', label:'A', name:"Incline Barbell Press", muscle:"Upper Chest", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Start with incline — upper chest is the priority for a full look.", alt:"Incline Dumbbell Press"},
        {id:'flatdb', label:'B', name:"Flat Dumbbell Press", muscle:"Chest · Mid", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Deep stretch at the bottom, press up and slightly in.", alt:"Barbell Bench Press"},
        {id:'dip', label:'C', name:"Chest Dip", muscle:"Lower Chest", sets:[{reps:'12',weight:'BW',rpe:'8'},{reps:'12',weight:'BW',rpe:'8'},{reps:'10',weight:'BW',rpe:'9'}], note:"Lean forward to bias the lower chest.", alt:"Decline Push-Ups"},
        {id:'crossover', label:'D', name:"Cable Crossover", muscle:"Chest · Squeeze", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Cross the hands over at the front for a hard inner-chest squeeze.", alt:"Pec Deck"} ]},
      {tag:'Block · More Chest', title:'Press & Stretch', rest:'45–60 sec', exercises:[
        {id:'bench', label:'E', name:"Barbell Bench Press", muscle:"Chest · Mid", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"A flat press to finish thickness work after the incline focus.", alt:"Dumbbell Bench Press"},
        {id:'pushup', label:'F', name:"Push-Up", muscle:"Chest · Finisher", sets:[{reps:'15',weight:'BW',rpe:'8'},{reps:'15',weight:'BW',rpe:'8'},{reps:'12',weight:'BW',rpe:'9'},{reps:'12',weight:'BW',rpe:'9'}], note:"Bodyweight burnout — chase the pump, full lockout each rep.", alt:"Decline Push-Ups"} ]} ] },
    { name: 'Back', shortName: 'Day 2', warmup: ["5 min row","Band pull-aparts — 2 × 20","Light pulldowns — 2 × 15"], blocks: [
      {tag:'Block · Volume', title:'Width Then Thickness', rest:'45–60 sec', exercises:[
        {id:'pulldown', label:'A', name:"Lat Pulldown", muscle:"Back · Width", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Open with width work — drive the elbows down and back.", alt:"Pull-Up"},
        {id:'bbrow', label:'B', name:"Barbell Row", muscle:"Back · Thickness", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Pull to the waist, squeeze the mid-back hard.", alt:"Pendlay Row"},
        {id:'dbrow', label:'C', name:"Single-Arm Dumbbell Row", muscle:"Back · Lats", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Full stretch at the bottom, elbow to the hip at the top.", alt:"Chest-Supported Row"},
        {id:'strarm', label:'D', name:"Straight-Arm Pulldown", muscle:"Lats · Isolation", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Arms nearly straight, drive the bar to the thighs with the lats.", alt:"Dumbbell Pullover"} ]},
      {tag:'Block · More Back', title:'Posterior & Traps', rest:'45–60 sec', exercises:[
        {id:'dl', label:'E', name:"Deadlift", muscle:"Back · Posterior Chain", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Heavy, clean pulls — thickness from the floor up.", alt:"Rack Pull"},
        {id:'cablerow', label:'F', name:"Seated Cable Row", muscle:"Back · Mid", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Drive the elbows back, pause and squeeze the mid-back.", alt:"Chest-Supported Row"},
        {id:'shrug', label:'G', name:"Barbell Shrug", muscle:"Traps", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'9'},{reps:'15',weight:'Heavy',rpe:'9'}], note:"Straight up, pause at the top, no rolling.", alt:"Dumbbell Shrugs"} ]} ] },
    { name: 'Shoulders', shortName: 'Day 3', warmup: ["Shoulder rotations — 10 each way","Light lateral raises — 2 × 15","Band face pulls — 2 × 15"], blocks: [
      {tag:'Block · Volume', title:'All Three Heads', rest:'45–60 sec', exercises:[
        {id:'dbpress', label:'A', name:"Seated Dumbbell Press", muscle:"Front + Medial Delts", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Press to just short of lockout to keep tension on the delts.", alt:"Arnold Press"},
        {id:'latraise', label:'B', name:"Dumbbell Lateral Raise", muscle:"Side Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'}], note:"Width maker — lead with the elbows, control the lowering.", alt:"Cable Lateral Raise"},
        {id:'reardelt', label:'C', name:"Rear Delt Flye", muscle:"Rear Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'}], note:"Slight elbow bend, squeeze the rear delts, no swinging.", alt:"Seated Rear Delt Raises"},
        {id:'shrug', label:'D', name:"Dumbbell Shrug", muscle:"Traps", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'9'}], note:"Straight up, pause at the top, no rolling.", alt:"Barbell Shrug"} ]},
      {tag:'Block · More Delts', title:'Press & Side', rest:'45–60 sec', exercises:[
        {id:'arnold', label:'E', name:"Arnold Press", muscle:"Front + Medial Delts", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Rotate palms-in to palms-forward for extra front-and-side range.", alt:"Seated Dumbbell Press"},
        {id:'upright', label:'F', name:"Upright Row", muscle:"Side Delts · Traps", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Lead with the elbows, stop at upper-chest height to spare the shoulders.", alt:"Dumbbell Upright Row"} ]} ] },
    { name: 'Legs', shortName: 'Day 4', warmup: ["5 min bike","Bodyweight squats — 2 × 15","Leg swings — 10 each way"], blocks: [
      {tag:'Block · Volume', title:'Quads, Hams & Calves', rest:'60–90 sec', exercises:[
        {id:'squat', label:'A', name:"Back Squat", muscle:"Quads · Glutes", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Below parallel if mobility allows, chest tall.", alt:"Dumbbell Goblet Squat"},
        {id:'legpress', label:'B', name:"Leg Press", muscle:"Quads", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Feet mid-platform, controlled depth.", alt:"Hack Squat"},
        {id:'legcurl', label:'C', name:"Lying Leg Curl", muscle:"Hamstrings", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Squeeze the hams, slow on the way back.", alt:"Romanian Deadlift"},
        {id:'calf', label:'D', name:"Standing Calf Raise", muscle:"Calves", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'8'},{reps:'20',weight:'Moderate',rpe:'9'}], note:"Full range, pause at the top every rep.", alt:"Seated Calf Raise"} ]},
      {tag:'Block · More Legs', title:'Quads & Hams', rest:'60–90 sec', exercises:[
        {id:'legext', label:'E', name:"Leg Extension", muscle:"Quads · Isolation", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Pause and squeeze the quads hard at the top.", alt:"Dumbbell Step-Ups"},
        {id:'rdl', label:'F', name:"Romanian Deadlift", muscle:"Hamstrings · Glutes", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Hips back, big hamstring stretch, flat back.", alt:"Lying Leg Curl"},
        {id:'wlunge', label:'G', name:"Walking Lunge", muscle:"Quads · Glutes", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Long stride, drive through the front heel, torso tall.", alt:"Reverse Lunge"} ]} ] },
    { name: 'Arms', shortName: 'Day 5', warmup: ["Light curls — 2 × 15","Band pushdowns — 2 × 20","Wrist circles — 30 sec"], blocks: [
      {tag:'Block · Volume', title:'Biceps & Triceps', rest:'45–60 sec', exercises:[
        {id:'bbcurl', label:'A', name:"Barbell Curl", muscle:"Biceps", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Strict reps, full squeeze at the top.", alt:"EZ-Bar Curl"},
        {id:'pushdown', label:'B', name:"Triceps Pushdown", muscle:"Triceps", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Elbows pinned, full lockout.", alt:"Overhead Tricep Extension"},
        {id:'cablecurl', label:'C', name:"Cable Curl", muscle:"Biceps · Constant Tension", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Cable keeps tension through the whole range.", alt:"Hammer Curl"},
        {id:'ohext', label:'D', name:"Overhead Cable Extension", muscle:"Triceps · Long Head", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Elbows by the ears, big stretch overhead.", alt:"Skull Crusher"} ]},
      {tag:'Block · More Arms', title:'Peak & Long Head', rest:'45–60 sec', exercises:[
        {id:'inccurl', label:'E', name:"Incline Dumbbell Curl", muscle:"Biceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Arm hangs behind the torso — stretches the long head for the peak.", alt:"Concentration Curls"},
        {id:'skull', label:'F', name:"Skull Crusher", muscle:"Triceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Elbows at the ceiling, lower to the forehead, no flare.", alt:"Overhead Tricep Extension"},
        {id:'cgbench', label:'G', name:"Close-Grip Bench Press", muscle:"Triceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Elbows tucked — the heaviest, mass-building triceps movement.", alt:"Dumbbell Skull Crushers"} ]} ] }
  ]
};
// ─────────────────────────────────────────────
// CLASSIC PHYSIQUE PPL — Cbum-style push/pull/legs, heavy + pump, run twice a week
// ─────────────────────────────────────────────
const CLASSIC_PPL = {
  id: 'classic_ppl',
  name: 'Classic Physique PPL',
  meta: '3-day · push/pull/legs · run 2× a week',
  desc: 'Modern push/pull/legs for a proportioned, classic physique. Heavy work first, pump and superset finishers after. Run it twice through the week and swap to the alternatives on the second pass.',
  locked: true,
  days: [
    { name: 'Push', shortName: 'Push', warmup: ["Arm circles — 30 sec each way","Band pull-aparts — 2 × 20","Light push-ups — 1 × 15"], blocks: [
      {tag:'Block A · Heavy', title:'Incline Press', rest:'2 min', exercises:[
        {id:'incbb', label:'A', name:"Incline Barbell Press", muscle:"Upper Chest", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Top set heavy — upper chest leads the classic look.", alt:"Incline Dumbbell Press"} ]},
      {tag:'Block B · Volume', title:'Press + Delts', rest:'90 sec', exercises:[
        {id:'flatdb', label:'B', name:"Flat Dumbbell Press", muscle:"Chest · Mid", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Deep stretch, controlled tempo.", alt:"Barbell Bench Press"},
        {id:'ohp', label:'C', name:"Seated Dumbbell Press", muscle:"Front + Medial Delts", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Press to just short of lockout, keep the delts loaded.", alt:"Arnold Press"} ]},
      {tag:'Block C · Superset', title:'Delt + Chest Pump', rest:'60 sec after C2', exercises:[
        {id:'latraise', label:'C1', name:"Dumbbell Lateral Raise", muscle:"Side Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'},{reps:'15',weight:'Light',rpe:'9'}], note:"Width — the key to the X-frame. Slow lowering.", alt:"Cable Lateral Raise"},
        {superset:true},
        {id:'cablefly', label:'C2', name:"Cable Fly", muscle:"Chest · Squeeze", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Squeeze and hold at the front for the pump.", alt:"Pec Deck"} ]},
      {tag:'Block D · Finisher', title:'Triceps', rest:'60 sec', exercises:[
        {id:'pushdown', label:'D', name:"Rope Pushdown", muscle:"Triceps", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Spread the rope at the bottom, full lockout.", alt:"Overhead Tricep Extension"} ]},
      {tag:'Block E · Chest Pump', title:'Lower Chest Finish', rest:'60 sec', exercises:[
        {id:'dip', label:'E', name:"Chest Dip", muscle:"Lower Chest", sets:[{reps:'12',weight:'BW',rpe:'8'},{reps:'12',weight:'BW',rpe:'9'},{reps:'10',weight:'BW',rpe:'9'}], note:"Lean forward to bias the lower chest; weight up once you clear 12.", alt:"Decline Push-Ups"},
        {id:'pushup', label:'F', name:"Push-Up", muscle:"Chest · Finisher", sets:[{reps:'15',weight:'BW',rpe:'9'},{reps:'15',weight:'BW',rpe:'9'},{reps:'12',weight:'BW',rpe:'10'}], note:"Pump burnout to close the session — full lockout each rep.", alt:"Decline Push-Ups"} ]} ] },
    { name: 'Pull', shortName: 'Pull', warmup: ["5 min row","Band pull-aparts — 2 × 20","Light pulldowns — 2 × 15"], blocks: [
      {tag:'Block A · Heavy', title:'Vertical Pull', rest:'2 min', exercises:[
        {id:'pullup', label:'A', name:"Weighted Pull-Up", muscle:"Back · Width", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Add load if you can clear 8 clean reps; otherwise use the pulldown.", alt:"Lat Pulldown"} ]},
      {tag:'Block B · Volume', title:'Rows', rest:'90 sec', exercises:[
        {id:'bbrow', label:'B', name:"Barbell Row", muscle:"Back · Thickness", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Pull to the waist, squeeze the mid-back.", alt:"Pendlay Row"},
        {id:'csrow', label:'C', name:"Chest-Supported Row", muscle:"Back · Mid", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"No body English — pure back. Pause at the top.", alt:"Seated Cable Row"} ]},
      {tag:'Block C · Superset', title:'Rear Delt + Biceps', rest:'60 sec after C2', exercises:[
        {id:'reardelt', label:'C1', name:"Rear Delt Flye", muscle:"Rear Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'},{reps:'15',weight:'Light',rpe:'9'}], note:"Detail for 3D delts — control over weight.", alt:"Seated Rear Delt Raises"},
        {superset:true},
        {id:'inccurl', label:'C2', name:"Incline Dumbbell Curl", muscle:"Biceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Stretch the long head, strict reps.", alt:"Hammer Curl"} ]},
      {tag:'Block D · More Pull', title:'Posterior & Biceps', rest:'90 sec', exercises:[
        {id:'dl', label:'D', name:"Deadlift", muscle:"Back · Posterior Chain", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Heavy hinge for back thickness — brace and keep a flat spine.", alt:"Rack Pull"},
        {id:'hammer', label:'E', name:"Hammer Curl", muscle:"Biceps · Brachialis", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Neutral grip for thickness under the biceps; control the lowering.", alt:"Cross-Body Curl"} ]} ] },
    { name: 'Legs', shortName: 'Legs', warmup: ["5 min bike","Bodyweight squats — 2 × 15","Leg swings — 10 each way","Glute bridges — 1 × 15"], blocks: [
      {tag:'Block A · Heavy', title:'Squat', rest:'2–3 min', exercises:[
        {id:'squat', label:'A', name:"Back Squat", muscle:"Quads · Glutes", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Sit between the hips, chest tall, full depth.", alt:"Dumbbell Goblet Squat"} ]},
      {tag:'Block B · Volume', title:'Hinge + Lunge', rest:'90 sec', exercises:[
        {id:'rdl', label:'B', name:"Romanian Deadlift", muscle:"Hamstrings · Glutes", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Hips back, hamstring stretch, flat back.", alt:"Lying Leg Curl"},
        {id:'lunge', label:'C', name:"Walking Lunge", muscle:"Quads · Glutes", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Upright torso, drive through the front heel.", alt:"Reverse Lunge"} ]},
      {tag:'Block C · Superset', title:'Quad + Ham Pump', rest:'60 sec after C2', exercises:[
        {id:'legext', label:'C1', name:"Leg Extension", muscle:"Quads · Squeeze", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Pause and squeeze the quads at the top.", alt:"Wall Sit"},
        {superset:true},
        {id:'legcurl', label:'C2', name:"Lying Leg Curl", muscle:"Hamstrings", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'9'}], note:"Controlled negative, full squeeze.", alt:"Sliding Leg Curl"} ]},
      {tag:'Block D · Finisher', title:'Calves', rest:'45 sec', exercises:[
        {id:'calf', label:'D', name:"Seated Calf Raise", muscle:"Calves · Soleus", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'9'},{reps:'20',weight:'Light',rpe:'9'}], note:"Full stretch, pause at the top.", alt:"Standing Calf Raise"} ]},
      {tag:'Block E · More Legs', title:'Quads & Calves', rest:'75 sec', exercises:[
        {id:'legpress', label:'E', name:"Leg Press", muscle:"Quads", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Feet mid-platform, controlled depth, no harsh lockout.", alt:"Hack Squat"},
        {id:'standcalf', label:'F', name:"Standing Calf Raise", muscle:"Calves · Gastroc", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'9'},{reps:'20',weight:'Moderate',rpe:'10'}], note:"Straight-leg raise hits the gastroc — full stretch, pause at the top.", alt:"Single-Leg Calf Raise"} ]} ] }
  ]
};
// ─────────────────────────────────────────────
// OLD-SCHOOL VOLUME — Lee Priest / Flex-style bro split, supersets & drop sets
// ─────────────────────────────────────────────
const OLDSCHOOL_VOLUME = {
  id: 'oldschool_volume',
  name: 'Old-School Volume',
  meta: '5-day · bro split · supersets & drop sets',
  desc: 'One muscle a day, old-school high volume trained by feel, with supersets and drop-set finishers. Heavy at the start, pump to end. Push the working sets, not the warm-ups.',
  locked: true,
  days: [
    { name: 'Chest', shortName: 'Day 1', warmup: ["Arm circles — 30 sec each way","Band pull-aparts — 2 × 20","Light push-ups — 1 × 15"], blocks: [
      {tag:'Block · Heavy → Pump', title:'Chest', rest:'60–90 sec', exercises:[
        {id:'bench', label:'A', name:"Barbell Bench Press", muscle:"Chest · Primary", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Start heavy in the 6–8 range while you are fresh.", alt:"Dumbbell Bench Press"},
        {id:'incdb', label:'B', name:"Incline Dumbbell Press", muscle:"Upper Chest", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Drive through the upper chest, full stretch.", alt:"Incline Barbell Press"},
        {id:'fly', label:'C', name:"Dumbbell Flye", muscle:"Chest · Stretch", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Hug a barrel — big stretch, light weight.", alt:"Cable Fly"},
        {id:'crossover', label:'D', name:"Cable Crossover (drop set)", muscle:"Chest · Finisher", sets:[{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'10'}], note:"Last set: rep to failure, drop the weight, rep again. Chase the pump.", alt:"Push-Ups to failure"} ]},
      {tag:'Block · Chest Volume', title:'Burnout', rest:'45–60 sec', exercises:[
        {id:'dip', label:'E', name:"Chest Dip", muscle:"Lower Chest", sets:[{reps:'12',weight:'BW',rpe:'8'},{reps:'12',weight:'BW',rpe:'8'},{reps:'10',weight:'BW',rpe:'9'},{reps:'10',weight:'BW',rpe:'9'}], note:"Lean forward to load the lower chest; add a belt once you clear 12.", alt:"Decline Push-Ups"},
        {id:'pushup', label:'F', name:"Push-Up", muscle:"Chest · Mid", sets:[{reps:'15',weight:'BW',rpe:'8'},{reps:'15',weight:'BW',rpe:'8'},{reps:'12',weight:'BW',rpe:'9'},{reps:'12',weight:'BW',rpe:'9'}], note:"Strict tempo, full lockout — squeeze the pecs at the top.", alt:"Incline Push-Up"},
        {id:'declpush', label:'G', name:"Decline Push-Ups", muscle:"Upper Chest", sets:[{reps:'15',weight:'BW',rpe:'9'},{reps:'15',weight:'BW',rpe:'9'},{reps:'12',weight:'BW',rpe:'10'}], note:"Feet elevated to bias the upper chest — finish them to failure.", alt:"Pike Push-Up"} ]} ] },
    { name: 'Back', shortName: 'Day 2', warmup: ["5 min row","Band pull-aparts — 2 × 20","Light pulldowns — 2 × 15"], blocks: [
      {tag:'Block · Heavy → Pump', title:'Back', rest:'60–90 sec', exercises:[
        {id:'dl', label:'A', name:"Deadlift", muscle:"Back · Posterior Chain", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'5',weight:'Heavy',rpe:'9'}], note:"Heavy and clean — the foundation of a thick back.", alt:"Rack Pull"},
        {id:'bbrow', label:'B', name:"Bent-Over Row", muscle:"Back · Thickness", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Pull to the waist, squeeze hard.", alt:"Pendlay Row"},
        {id:'pulldown', label:'C', name:"Lat Pulldown", muscle:"Back · Width", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Elbows down and back, full stretch.", alt:"Pull-Up"},
        {id:'strarm', label:'D', name:"Straight-Arm Pulldown (drop set)", muscle:"Lats · Finisher", sets:[{reps:'15',weight:'Moderate',rpe:'9'},{reps:'15',weight:'Light',rpe:'10'}], note:"Last set: drop the weight and keep going to failure.", alt:"Dumbbell Pullover"} ]},
      {tag:'Block · Back Volume', title:'Mid-Back, Traps & Bis', rest:'60 sec', exercises:[
        {id:'cablerow', label:'E', name:"Seated Cable Row", muscle:"Back · Mid", sets:[{reps:'12',weight:'Heavy',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Drive the elbows back, pause and squeeze the mid-back each rep.", alt:"Chest-Supported Row"},
        {id:'shrug', label:'F', name:"Barbell Shrug", muscle:"Traps", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'9'},{reps:'15',weight:'Heavy',rpe:'9'}], note:"Straight up to the ears, pause, no rolling.", alt:"Dumbbell Shrugs"},
        {id:'hammer', label:'G', name:"Hammer Curl", muscle:"Biceps · Brachialis", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'10'}], note:"Finish the pulling muscles with biceps — neutral grip, strict.", alt:"Cross-Body Curl"} ]} ] },
    { name: 'Shoulders', shortName: 'Day 3', warmup: ["Shoulder rotations — 10 each way","Light lateral raises — 2 × 15","Band face pulls — 2 × 15"], blocks: [
      {tag:'Block · Heavy → Pump', title:'Shoulders', rest:'60 sec', exercises:[
        {id:'ohp', label:'A', name:"Overhead Press", muscle:"Front + Medial Delts", sets:[{reps:'8',weight:'Heavy',rpe:'8'},{reps:'6',weight:'Heavy',rpe:'9'},{reps:'6',weight:'Heavy',rpe:'9'}], note:"Heavy press first, strict and braced.", alt:"Seated Dumbbell Press"},
        {id:'latraise', label:'B', name:"Lateral Raise (drop set)", muscle:"Side Delts", sets:[{reps:'12',weight:'Light',rpe:'9'},{reps:'12',weight:'Light',rpe:'9'},{reps:'15',weight:'Light',rpe:'10'}], note:"Last set: triple drop — go light and chase the burn.", alt:"Cable Lateral Raise"},
        {id:'reardelt', label:'C', name:"Rear Delt Flye", muscle:"Rear Delts", sets:[{reps:'15',weight:'Light',rpe:'8'},{reps:'15',weight:'Light',rpe:'9'}], note:"Slow and controlled, squeeze the rear delts.", alt:"Seated Rear Delt Raises"},
        {id:'shrug', label:'D', name:"Dumbbell Shrug", muscle:"Traps", sets:[{reps:'15',weight:'Heavy',rpe:'8'},{reps:'15',weight:'Heavy',rpe:'9'}], note:"Straight up, pause, no rolling.", alt:"Barbell Shrug"} ]},
      {tag:'Block · Delt Volume', title:'Press & Detail', rest:'60 sec', exercises:[
        {id:'arnold', label:'E', name:"Arnold Press", muscle:"Front + Medial Delts", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Rotate palms-in to palms-forward for extra front-and-side range.", alt:"Seated Dumbbell Press"},
        {id:'upright', label:'F', name:"Upright Row", muscle:"Side Delts · Traps", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Lead with the elbows; stop at upper-chest height to spare the joint.", alt:"Dumbbell Upright Row"},
        {id:'frontraise', label:'G', name:"Front Raise", muscle:"Front Delts", sets:[{reps:'15',weight:'Light',rpe:'9'},{reps:'15',weight:'Light',rpe:'10'}], note:"Controlled, no swing — finish the front delts to the burn.", alt:"Arnold Press"} ]} ] },
    { name: 'Arms', shortName: 'Day 4', warmup: ["Light curls — 2 × 15","Band pushdowns — 2 × 20","Wrist circles — 30 sec"], blocks: [
      {tag:'Block A · Superset', title:'Bi/Tri Superset', rest:'60 sec after A2', exercises:[
        {id:'bbcurl', label:'A1', name:"Barbell Curl", muscle:"Biceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Pair opposing arms back-to-back — the old-school arm pump.", alt:"EZ-Bar Curl"},
        {superset:true},
        {id:'cgbench', label:'A2', name:"Close-Grip Bench Press", muscle:"Triceps", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Elbows tucked, drive with the triceps.", alt:"Dumbbell Skull Crushers"} ]},
      {tag:'Block B · Superset', title:'Peak + Long Head', rest:'60 sec after B2', exercises:[
        {id:'inccurl', label:'B1', name:"Incline Dumbbell Curl", muscle:"Biceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Stretch the long head behind the torso.", alt:"Concentration Curls"},
        {superset:true},
        {id:'ohext', label:'B2', name:"Overhead Cable Extension", muscle:"Triceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Elbows by the ears, full overhead stretch.", alt:"Rope Pushdown"} ]},
      {tag:'Block C · Finisher', title:'Pump Out', rest:'45 sec', exercises:[
        {id:'concurl', label:'C', name:"Concentration Curl (drop set)", muscle:"Biceps · Peak", sets:[{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Light',rpe:'10'}], note:"Last set: drop and squeeze to failure. Leave it all here.", alt:"Cable Curl"} ]},
      {tag:'Block D · More Arms', title:'Thickness', rest:'60 sec', exercises:[
        {id:'hammer', label:'D', name:"Hammer Curl", muscle:"Biceps · Brachialis", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Heavy',rpe:'9'},{reps:'10',weight:'Heavy',rpe:'9'}], note:"Neutral grip builds the brachialis and pushes the peak up.", alt:"Cross-Body Curl"},
        {id:'skull', label:'E', name:"Skull Crusher", muscle:"Triceps · Long Head", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'}], note:"Elbows at the ceiling, lower to the forehead — the long-head builder.", alt:"Overhead Tricep Extension"} ]} ] },
    { name: 'Legs', shortName: 'Day 5', warmup: ["5 min bike","Bodyweight squats — 2 × 15","Leg swings — 10 each way","Walking lunges — 1 × 10"], blocks: [
      {tag:'Block · Heavy → Pump', title:'Legs', rest:'90 sec', exercises:[
        {id:'squat', label:'A', name:"Back Squat", muscle:"Quads · Glutes", sets:[{reps:'10',weight:'Heavy',rpe:'8'},{reps:'8',weight:'Heavy',rpe:'9'},{reps:'8',weight:'Heavy',rpe:'9'}], note:"Old-school high-rep squats — grind them out with good form.", alt:"Dumbbell Goblet Squat"},
        {id:'legpress', label:'B', name:"Leg Press (drop set)", muscle:"Quads", sets:[{reps:'15',weight:'Heavy',rpe:'9'},{reps:'15',weight:'Moderate',rpe:'10'}], note:"Last set: strip a plate each side and keep pressing.", alt:"Hack Squat"},
        {id:'rdl', label:'C', name:"Romanian Deadlift", muscle:"Hamstrings · Glutes", sets:[{reps:'10',weight:'Moderate',rpe:'8'},{reps:'10',weight:'Moderate',rpe:'9'}], note:"Hips back, feel the hamstrings load.", alt:"Lying Leg Curl"},
        {id:'calf', label:'D', name:"Standing Calf Raise", muscle:"Calves", sets:[{reps:'20',weight:'Moderate',rpe:'9'},{reps:'20',weight:'Moderate',rpe:'9'},{reps:'20',weight:'Moderate',rpe:'10'}], note:"High reps, full stretch, pause at the top.", alt:"Seated Calf Raise"} ]},
      {tag:'Block · Leg Volume', title:'Quads & Hams', rest:'75 sec', exercises:[
        {id:'legext', label:'E', name:"Leg Extension", muscle:"Quads · Isolation", sets:[{reps:'15',weight:'Moderate',rpe:'8'},{reps:'15',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Pause and squeeze the quads hard at the top of every rep.", alt:"Dumbbell Step-Ups"},
        {id:'legcurl', label:'F', name:"Lying Leg Curl", muscle:"Hamstrings", sets:[{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Moderate',rpe:'8'},{reps:'12',weight:'Heavy',rpe:'9'},{reps:'12',weight:'Heavy',rpe:'9'}], note:"Slow negative, full squeeze; point the toes to bias the hams.", alt:"Sliding Leg Curl"},
        {id:'wlunge', label:'G', name:"Walking Lunge", muscle:"Quads · Glutes", sets:[{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'9'},{reps:'12',weight:'Moderate',rpe:'10'}], note:"Long stride, drive through the front heel, torso tall.", alt:"Reverse Lunge"} ]} ] }
  ]
};
// Built-in program registry (the Programs screen renders these in order)
const BUILTIN_PROGRAMS = [ARNOLD_PROGRAM, MASS_POWER, OLYMPIA_SPLIT, CLASSIC_PPL, OLDSCHOOL_VOLUME];
// ── PROGRAM VARIANTS ──
// Each built-in has two versions, swapped at render time via a central name map.
// The 4 full-equipment programs get an Original ⇄ Dumbbell-only toggle; Golden Era
// (already dumbbell) gets the reverse: Dumbbell ⇄ Barbell. Each variant is its own
// id ('mass_power' vs 'mass_power#1') so they track history/PRs separately.
ARNOLD_PROGRAM.variants = ['Dumbbell','Barbell']; ARNOLD_PROGRAM.swapKind = 'toBB';
[MASS_POWER, OLYMPIA_SPLIT, CLASSIC_PPL, OLDSCHOOL_VOLUME].forEach(p => { p.variants = ['Original','Dumbbell']; p.swapKind = 'toDB'; });
const SWAP_MAPS = {
  toDB: {
    'Deadlift':'Dumbbell Romanian Deadlift', 'Barbell Row':'Dumbbell Bent-Over Row', 'Bent-Over Row':'Dumbbell Bent-Over Row',
    'Lat Pulldown':'Single-Arm Dumbbell Row', 'Weighted Pull-Up':'Single-Arm Dumbbell Row', 'Seated Cable Row':'Chest-Supported Dumbbell Row',
    'Cable Row':'Chest-Supported Dumbbell Row', 'Chest-Supported Row':'Chest-Supported Dumbbell Row', 'Straight-Arm Pulldown':'Dumbbell Pullover',
    'Barbell Curl':'Dumbbell Bicep Curl', 'EZ-Bar Curl':'Dumbbell Bicep Curl', 'Cable Curl':'Hammer Curl',
    'Back Squat':'Dumbbell Goblet Squat', 'Leg Press':'Dumbbell Bulgarian Split Squat', 'Leg Extension':'Dumbbell Step-Ups',
    'Lying Leg Curl':'Dumbbell Stiff-Leg Deadlift', 'Romanian Deadlift':'Dumbbell Romanian Deadlift',
    'Standing Calf Raise':'Dumbbell Calf Raises', 'Seated Calf Raise':'Seated Dumbbell Calf Raise',
    'Barbell Bench Press':'Dumbbell Bench Press', 'Incline Barbell Press':'Incline Dumbbell Press',
    'Cable Fly':'Dumbbell Flye', 'Cable Crossover':'Dumbbell Flye', 'Chest Dip':'Decline Dumbbell Press',
    'Close-Grip Bench Press':'Close-Grip Dumbbell Press', 'Rope Pushdown':'Overhead Dumbbell Extension',
    'Triceps Pushdown':'Overhead Dumbbell Extension', 'Overhead Cable Extension':'Overhead Dumbbell Extension',
    'Skull Crusher':'Dumbbell Skull Crushers', 'Overhead Press':'Seated Dumbbell Press', 'Barbell Shrug':'Dumbbell Shrug',
    'Upright Row':'Dumbbell Upright Row', 'Lateral Raise':'Dumbbell Lateral Raise', 'Walking Lunge':'Walking Dumbbell Lunges'
  },
  toBB: {
    'Dumbbell Bench Press':'Barbell Bench Press', 'Dumbbell Bent-Over Row':'Barbell Row', 'Incline Dumbbell Press':'Incline Barbell Press',
    'Dumbbell Pullover':'Straight-Arm Pulldown', 'Dumbbell Chest Flyes':'Cable Fly', 'Decline Push-Ups':'Chest Dip',
    'Seated Arnold Press':'Barbell Overhead Press', 'Dumbbell Lateral Raises':'Cable Lateral Raise', 'Bent-Over Rear Delt Flyes':'Reverse Pec Deck',
    'Dumbbell Bicep Curl':'Barbell Curl', 'Incline Dumbbell Curl':'EZ-Bar Curl', 'Dumbbell Skull Crushers':'EZ-Bar Skull Crusher',
    'Concentration Curls':'Cable Curl', 'Dumbbell Goblet Squat':'Back Squat', 'Romanian Deadlift':'Barbell Romanian Deadlift',
    'Walking Dumbbell Lunges':'Barbell Lunge', 'Dumbbell Step-Ups':'Barbell Step-Up', 'Dumbbell Calf Raises':'Standing Calf Raise'
  }
};
function swapName(name, kind){
  const m = String(name).match(/^(.*?)(\s*\([^)]*\))?\s*$/);
  const baseN = (m && m[1]) ? m[1].trim() : name;
  let suffix = (m && m[2]) ? m[2] : '';
  if (/\b(db|dumbbell|barbell|bb|ez)\b/i.test(suffix)) suffix = ''; // drop equipment tags like "(DB)"
  const repl = (SWAP_MAPS[kind] || {})[baseN];
  return repl ? (repl + suffix) : name;
}
function parseProgId(id){ const i = String(id).indexOf('#'); return i < 0 ? {base: id, v: 0} : {base: String(id).slice(0, i), v: parseInt(String(id).slice(i+1), 10) || 0}; }
function programVariant(prog, v, fullId){
  const id = fullId || prog.id;
  if (!prog.variants || v === 0) return Object.assign({}, prog, {id});
  const kind = prog.swapKind;
  const days = prog.days.map(d => Object.assign({}, d, {
    blocks: d.blocks.map(b => Object.assign({}, b, {
      exercises: b.exercises.map(ex => {
        if (ex.superset) return ex;
        const nm = swapName(ex.name, kind);
        return nm === ex.name ? ex : Object.assign({}, ex, {name: nm});
      })
    }))
  }));
  return Object.assign({}, prog, {id, name: prog.name + ' · ' + (prog.variants[v] || ''), days});
}
function getBuiltinProgram(id){
  const {base, v} = parseProgId(id);
  const p = BUILTIN_PROGRAMS.find(x => x.id === base);
  return p ? programVariant(p, v, id) : null;
}
function openProgram(base){ const ap = parseProgId(getActiveProgramId()); if (ap.base !== base) activateProgram(base); showScreen('tracker'); }
// ─────────────────────────────────────────────
// STATE & STORAGE
// ─────────────────────────────────────────────
let currentScreen = 'programs';
let activeProgramId = 'arnold_golden_era';
let currentDayIdx = 0;
let sessionLog = {};
let selectedMuscles = [];
let generatedWorkout = [];
let addExTargetDay = null;
let dayExercises = {};
let modalEquip = 'dumbbell';
let bankEquip = 'dumbbell';
let genEquip = ['dumbbell'];
let genInjuries = [];
let generatedMeta = null;
let generatedPlan = [];
// Escape any user-supplied string before inserting into innerHTML
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
// Pull the first number out of a free-text log value (e.g. "50 lbs" -> 50)
function parseNum(s){ if(s==null) return null; const m=String(s).match(/-?\d+(?:\.\d+)?/); return m?parseFloat(m[0]):null; }
// Parse a rest string like "90 sec" or "2 min" into seconds
function parseRest(str){ if(!str) return 90; const sec=str.match(/(\d+)\s*sec/i); if(sec) return parseInt(sec[1],10); const min=str.match(/(\d+)\s*min/i); if(min) return parseInt(min[1],10)*60; const n=str.match(/(\d+)/); return n?parseInt(n[1],10):90; }
function getPrograms() {
  try { return JSON.parse(localStorage.getItem('ge_programs') || '[]'); } catch(e) { return []; }
}
function savePrograms(p) { try { localStorage.setItem('ge_programs', JSON.stringify(p)); } catch(e){} }
function getActiveProgramId() { return localStorage.getItem('ge_active') || 'arnold_golden_era'; }
function setActiveProgramId(id) { localStorage.setItem('ge_active', id); activeProgramId = id; }
function getSessionLog(progId, dayIdx) {
  try { return JSON.parse(localStorage.getItem(`ge_log_${progId}_${dayIdx}`) || '{}'); } catch(e) { return {}; }
}
function saveSessionLog(progId, dayIdx, log) {
  try { localStorage.setItem(`ge_log_${progId}_${dayIdx}`, JSON.stringify(log)); } catch(e){}
}
function getHistory() { try { return JSON.parse(localStorage.getItem('ge_history') || '[]'); } catch(e) { return []; } }
function saveHistory(h) { try { localStorage.setItem('ge_history', JSON.stringify(h)); } catch(e){} }
// ─────────────────────────────────────────────
// COACHING — units, per-exercise baseline store, progression, e1RM, plates
// Weights are stored canonically in POUNDS; the display unit just converts at the edges.
// ─────────────────────────────────────────────
const LB_PER_KG = 2.2046226218;
const WEIGHT_STEP = 2.5;   // stepper increment, in the display unit
const PROG_INC = 5;        // progression jump, in lb
function getUnit(){ return localStorage.getItem('ge_unit') || 'lb'; }
function setUnit(u){ localStorage.setItem('ge_unit', u); }
function unitLabel(){ return getUnit(); }
function toDisplay(lb){ if(lb==null) return null; const v = getUnit()==='kg' ? lb/LB_PER_KG : lb; return Math.round(v*2)/2; }
function fromDisplay(v){ if(v==null||v==='') return null; const n=parseFloat(v); if(isNaN(n)) return null; return getUnit()==='kg' ? n*LB_PER_KG : n; }
function dispNum(lb){ const d=toDisplay(lb); return d==null?'':(Number.isInteger(d)?String(d):d.toFixed(1)); }
function fmtWeightLb(lb){ if(lb==null) return ''; return dispNum(lb)+' '+unitLabel(); }
// each logged set is {w: pounds|null, r: reps|null, done: bool}; coerce legacy string logs
function coerceSet(v){
  if(v && typeof v==='object') return {w:(v.w==null?null:+v.w), r:(v.r==null?null:+v.r), done:!!v.done};
  if(typeof v==='string' && v.trim()){ return {w:parseNum(v), r:null, done:true}; }
  return {w:null, r:null, done:false};
}
function setHasData(v){ const s=coerceSet(v); return s.done || s.w!=null || s.r!=null; }
function e1rm(wLb, reps){ if(!wLb||!reps) return 0; if(reps<=1) return wLb; return wLb*(1+reps/30); }
function parseRepRange(repsStr){
  const s=String(repsStr||''); if(/sec|min|amrap|max/i.test(s)) return null;
  const nums=(s.match(/\d+/g)||[]).map(Number); if(!nums.length) return null;
  return {lo:nums[0], hi:nums[nums.length-1]};
}
// per-exercise baseline store, keyed by exercise name (follows the exercise across programs)
function getExStore(){ try{ return JSON.parse(localStorage.getItem('ge_exlog')||'{}'); }catch(e){ return {}; } }
function saveExStore(s){ try{ localStorage.setItem('ge_exlog', JSON.stringify(s)); }catch(e){} }
function exRecord(name){ const s=getExStore(); return s[exKey(name)] || null; }
function recordExercise(name, rawSets){
  const clean = rawSets.map(coerceSet).filter(s=>s.w!=null || s.r!=null);
  if(!clean.length) return {pr:false};
  const store=getExStore(); const k=exKey(name); const prev=store[k];
  const best = Math.max(0, ...clean.map(s=>e1rm(s.w, s.r||1)));
  const isPR = !!(best>0 && prev && prev.e1rm && best > prev.e1rm + 0.01);
  const today = new Date().toLocaleDateString();
  store[k] = { name, date: today, sets: clean.map(s=>({w:s.w, r:s.r})), e1rm: Math.max(best, (prev&&prev.e1rm)||0), prDate: isPR ? today : (prev&&prev.prDate)||null };
  saveExStore(store);
  return {pr:isPR};
}
// Normalize any muscle string to a major group for volume aggregation.
function majorMuscle(s){
  const n = String(s||'').toLowerCase();
  if(/chest|pec/.test(n)) return 'Chest';
  if(/lat|back|trap|rhomboid|row|spinal|erector/.test(n)) return 'Back';
  if(/delt|shoulder/.test(n)) return 'Shoulders';
  if(/bicep|tricep|forearm|brachial|arm/.test(n)) return 'Arms';
  if(/quad|hamstring|glute|calf|calve|leg|adductor|abductor/.test(n)) return 'Legs';
  if(/ab|core|oblique|abdominal/.test(n)) return 'Core';
  return 'Other';
}
// ── body metrics (bodyweight + optional tape measurements) ──
// Bodyweight stored in lb (canonical, like all weights); measurements in cm (canonical).
function getBody(){ try{ return JSON.parse(localStorage.getItem('ge_body')||'[]'); }catch(e){ return []; } }
function saveBody(b){ try{ localStorage.setItem('ge_body', JSON.stringify(b)); }catch(e){} }
function lenUnit(){ return getUnit()==='kg' ? 'cm' : 'in'; }
function lenToDisp(cm){ if(cm==null) return null; return getUnit()==='kg' ? Math.round(cm*10)/10 : Math.round((cm/2.54)*10)/10; }
function lenFromInput(v){ if(v==null||v==='') return null; const n=parseFloat(v); if(isNaN(n)) return null; return getUnit()==='kg' ? n : n*2.54; }
// progression suggestion for an exercise given its prescribed reps
// Bodyweight moves hide the weight field — but loadable ones (dips, pull/chin-ups) keep an optional one.
const BW_LOADABLE = /\b(dips?|pull-?ups?|chin-?ups?|muscle-?ups?)\b/i;
function exIsBwPrescribed(ex){ return ex.sets && ex.sets.length && ex.sets.every(s => /^\s*bw\s*$/i.test(String(s.weight))); }
function exHideWeight(ex){ return exIsBwPrescribed(ex) && !BW_LOADABLE.test(ex.name || '') && !/dumbbell|barbell|machine|cable|kettlebell/i.test(ex.name || ''); }
// Timed holds (planks, wall sits, dead hangs…) are prescribed in seconds/minutes, not reps.
function exIsTimed(ex){ return !!(ex && ex.sets && ex.sets.length && ex.sets.every(s => /sec|min|hold/i.test(String((s && s.reps) || '')))); }
// ── client profile (bodyweight, sex, experience) → starting-weight estimates ──
// Bodyweight is stored canonically in lb, like every other weight in the app.
function getProfile(){ try{ return JSON.parse(localStorage.getItem('ge_profile')||'null'); }catch(e){ return null; } }
function saveProfile(p){ try{ localStorage.setItem('ge_profile', JSON.stringify(p)); }catch(e){} }
function hasProfile(){ const p=getProfile(); return !!(p && p.bw); }
// Novice 1RM as a multiple of bodyweight (male baseline), from common strength standards.
const STD_MULT = { bench:0.75, ohp:0.55, row:0.70, squat:1.00, deadlift:1.30 };
// per-lift female multiplier relative to male (upper ~0.65, lower ~0.80)
const STD_SEXF = { bench:0.65, ohp:0.60, row:0.65, squat:0.80, deadlift:0.80 };
// experience scales the novice baseline toward intermediate/advanced
const STD_EXPF = { beginner:1.0, intermediate:1.5, advanced:1.85 };
// dumbbell variant → per-hand fraction of the barbell working weight
const STD_DBF = { bench:0.42, ohp:0.45, row:0.50 };
function liftType(name){
  const n=String(name||'').toLowerCase();
  if(/deadlift|romanian|stiff-?leg/.test(n)) return 'deadlift';
  if(/\bsquat\b/.test(n)) return 'squat';
  if(/bench press|incline barbell press|incline dumbbell press|flat dumbbell press|dumbbell bench/.test(n)) return 'bench';
  if(/overhead press|shoulder press|military press|arnold press|seated dumbbell press/.test(n)) return 'ohp';
  if(/barbell row|bent-?over row|pendlay|seated cable row|chest-?supported row|single-?arm dumbbell row|t-?bar row/.test(n)) return 'row';
  return null;
}
// Suggested first-session weight (lb) for a prescribed exercise, or null when we
// can't stand behind a number (no profile, bodyweight move, or an isolation lift
// with no clean standard — those get rep guidance instead).
function estimateStartLb(ex){
  const p=getProfile(); if(!p || !p.bw) return null;
  if(exHideWeight(ex)) return null;
  const lt=liftType(ex.name); if(!lt) return null;
  const range=parseRepRange(ex.sets && ex.sets[0] && ex.sets[0].reps);
  const reps = range ? Math.round((range.lo+range.hi)/2) : 10;
  const sexF = (p.sex==='female') ? (STD_SEXF[lt]||0.7)
             : (p.sex==='male')   ? 1
             : (1 + (STD_SEXF[lt]||0.7)) / 2;   // unspecified → neutral average
  const expF = STD_EXPF[p.exp] || 1.0;
  const oneRM = p.bw * STD_MULT[lt] * sexF * expF;
  let work = oneRM / (1 + reps/30) * 0.85;            // ease into it on session 1
  const isDb = /dumbbell/i.test(ex.name) || ex.equip==='dumbbell';
  let perHand=false;
  if(isDb){ if(!STD_DBF[lt]) return null; work *= STD_DBF[lt]; perHand=true; }
  return { lb: Math.max(5, Math.round(work/5)*5), perHand };
}
function suggestProgression(ex){
  const rec = exRecord(ex.name);
  if(exIsTimed(ex)){
    const best = (rec && rec.sets) ? Math.max(0, ...rec.sets.map(s=>s.r||0)) : 0;
    if(best>0) return {timed:true, text:`Beat your best hold — ${best}s.`, last:rec};
    return {first:true, timed:true};
  }
  if(!rec || !rec.sets || !rec.sets.length){
    const range=parseRepRange(ex.sets && ex.sets[0] && ex.sets[0].reps);
    const repTxt = range ? (range.lo===range.hi ? String(range.lo) : range.lo+'–'+range.hi) : '';
    if(exHideWeight(ex)) return {first:true, bw:true, reps:repTxt};
    const est=estimateStartLb(ex);
    if(est) return {first:true, estLb:est.lb, perHand:est.perHand, reps:repTxt};
    return {first:true, guide:true, reps:repTxt};
  }
  const range = parseRepRange(ex.sets && ex.sets[0] && ex.sets[0].reps);
  const maxW = Math.max(0, ...rec.sets.map(s=>s.w||0));
  if(maxW<=0 || !range) return {text:'Beat last time — more reps or cleaner form.', last:rec};
  const haveReps = rec.sets.some(s=>s.r!=null);
  const allTop = haveReps && rec.sets.every(s=>s.r!=null && s.r>=range.hi);
  if(allTop) return {weightLb:maxW+PROG_INC, reps:range.lo, why:`you hit ${range.hi}+ on every set`, last:rec};
  return {weightLb:maxW, reps:range.hi, why:`work up to ${range.hi} reps, then add weight`, last:rec};
}
// plate calculator → per-side plates in the display unit
function computePlates(targetLb, barLb){
  const unit=getUnit();
  const plates = unit==='kg' ? [25,20,15,10,5,2.5,1.25] : [45,35,25,10,5,2.5];
  const target=toDisplay(targetLb), bar=toDisplay(barLb);
  let perSide=(target-bar)/2; const out=[];
  if(perSide<=0) return {perSide:[], leftover:0, target, bar, none:perSide<0};
  plates.forEach(p=>{ while(perSide >= p - 1e-6){ out.push(p); perSide-=p; } });
  return {perSide:out, leftover:Math.round(perSide*100)/100, target, bar, none:false};
}
// ── set logging interaction (structured) ──
function curSet(exId, si){ return coerceSet(sessionLog[`${exId}_${si}`]); }
function writeSet(exId, si, s){ sessionLog[`${exId}_${si}`] = {w:s.w, r:s.r, done:s.done}; saveSessionLog(activeProgramId, currentDayIdx, sessionLog); }
function refreshSetRow(exId, si){
  const s=curSet(exId,si);
  const w=document.getElementById(`w_${exId}_${si}`); if(w) w.value = dispNum(s.w);
  const r=document.getElementById(`r_${exId}_${si}`); if(r) r.value = s.r!=null ? s.r : '';
  const d=document.getElementById(`d_${exId}_${si}`); if(d) d.classList.toggle('on', !!s.done);
  const row=document.getElementById(`row_${exId}_${si}`); if(row) row.classList.toggle('done', !!s.done || s.w!=null || s.r!=null);
}
function setWeightInput(el){ const [exId,si]=el.dataset.k.split('|'); const s=curSet(exId,+si); s.w=fromDisplay(el.value); writeSet(exId,+si,s); const row=el.closest('.set-row2'); if(row) row.classList.toggle('done', !!s.done || s.w!=null || s.r!=null); updateProgress(); }
function setRepInput(el){ const [exId,si]=el.dataset.k.split('|'); const s=curSet(exId,+si); const n=parseInt(el.value,10); s.r=isNaN(n)?null:n; writeSet(exId,+si,s); const row=el.closest('.set-row2'); if(row) row.classList.toggle('done', !!s.done || s.w!=null || s.r!=null); updateProgress(); }
function stepW(exId, si, deltaDisp){ const s=curSet(exId,si); const cur=toDisplay(s.w)||0; const nd=Math.max(0, Math.round((cur+deltaDisp)*2)/2); s.w=fromDisplay(nd); writeSet(exId,si,s); refreshSetRow(exId,si); updateProgress(); }
function stepR(exId, si, delta){ const s=curSet(exId,si); s.r=Math.max(0,(s.r||0)+delta); writeSet(exId,si,s); refreshSetRow(exId,si); updateProgress(); }
function toggleDone(exId, si, restSec){ const s=curSet(exId,si); s.done=!s.done; writeSet(exId,si,s); refreshSetRow(exId,si); updateProgress(); if(s.done && restSec){ startRest(restSec); } }
function toggleUnit(){ setUnit(getUnit()==='lb'?'kg':'lb'); if(currentScreen==='tracker') renderTrackerDay(); showToast('Units: '+unitLabel(), ''); }
function openPlateCalc(presetLb){
  const unit=getUnit();
  const bars = unit==='kg' ? [{v:20,l:'20 kg Olympic bar'},{v:15,l:'15 kg bar'},{v:10,l:'10 kg bar'},{v:0,l:'No bar (dumbbell)'}]
                           : [{v:45,l:'45 lb Olympic bar'},{v:35,l:'35 lb bar'},{v:15,l:'15 lb bar'},{v:0,l:'No bar (dumbbell)'}];
  document.getElementById('plateBar').innerHTML = bars.map(b=>`<option value="${b.v}">${esc(b.l)}</option>`).join('');
  document.getElementById('plateTarget').value = presetLb!=null ? dispNum(presetLb) : (unit==='kg'?'60':'135');
  document.getElementById('plateModal').classList.add('visible');
  renderPlates();
}
function renderPlates(){
  const unit=getUnit();
  const tDisp=parseFloat(document.getElementById('plateTarget').value);
  const barDisp=parseFloat(document.getElementById('plateBar').value);
  const out=document.getElementById('plateOut');
  if(isNaN(tDisp)){ out.innerHTML='<div class="plate-msg">Enter a target weight.</div>'; return; }
  const targetLb = unit==='kg' ? tDisp*LB_PER_KG : tDisp;
  const barLb = unit==='kg' ? (barDisp||0)*LB_PER_KG : (barDisp||0);
  const res=computePlates(targetLb, barLb);
  if(res.none){ out.innerHTML='<div class="plate-msg">Target is below the bar weight.</div>'; return; }
  if(!res.perSide.length){ out.innerHTML='<div class="plate-msg">Just the bar — no plates needed.</div>'; return; }
  const chips=res.perSide.map(p=>`<span class="plate-chip">${p}</span>`).join('');
  const leftover = res.leftover>0 ? `<div class="plate-msg">~${res.leftover} ${esc(unit)}/side can't be matched with standard plates</div>` : '';
  out.innerHTML=`<div class="plate-side-lbl">Load per side:</div><div class="plate-chips">${chips}</div>${leftover}<div class="plate-total">${res.target} ${esc(unit)} total · ${res.bar} ${esc(unit)} bar</div>`;
}
// ── profile editor (drives starting-weight estimates) ──
function openProfile(){
  const p=getProfile()||{};
  document.getElementById('profBwUnit').textContent = unitLabel();
  document.getElementById('profBw').value = p.bw!=null ? dispNum(p.bw) : '';
  document.getElementById('profSex').value = p.sex || '';
  document.getElementById('profExp').value = p.exp || 'beginner';
  document.getElementById('profileModal').classList.add('visible');
}
function saveProfileForm(){
  const bwDisp=parseFloat(document.getElementById('profBw').value);
  const p={
    bw: isNaN(bwDisp) ? null : fromDisplay(bwDisp),
    sex: document.getElementById('profSex').value || null,
    exp: document.getElementById('profExp').value || 'beginner'
  };
  saveProfile(p);
  closeModal('profileModal');
  renderProfileRow();
  if(currentScreen==='tracker') renderTrackerDay();
  showToast(p.bw ? 'Profile saved — starting weights updated' : 'Profile saved', 'success');
}
function renderProfileRow(){
  const el=document.getElementById('profileRow'); if(!el) return;
  const p=getProfile();
  if(p && p.bw){
    const expLbl={beginner:'Beginner',intermediate:'Intermediate',advanced:'Advanced'}[p.exp]||'Beginner';
    const bits=[ dispNum(p.bw)+' '+unitLabel() ];
    if(p.sex) bits.push(p.sex==='female'?'Female':'Male');
    bits.push(expLbl);
    el.innerHTML = `<div class="prof-info"><b>⚙ Profile:</b> ${esc(bits.join(' · '))}<span class="prof-sub"> — used for starting-weight suggestions</span></div><button class="btn btn-outline btn-sm" onclick="openProfile()">Edit</button>`;
    el.classList.remove('prof-cta');
  } else {
    el.innerHTML = `<div class="prof-info">⚙ New to lifting? Add your bodyweight & experience and we'll suggest a starting weight for each exercise.</div><button class="btn btn-gold btn-sm" onclick="openProfile()">Set up profile</button>`;
    el.classList.add('prof-cta');
  }
}
function getActiveProgram() {
  return getBuiltinProgram(activeProgramId) || getPrograms().find(p => p.id === activeProgramId) || ARNOLD_PROGRAM;
}
function getProgramById(id) {
  return getBuiltinProgram(id) || getPrograms().find(p => p.id === id) || null;
}
// Most recent completed session for this program + day, or null
function getLastSession(progId, dayIdx) {
  const hist = getHistory();
  for (const h of hist) { if (h.progId === progId && h.dayIdx === dayIdx) return h; }
  return null;
}
// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  // Generator lives under Programs now (no nav tab of its own), so keep Programs lit there.
  const navName = (name === 'random') ? 'programs' : name;
  const idx = ['programs','tracker','bank','stats','history'].indexOf(navName);
  if (idx >= 0) document.querySelectorAll('.bnav-btn')[idx].classList.add('active');
  currentScreen = name;
  if (name === 'programs') renderPrograms();
  if (name === 'tracker') { activeProgramId = getActiveProgramId(); sessionLog = getSessionLog(activeProgramId, currentDayIdx); renderTracker(); }
  if (name === 'bank') renderBank();
  if (name === 'random') renderGenEquip();
  if (name === 'stats') renderStats();
  if (name === 'history') renderHistory();
}
// ─────────────────────────────────────────────
// PROGRAMS SCREEN
// ─────────────────────────────────────────────
function renderPrograms() {
  renderProfileRow();
  const grid = document.getElementById('programGrid');
  const userProgs = getPrograms();
  const active = getActiveProgramId();
  let html = '';
  const ap = parseProgId(active);
  BUILTIN_PROGRAMS.forEach(prog => {
    const isActiveProg = ap.base === prog.id;
    const variants = prog.variants || ['Original'];
    const pills = variants.map((lab, vi) => {
      const fullId = vi === 0 ? prog.id : prog.id + '#' + vi;
      const on = (isActiveProg && ap.v === vi) ? 'on' : '';
      return `<button class="var-pill ${on}" onclick="activateProgram('${fullId}')">${esc(lab)}</button>`;
    }).join('');
    html += `<div class="program-card ${isActiveProg?'active-program':''}">
      <div class="pc-header">
        <div class="pc-info">
          <div class="pc-name">${esc(prog.name)}</div>
          <div class="pc-meta">${esc(prog.meta || (prog.days.length + '-day'))}</div>
        </div>
        ${isActiveProg ? '<div class="pc-active-badge">Active</div>' : '<div class="pc-badge">Built-in</div>'}
      </div>
      ${variants.length > 1 ? `<div class="var-toggle"><span class="var-lbl">Version</span>${pills}</div>` : ''}
      <div class="pc-actions">
        <button class="btn btn-outline btn-sm" onclick="openProgram('${prog.id}')">Open Tracker</button>
      </div>
    </div>`;
  });
  userProgs.forEach(prog => {
    const isActive = active === prog.id;
    html += `<div class="program-card ${isActive?'active-program':''}">
      <div class="pc-header">
        <div class="pc-info">
          <div class="pc-name">${esc(prog.name)}</div>
          <div class="pc-meta">${esc(prog.desc || '')} · ${prog.days.length}-day split</div>
        </div>
        ${isActive ? '<div class="pc-active-badge">Active</div>' : ''}
      </div>
      <div class="pc-actions">
        ${!isActive ? `<button class="btn btn-gold btn-sm" onclick="activateProgram('${prog.id}')">Set Active</button>` : ''}
        <button class="btn btn-outline btn-sm" onclick="activateProgram('${prog.id}');showScreen('tracker')">Open Tracker</button>
        <button class="btn btn-red btn-sm" onclick="deleteProgram('${prog.id}')">Delete</button>
      </div>
    </div>`;
  });
  grid.innerHTML = html;
}
function activateProgram(id) {
  setActiveProgramId(id);
  currentDayIdx = 0;
  sessionLog = getSessionLog(id, 0);
  renderPrograms();
  showToast('Program activated', 'success');
}
function deleteProgram(id) {
  if (!confirm('Delete this program and all its logged data?')) return;
  const progs = getPrograms().filter(p => p.id !== id);
  savePrograms(progs);
  if (activeProgramId === id) setActiveProgramId('arnold_golden_era');
  renderPrograms();
}
// ─────────────────────────────────────────────
// DATA BACKUP & RESTORE
// ─────────────────────────────────────────────
function exportData() {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.indexOf('ge_') === 0) data[k] = localStorage.getItem(k);
  }
  const payload = { _app: 'golden-era', _version: 1, _exported: new Date().toISOString(), data };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GoldenEra_Backup_${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('Backup downloaded ✓', 'success');
}
function importData(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = JSON.parse(e.target.result);
      const data = (parsed && parsed.data) ? parsed.data : parsed;
      if (!data || typeof data !== 'object') throw new Error('bad');
      const keys = Object.keys(data).filter(k => k.indexOf('ge_') === 0);
      if (keys.length === 0) { showToast('No Golden Era data in that file', 'error'); input.value = ''; return; }
      if (!confirm('Restore this backup? It will overwrite your current programs and history in this browser.')) { input.value = ''; return; }
      Object.keys(localStorage).filter(k => k.indexOf('ge_') === 0).forEach(k => localStorage.removeItem(k));
      keys.forEach(k => localStorage.setItem(k, data[k]));
      activeProgramId = getActiveProgramId();
      currentDayIdx = 0;
      sessionLog = getSessionLog(activeProgramId, 0);
      showToast('Backup restored ✓', 'success');
      showScreen('programs');
    } catch (err) {
      showToast('Invalid backup file', 'error');
    } finally {
      input.value = '';
    }
  };
  reader.readAsText(file);
}
// ── reset all data (guarded by a type-to-confirm gate) ──
function openResetModal(){
  const i=document.getElementById('resetConfirmInput'); if(i) i.value='';
  const b=document.getElementById('resetConfirmBtn'); if(b) b.disabled=true;
  const mine=document.querySelector('input[name="resetScope"][value="mine"]'); if(mine) mine.checked=true;
  document.getElementById('resetModal').classList.add('visible');
}
function validateResetGate(){
  const v=(document.getElementById('resetConfirmInput').value||'').trim().toUpperCase();
  const b=document.getElementById('resetConfirmBtn'); if(b) b.disabled = (v!=='RESET');
}
function doReset(){
  // Defense in depth: never proceed unless the gate word is exact.
  const v=(document.getElementById('resetConfirmInput').value||'').trim().toUpperCase();
  if(v!=='RESET') return;
  const scopeEl=document.querySelector('input[name="resetScope"]:checked');
  const scope=scopeEl?scopeEl.value:'mine';
  // 1) Always wipe this app's localStorage (programs, history, profile, logs, units…)
  try{ Object.keys(localStorage).filter(k=>k.indexOf('ge_')===0).forEach(k=>localStorage.removeItem(k)); }catch(e){}
  const finish=()=>{ try{ showToast('All data reset — fresh start','success'); }catch(e){} setTimeout(()=>location.reload(), 250); };
  if(scope==='all'){
    // 2) Also clear the cached exercise database (IndexedDB) + service-worker caches
    try{ if(window.caches && caches.keys){ caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).catch(()=>{}); } }catch(e){}
    let done=false; const go=()=>{ if(done) return; done=true; finish(); };
    try{ const del=indexedDB.deleteDatabase('golden_era'); del.onsuccess=go; del.onerror=go; del.onblocked=go; }catch(e){ go(); }
    setTimeout(go, 900); // fallback if the IndexedDB delete stalls on an open connection
  } else {
    finish();
  }
}
// ─────────────────────────────────────────────
// CREATE PROGRAM MODAL
// ─────────────────────────────────────────────
function showCreateModal() {
  dayExercises = {};
  document.getElementById('newProgName').value = '';
  document.getElementById('newProgDesc').value = '';
  document.getElementById('createModal').classList.add('visible');
  buildDaySlots();
}
function closeModal(id) {
  document.getElementById(id).classList.remove('visible');
}
function buildDaySlots() {
  const n = parseInt(document.getElementById('newProgDays').value, 10);
  const dayNames = ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6'];
  let html = '';
  for (let i = 0; i < n; i++) {
    html += `<div class="day-slot" id="daySlot_${i}">
      <div class="day-slot-hdr">
        <input class="form-input" style="width:60%;font-size:12px;padding:5px 8px;" id="dayName_${i}" placeholder="${dayNames[i]} (e.g. Chest + Back)">
        <button class="btn btn-ghost btn-sm" onclick="openAddExModal(${i})">+ Add Exercise</button>
      </div>
      <div class="added-exercises" id="dayExercises_${i}"></div>
    </div>`;
  }
  document.getElementById('dayBuilder').innerHTML = html;
  // Re-render any exercises already added (e.g. after changing day count)
  for (let i = 0; i < n; i++) renderDayExercises(i);
}
function openAddExModal(dayIdx) {
  addExTargetDay = dayIdx;
  document.getElementById('addExSearch').value = '';
  renderAddExList();
  document.getElementById('addExModal').classList.add('visible');
}
function setModalEquip(id) { modalEquip = id; renderAddExList(); }
function renderAddExList() {
  const q = (document.getElementById('addExSearch').value || '').toLowerCase();
  const muscle = document.getElementById('addExMuscle')?.value || '';
  const present = presentEquip();
  if (present.length && !present.includes(modalEquip)) modalEquip = present[0];
  const eqEl = document.getElementById('addExEquip');
  if (eqEl) eqEl.innerHTML = present.map(id => {
    const n = EXERCISE_BANK.filter(e => e.equip === id).length;
    return `<div class="equip-tab ${modalEquip===id?'active':''}" onclick="setModalEquip('${id}')">${esc(EQUIP_LABELS[id]||id)} <span class="equip-count">${n}</span></div>`;
  }).join('');
  const added = new Set((dayExercises[addExTargetDay] || []).map(e => e.id));
  const filtered = EXERCISE_BANK.filter(e =>
    e.equip === modalEquip &&
    (!muscle || e.muscle === muscle) &&
    (!q || e.name.toLowerCase().includes(q) || e.muscle.includes(q))
  );
  const listEl = document.getElementById('addExList');
  const sc = listEl ? listEl.scrollTop : 0;
  if (!filtered.length) { listEl.innerHTML = `<div class="bank-empty">No exercises match — try another bank or search.</div>`; return; }
  let html = `<div class="addex-count">${filtered.length} exercises${added.size ? ' · ' + added.size + ' added' : ''}</div>`;
  filtered.forEach(ex => {
    const isAdded = added.has(ex.id);
    const diff = ex.difficulty ? `<div class="diff-badge diff-${ex.difficulty}">${esc(ex.difficulty)}</div>` : '';
    html += `<div class="addex-row ${isAdded?'added':''}">
      <div class="addex-info">
        <div class="addex-name">${esc(ex.name)}</div>
        <div class="addex-meta">${esc(ex.muscle)} · ${esc(EQUIP_LABELS[ex.equip]||ex.equip)}</div>
      </div>
      ${diff}
      <button class="btn ${isAdded?'btn-outline':'btn-gold'} btn-sm addex-btn" onclick="addExToDay('${ex.id}')" ${isAdded?'disabled':''}>${isAdded?'✓ Added':'+ Add'}</button>
    </div>`;
  });
  listEl.innerHTML = html;
  listEl.scrollTop = sc;
}
// Look the exercise up by id — avoids any string-escaping issues with names like "Farmer's Carry".
// The picker stays open so several exercises can be added in a row.
function addExToDay(id) {
  const ex = EXERCISE_BANK.find(e => e.id === id);
  if (!ex) return;
  const d = addExTargetDay;
  if (!dayExercises[d]) dayExercises[d] = [];
  if (dayExercises[d].find(e => e.id === id)) { showToast('Already added', ''); return; }
  dayExercises[d].push({id: ex.id, name: ex.name, muscle: ex.muscle});
  renderDayExercises(d);
  renderAddExList();
  showToast('Added ' + ex.name, 'success');
}
function renderDayExercises(d) {
  const container = document.getElementById(`dayExercises_${d}`);
  if (!container) return;
  let html = '';
  (dayExercises[d] || []).forEach((ex, i) => {
    html += `<div class="added-ex">
      <span>${esc(ex.name)} <span style="color:var(--text-dim);font-size:10px">(${esc(ex.muscle)})</span></span>
      <span class="remove-ex" onclick="removeExFromDay(${d},${i})">×</span>
    </div>`;
  });
  container.innerHTML = html;
}
function removeExFromDay(d, i) {
  dayExercises[d].splice(i, 1);
  renderDayExercises(d);
}
function saveNewProgram() {
  const name = document.getElementById('newProgName').value.trim();
  const desc = document.getElementById('newProgDesc').value.trim();
  const n = parseInt(document.getElementById('newProgDays').value, 10);
  if (!name) { showToast('Add a program name', 'error'); return; }
  const days = [];
  for (let i = 0; i < n; i++) {
    const dayName = document.getElementById(`dayName_${i}`)?.value.trim() || `Day ${i+1}`;
    const exs = (dayExercises[i] || []).map((e, idx) => {
      const bankEx = EXERCISE_BANK.find(b => b.id === e.id);
      return {
        id: e.id,
        label: String.fromCharCode(65 + idx),
        name: e.name,
        muscle: e.muscle,
        sets: [{reps:'10',weight:'—',rpe:'8'},{reps:'10',weight:'—',rpe:'8'},{reps:'10',weight:'—',rpe:'8'}],
        note: bankEx ? bankEx.cue : ''
      };
    });
    days.push({
      name: dayName,
      shortName: dayName.length > 12 ? dayName.substring(0,12)+'...' : dayName,
      warmup: ['5 min light cardio or movement prep','Dynamic stretches for target muscles'],
      blocks: exs.length > 0 ? [{tag:'Main Work',title:dayName,rest:'60–90 sec between sets',exercises:exs}] : []
    });
  }
  const prog = { id: 'prog_' + Date.now(), name, desc, days };
  const progs = getPrograms();
  progs.push(prog);
  savePrograms(progs);
  dayExercises = {};
  closeModal('createModal');
  renderPrograms();
  showToast('Program saved!', 'success');
}
// ─────────────────────────────────────────────
// TRACKER
// ─────────────────────────────────────────────
function renderTracker() {
  const prog = getActiveProgram();
  if (!prog) { document.getElementById('trackerContent').innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-dim)">No active program. Go to Programs to select one.</div>'; return; }
  if (currentDayIdx >= prog.days.length) currentDayIdx = 0;
  let dayHtml = '';
  const hasRestDay = prog.days.some(d => d.rest);
  prog.days.forEach((d, i) => {
    dayHtml += `<div class="day-tab ${d.rest?'restday ':''}${i===currentDayIdx?'active':''}" onclick="switchTrackerDay(${i},this)">
      <div class="day-tab-name">${esc(d.shortName || d.name)}</div>
      <div class="day-tab-focus">${esc(d.name.length > 14 ? d.name.substring(0,14)+'…' : d.name)}</div>
    </div>`;
  });
  if (!hasRestDay) dayHtml += `<div class="day-tab rest-tab"><div class="day-tab-name">Rest</div><div class="day-tab-focus">Recovery</div></div>`;
  document.getElementById('daySelector').innerHTML = dayHtml;
  renderTrackerDay();
}
function switchTrackerDay(idx, el) {
  saveSessionLog(activeProgramId, currentDayIdx, sessionLog);
  currentDayIdx = idx;
  sessionLog = getSessionLog(activeProgramId, idx);
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderTrackerDay();
}
function renderTrackerDay() {
  const prog = getActiveProgram();
  const day = prog.days[currentDayIdx];
  const content = document.getElementById('trackerContent');
  if (day.rest) {
    content.innerHTML = `<div class="session-bar">
      <div>
        <div class="session-title">Rest <span>Day</span></div>
        <div class="session-meta">${esc(prog.name)}</div>
      </div>
    </div>
    <div class="rest-day-card">
      <h3>Recovery Day</h3>
      <p>No lifting today — this is where the growth actually happens. Keep it light and let your body rebuild.</p>
      <ul>
        <li>Take a walk or do 20–30 min of easy cardio</li>
        <li>Stretch or foam-roll any tight areas</li>
        <li>Hydrate and aim for 7–9 hours of sleep</li>
        <li>Get some protein in to support recovery</li>
      </ul>
    </div>`;
    return;
  }
  const last = getLastSession(activeProgramId, currentDayIdx);
  const lastLog = last ? last.log : {};
  let html = '';
  // Session bar
  const safeName = esc(day.name);
  const nameHtml = safeName.replace('+', '<span>+</span>');
  html += `<div class="session-bar">
    <div>
      <div class="session-title">${nameHtml}</div>
      <div class="session-meta">${esc(prog.name)}</div>
    </div>
    <div class="session-acts">
      <button class="btn btn-ghost" onclick="toggleUnit()" title="Switch units">${esc(unitLabel())}</button>
      <button class="btn btn-ghost" onclick="openPlateCalc()" title="Plate calculator">🧮</button>
      <button class="btn btn-ghost" onclick="startRest(90)">⏱ Rest</button>
      <button class="btn btn-ghost" onclick="clearTrackerDay()">↺ Reset</button>
      <button class="btn btn-green btn-sm" onclick="finishSession()">✓ Log</button>
    </div>
  </div>`;
  // Progress
  const total = countSets(day), filled = countFilled(day);
  const pct = total > 0 ? Math.round((filled/total)*100) : 0;
  html += `<div class="prog-wrap">
    <div class="prog-label">Progress</div>
    <div class="prog-track"><div class="prog-fill" id="progFill" style="width:${pct}%"></div></div>
    <div class="prog-count" id="progCount">${filled}/${total}</div>
  </div>`;
  // Complete banner
  if (sessionLog.__completed) {
    html += `<div class="complete-banner visible"><div class="complete-text">✓ Session logged</div><button class="btn btn-outline btn-sm" onclick="startNextSession()">↺ New session</button><button class="btn btn-green btn-sm" onclick="exportPDF()">⬇ Export PDF</button></div>`;
  }
  // Last session reference
  if (last) {
    html += `<div class="last-session-bar">↩ Last session: <b>${esc(last.date)}</b> — each exercise shows a suggested target and your last numbers. Tap ✓ to log a set and start the rest timer.</div>`;
  }
  // Warmup
  if (day.warmup?.length) {
    html += `<div class="warmup-card"><div class="warmup-label">⚡ Warm-Up · 5 min</div>`;
    day.warmup.forEach(w => { html += `<div class="warmup-item">${esc(w)}</div>`; });
    html += `</div>`;
  }
  // Blocks
  day.blocks.forEach(block => {
    const restBtn = block.rest ? `<button class="btn-rt-start" onclick="startRest(${parseRest(block.rest)})" title="Start rest timer">⏱</button>` : '';
    html += `<div class="block"><div class="block-hdr"><div class="block-tag">${esc(block.tag)}</div><div class="block-title">${esc(block.title)}</div>${block.rest?`<div class="block-rest"><span>🕐 ${esc(block.rest)}</span>${restBtn}</div>`:''}</div>`;
    block.exercises.forEach((ex, exIdx) => {
      if (ex.superset) { html += `<div class="ss-div"><div class="ss-line"></div><div class="ss-label">↕ Superset — 30 sec ↕</div><div class="ss-line"></div></div>`; return; }
      html += `<div class="exercise"><div class="ex-hdr"><div><div class="ex-name">${esc(ex.label)} — ${esc(ex.name)}</div><div class="ex-muscle-tag">${esc(ex.muscle)}</div></div><div class="ex-set-count">${ex.sets.length} SETS</div></div>`;
      const sug = suggestProgression(ex);
      if (sug.first) {
        let fm;
        if (sug.timed) {
          fm = `★ First time — hold for the prescribed time; we'll track your best.`;
        } else if (sug.estLb != null) {
          fm = `★ First time — start around <b>~${esc(fmtWeightLb(sug.estLb))}${sug.perHand ? ' each' : ''}</b>${sug.reps ? ` for ${esc(sug.reps)} reps` : ''}. Aim to leave ~2 in the tank; we fine-tune from your logged sets.`;
        } else if (sug.bw) {
          fm = `★ First time — log your reps; we progress you from here.`;
        } else if (sug.guide) {
          fm = `★ First time — pick a weight you can do for ${esc(sug.reps || 'these')} reps with ~2 left in the tank.` + (hasProfile() ? '' : ` <a class="suggest-link" onclick="openProfile()">Add your profile</a> for a suggested number.`);
        } else {
          fm = `★ First time — log the weight you use; we'll progress you from here.`;
        }
        html += `<div class="suggest first">${fm}</div>`;
      } else if (sug.weightLb != null) {
        html += `<div class="suggest">▲ Suggested: <b>${esc(fmtWeightLb(sug.weightLb))} × ${sug.reps}</b> <span>· ${esc(sug.why)}</span></div>`;
      } else if (sug.text) {
        html += `<div class="suggest">▲ ${esc(sug.text)}</div>`;
      }
      // Superset timing: after the FIRST exercise of a pair, rest is the short 30s transition;
      // after the second (or any non-superset exercise) it's the full block rest.
      const ssNext = block.exercises[exIdx + 1];
      const restSec = (ssNext && ssNext.superset) ? 30 : parseRest(block.rest);
      const hideW = exHideWeight(ex);
      const timed = exIsTimed(ex);
      html += `<div class="sets-con"><div class="set-hdr"><span></span><span></span><span>${timed ? 'seconds' : 'reps'}</span><span>${hideW ? 'bodyweight' : 'weight (' + esc(unitLabel()) + ')'}</span><span></span></div>`;
      ex.sets.forEach((s, si) => {
        const cur = curSet(ex.id, si);
        const rowFilled = (cur.done || cur.w != null || cur.r != null) ? 'done' : '';
        const weightCell = hideW
          ? `<div class="set-bw">BW</div>`
          : `<div class="stepper">
            <button class="stp-btn" onclick="stepW('${ex.id}',${si},-${WEIGHT_STEP})" tabindex="-1">−</button>
            <input class="stp-input" id="w_${ex.id}_${si}" inputmode="decimal" placeholder="–" value="${dispNum(cur.w)}" data-k="${ex.id}|${si}" oninput="setWeightInput(this)">
            <button class="stp-btn" onclick="stepW('${ex.id}',${si},${WEIGHT_STEP})" tabindex="-1">+</button>
          </div>`;
        html += `<div class="set-row2 ${rowFilled}" id="row_${ex.id}_${si}">
          <div class="set-n">${si+1}</div>
          <div class="set-presc">${esc(s.reps)}<span>${esc(s.weight)}</span></div>
          <div class="stepper">
            <button class="stp-btn" onclick="stepR('${ex.id}',${si},${timed?-5:-1})" tabindex="-1">−</button>
            <input class="stp-input" id="r_${ex.id}_${si}" inputmode="numeric" placeholder="${timed?'sec':'–'}" value="${cur.r!=null?cur.r:''}" data-k="${ex.id}|${si}" oninput="setRepInput(this)">
            <button class="stp-btn" onclick="stepR('${ex.id}',${si},${timed?5:1})" tabindex="-1">+</button>
          </div>
          ${weightCell}
          <button class="set-done ${cur.done?'on':''}" id="d_${ex.id}_${si}" onclick="toggleDone('${ex.id}',${si},${restSec})" title="Mark set done">✓</button>
        </div>`;
      });
      html += `</div>`;
      if (sug.last && sug.last.sets && sug.last.sets.length) {
        const lr = sug.last.sets.map(x => `${x.w!=null?dispNum(x.w):'BW'}${x.r!=null?'×'+x.r:''}`);
        html += `<div class="last-ref">↩ Last (${esc(sug.last.date||'')}): <b>${esc(lr.join('  ·  '))}</b></div>`;
      }
      // Notes
      const nk = `${ex.id}_notes`;
      html += `<textarea class="notes-input" placeholder="Notes (how it felt, form, adjustments...)" data-key="${nk}" oninput="handleLog(this)">${esc(sessionLog[nk]||'')}</textarea>`;
      // Alt exercise
      if (ex.alt) html += `<div class="alt-wrap"><div class="alt-label">Alternative</div><div class="alt-name">${esc(ex.alt)}</div></div>`;
      // Coach note
      if (ex.note) html += `<div class="coach-note">${esc(ex.note)}</div>`;
      html += `</div>`;
    });
    html += `</div>`;
  });
  content.innerHTML = html;
}
function handleLog(el) {
  const key = el.dataset.key;
  sessionLog[key] = el.value;
  el.classList.toggle('filled', el.value.trim().length > 0);
  saveSessionLog(activeProgramId, currentDayIdx, sessionLog);
  updateProgress();
}
function updateProgress() {
  const prog = getActiveProgram();
  const day = prog.days[currentDayIdx];
  const total = countSets(day), filled = countFilled(day);
  const pct = total > 0 ? Math.round((filled/total)*100) : 0;
  const fill = document.getElementById('progFill');
  const count = document.getElementById('progCount');
  if (fill) fill.style.width = pct + '%';
  if (count) count.textContent = `${filled}/${total}`;
}
function countSets(day) {
  let n = 0;
  day.blocks.forEach(b => b.exercises.forEach(ex => { if (!ex.superset) n += ex.sets.length; }));
  return n;
}
function countFilled(day) {
  let n = 0;
  day.blocks.forEach(b => b.exercises.forEach(ex => {
    if (!ex.superset) ex.sets.forEach((s, si) => {
      if (setHasData(sessionLog[`${ex.id}_${si}`])) n++;
    });
  }));
  return n;
}
function clearTrackerDay() {
  if (!confirm('Reset this session? This clears the input fields (your saved history is kept).')) return;
  sessionLog = {};
  saveSessionLog(activeProgramId, currentDayIdx, sessionLog);
  renderTrackerDay();
}
function startNextSession() {
  if (!confirm('Start a fresh session for this day? Your logged history is saved; the input fields will clear so you can chase last session\'s numbers.')) return;
  sessionLog = {};
  saveSessionLog(activeProgramId, currentDayIdx, sessionLog);
  renderTrackerDay();
  showToast('Fresh session started', 'success');
}
function finishSession() {
  const filled = countFilled(getActiveProgram().days[currentDayIdx]);
  if (filled === 0) { showToast('Log at least one set first', 'error'); return; }
  const prog = getActiveProgram();
  const day = prog.days[currentDayIdx];
  const now = new Date();
  const entry = {
    progName: prog.name, dayName: day.name,
    date: now.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'}),
    ts: now.getTime(), log: JSON.parse(JSON.stringify(sessionLog)),
    progId: activeProgramId, dayIdx: currentDayIdx
  };
  const hist = getHistory();
  hist.unshift(entry);
  if (hist.length > 80) hist.pop();
  saveHistory(hist);
  // update the per-exercise baseline store + detect PRs
  const prs = [];
  day.blocks.forEach(b => b.exercises.forEach(ex => {
    if (ex.superset) return;
    const sets = ex.sets.map((s, si) => sessionLog[`${ex.id}_${si}`]);
    if (recordExercise(ex.name, sets).pr) prs.push(ex.name);
  }));
  sessionLog.__completed = true;
  saveSessionLog(activeProgramId, currentDayIdx, sessionLog);
  if (navigator.vibrate) navigator.vibrate(prs.length ? [60, 50, 60, 50, 120] : [40, 60, 40]);
  renderTrackerDay();
  if (prs.length) showToast(`🏆 New PR: ${prs[0]}${prs.length > 1 ? ' +' + (prs.length - 1) + ' more' : ''}`, 'success');
  else showToast('Session logged! ✓', 'success');
}
// ─────────────────────────────────────────────
// EXERCISE BANK
// ─────────────────────────────────────────────
function renderBank() {
  renderDataStatus();
  renderEquipTabs();
  filterBank();
}
function renderEquipTabs() {
  const el = document.getElementById('equipTabs');
  if (!el) return;
  const present = presentEquip();
  if (present.length && !present.includes(bankEquip)) bankEquip = present[0];
  el.innerHTML = present.map(id => {
    const n = EXERCISE_BANK.filter(e => e.equip === id).length;
    return `<div class="equip-tab ${bankEquip===id?'active':''}" onclick="setBankEquip('${id}')">${esc(EQUIP_LABELS[id]||id)} <span class="equip-count">${n}</span></div>`;
  }).join('');
}
function setBankEquip(id) {
  bankEquip = id;
  renderEquipTabs();
  filterBank();
}
function filterBank() {
  const q = (document.getElementById('bankSearch')?.value || '').toLowerCase();
  const muscle = document.getElementById('bankFilter')?.value || '';
  const filtered = EXERCISE_BANK.filter(e => {
    if (e.equip !== bankEquip) return false;
    const matchQ = !q || e.name.toLowerCase().includes(q) || e.muscle.includes(q);
    const matchM = !muscle || e.muscle === muscle;
    return matchQ && matchM;
  });
  if (filtered.length === 0) {
    document.getElementById('exerciseList').innerHTML = `<div class="bank-empty">No exercises match this filter. Try a different muscle or search.</div>`;
    return;
  }
  const muscleColors = {chest:'#E74C3C',back:'#3498DB',shoulders:'#E67E22',biceps:'#9B59B6',triceps:'#1ABC9C',quads:'#F39C12',hamstrings:'#D35400',glutes:'#8E44AD',calves:'#27AE60',core:'#2980B9'};
  const label = EQUIP_LABELS[bankEquip] || bankEquip;
  let html = `<div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim);margin-bottom:10px;">${filtered.length} ${esc(String(label).toLowerCase())} exercises</div>`;
  filtered.forEach(ex => {
    const mc = muscleColors[ex.muscle] || '#888';
    const diffBadge = ex.difficulty ? `<div class="diff-badge diff-${ex.difficulty}">${esc(ex.difficulty)}</div>` : '';
    const srcChip = (ex.source && ex.source !== 'builtin')
      ? `<div class="src-chip" title="pulled from ${esc(ex.source)}">web</div>`
      : `<div class="src-chip src-builtin" title="curated coaching entry">★</div>`;
    const thumb = (ex.images && ex.images.length)
      ? `<img class="ex-thumb" src="${esc(ex.images[0])}" alt="" loading="lazy" onerror="this.style.display='none'">` : '';
    const prog = (ex.easier || ex.harder) ? `<div class="progression">
          ${ex.easier?`<div class="prog-step"><b>↓ Easier</b>${esc(ex.easier)}</div>`:''}
          ${ex.harder?`<div class="prog-step"><b>↑ Harder</b>${esc(ex.harder)}</div>`:''}
        </div>` : '';
    html += `<div class="ex-card">
      <div class="ex-card-header" onclick="toggleExCard('${ex.id}')">
        <div style="flex:1">
          <div class="ex-card-name">${esc(ex.name)}</div>
          <div class="ex-card-muscle" style="color:${mc}">${esc(ex.muscle)} · ${esc(EQUIP_LABELS[ex.equip]||ex.equip)}</div>
        </div>
        <div class="ex-badges">
          ${srcChip}
          ${diffBadge}
          <div class="${ex.type==='compound'?'type-compound':'type-isolation'} ex-card-type">${esc(ex.type)}</div>
        </div>
      </div>
      <div class="ex-card-body" id="exbody_${ex.id}">
        ${thumb}
        <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:4px;">
          ${ex.muscles.map(m=>`<span class="muscle-tag">${esc(m)}</span>`).join('')}
        </div>
        ${ex.how ? `<div class="ex-how"><div class="ex-how-title">How to do it</div><div class="ex-how-text">${esc(ex.how)}</div></div>` : ''}
        ${ex.cue ? `<div class="ex-cue">💡 ${esc(ex.cue)}</div>` : ''}
        ${prog}
        <button class="btn btn-outline btn-sm exhist-btn" data-n="${esc(ex.name)}" onclick="event.stopPropagation(); openExHistory(this.dataset.n)">📈 Your history</button>
      </div>
    </div>`;
  });
  document.getElementById('exerciseList').innerHTML = html;
}
function toggleExCard(id) {
  const body = document.getElementById('exbody_' + id);
  if (body) body.classList.toggle('open');
}
// ─────────────────────────────────────────────
// RANDOM GENERATOR
// ─────────────────────────────────────────────
function toggleMuscle(el, muscle) {
  el.classList.toggle('selected');
  if (el.classList.contains('selected')) {
    if (!selectedMuscles.includes(muscle)) selectedMuscles.push(muscle);
  } else {
    selectedMuscles = selectedMuscles.filter(m => m !== muscle);
  }
}
function renderGenEquip() {
  const el = document.getElementById('genEquip');
  if (!el) return;
  const present = presentEquip();
  genEquip = genEquip.filter(id => present.includes(id));
  if (genEquip.length === 0) genEquip = present.filter(id => id === 'dumbbell' || id === 'bodyweight');
  if (genEquip.length === 0) genEquip = present.slice(0, 1);
  const presetsEl = document.getElementById('genEquipPresets');
  if (presetsEl) presetsEl.innerHTML = `<button class="btn btn-ghost btn-sm" onclick="presetEquip('gym')">Full gym</button><button class="btn btn-ghost btn-sm" onclick="presetEquip('home')">Home</button><button class="btn btn-ghost btn-sm" onclick="presetEquip('bw')">Bodyweight</button>`;
  el.innerHTML = present.map(id => `<div class="equip-pill ${genEquip.includes(id) ? 'selected' : ''}" onclick="toggleGenEquip('${id}')">${esc(EQUIP_LABELS[id] || id)}</div>`).join('');
}
function presetEquip(kind) {
  const present = presentEquip();
  if (kind === 'gym') genEquip = present.slice();
  else if (kind === 'home') genEquip = present.filter(id => ['dumbbell','bodyweight','bands','kettlebell'].includes(id));
  else genEquip = present.filter(id => id === 'bodyweight');
  if (genEquip.length === 0) genEquip = present.slice(0, 1);
  renderGenEquip();
}
function toggleGenEquip(id) {
  if (genEquip.includes(id)) genEquip = genEquip.filter(x => x !== id);
  else genEquip.push(id);
  renderGenEquip();
}
function toggleInjury(el, id) {
  el.classList.toggle('selected');
  if (el.classList.contains('selected')) { if (!genInjuries.includes(id)) genInjuries.push(id); }
  else genInjuries = genInjuries.filter(x => x !== id);
}
// Goal-based set/rep/rest schemes; experience nudges the set count
const GOAL_SCHEME = {
  hypertrophy: { sets: 4, reps: '8–12',  rest: '60–90 sec', label: 'Hypertrophy' },
  strength:    { sets: 5, reps: '3–6',   rest: '2–3 min',   label: 'Strength' },
  fatloss:     { sets: 3, reps: '12–15', rest: '30–45 sec', label: 'Fat loss' },
  endurance:   { sets: 3, reps: '15–20', rest: '30–45 sec', label: 'Endurance' }
};
const INJURY_PATTERNS = { knees:['jumping','deep-knee'], lower_back:['hinge','spinal-load'], shoulders:['overhead'], elbows:['elbow-stress'] };
const INJURY_LABELS = { knees:'Knees', lower_back:'Lower back', shoulders:'Shoulders', elbows:'Elbows/wrists' };
function injuryExcludedPatterns(injuries){
  const set = new Set();
  (injuries || []).forEach(i => (INJURY_PATTERNS[i] || []).forEach(p => set.add(p)));
  return set;
}
function allowedByExperience(ex, exp){
  if (exp === 'advanced') return true;
  return ex.difficulty !== 'advanced'; // beginner + intermediate skip advanced movements
}
// ── SMART SPLIT BUILDER ──
// Spread selected muscles across training days so the SAME muscle group never lands
// on consecutive training days when avoidable (muscles want ~48–72h to recover).
const GEN_MUSCLE_ORDER = ['chest','shoulders','triceps','back','biceps','quads','hamstrings','glutes','calves','core'];
function genCap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
const SPLIT_CATS = {
  push: ['chest','shoulders','triceps'],
  pull: ['back','biceps'],
  legs: ['quads','hamstrings','glutes','calves'],
  core: ['core']
};
const CAT_PRIORITY = ['legs','push','pull','core'];
// Sub-focus variants used to differentiate repeated days of the same category
const CAT_VARIANTS = {
  push: [['chest','triceps'], ['shoulders','triceps'], ['chest','shoulders','triceps']],
  pull: [['back','biceps'], ['back'], ['back','biceps']],
  legs: [['quads','calves'], ['hamstrings','glutes'], ['quads','hamstrings','glutes','calves']],
  core: [['core']]
};
function musclesIn(cat, selected){ return SPLIT_CATS[cat].filter(m => selected.includes(m)); }
function orderMuscles(list){ return GEN_MUSCLE_ORDER.filter(m => list.includes(m)); }
function dayLabel(cats, muscles){
  const set = new Set(cats);
  if (set.has('push') && set.has('pull')) return 'Upper Body';
  if (set.has('legs') && set.size > 1) return 'Lower Body';
  if (cats.length === 1){
    const c = cats[0];
    if (c === 'legs'){
      const q = muscles.includes('quads'), p = muscles.includes('hamstrings') || muscles.includes('glutes');
      if (q && !p) return 'Legs · Quads';
      if (p && !q) return 'Legs · Posterior';
      return 'Legs';
    }
    if (c === 'push'){
      const ch = muscles.includes('chest'), sh = muscles.includes('shoulders');
      if (ch && !sh) return 'Push · Chest';
      if (sh && !ch) return 'Push · Shoulders';
      return 'Push';
    }
    if (c === 'pull') return 'Pull';
    if (c === 'core') return 'Core';
  }
  return muscles.map(genCap).join(' + ');
}
// Muscles for the n-th occurrence of a category — cycles variants so repeats differ
function variantMuscles(cat, occ, total, selected){
  const inCat = musclesIn(cat, selected);
  if (total <= 1) return orderMuscles(inCat);
  const variants = CAT_VARIANTS[cat] || [SPLIT_CATS[cat]];
  for (let step = 0; step < variants.length; step++){
    const v = variants[(occ + step) % variants.length].filter(m => selected.includes(m));
    if (v.length) return orderMuscles(v);
  }
  return orderMuscles(inCat);
}
// Order days so the same category is never adjacent (incl. cycle wrap-around) when possible.
// Slot-fill method: place the most frequent category first into every other slot (0,2,4,…
// then 1,3,5,…). Guarantees no two equal neighbours whenever a category isn't over-represented.
function arrangeNoAdjacent(units){
  if (units.length <= 1) return units.slice();
  const byCat = {};
  units.forEach(u => { (byCat[u.cat] = byCat[u.cat] || []).push(u); });
  const cats = Object.keys(byCat).sort((a,b) => byCat[b].length - byCat[a].length);
  const n = units.length;
  const res = new Array(n);
  let pos = 0;
  for (const c of cats){
    for (const u of byCat[c]){
      res[pos] = u;
      pos += 2;
      if (pos >= n) pos = 1;
    }
  }
  return res;
}
// Build T training days, spaced so muscle groups aren't worked on back-to-back days
function buildSplit(selected, T){
  const present = CAT_PRIORITY.filter(c => musclesIn(c, selected).length > 0);
  if (present.length === 0) return [];
  if (T <= 1) return [{ label: 'Full Body', muscles: orderMuscles(selected) }];
  let primary = present.filter(c => c !== 'core');
  if (primary.length === 0) primary = present.slice();
  const coreSelected = present.includes('core');

  // Fewer days than primary categories → merge into Upper / Lower so nothing is dropped
  if (T < primary.length){
    const upper = orderMuscles([...musclesIn('push', selected), ...musclesIn('pull', selected)]);
    const lower = orderMuscles([...musclesIn('legs', selected), ...musclesIn('core', selected)]);
    let groups = [];
    if (upper.length) groups.push({ cats: ['push','pull'], muscles: upper });
    if (lower.length) groups.push({ cats: ['legs'], muscles: lower });
    while (groups.length < T) groups.push({ cats: ['push','pull'], muscles: upper.length ? upper : lower });
    return groups.slice(0, T).map(g => ({ label: dayLabel(g.cats, g.muscles), muscles: g.muscles }));
  }

  // Each primary category gets ≥1 day; spare days go to the biggest groups (legs/push earn 2nd days)
  const counts = {}; primary.forEach(c => counts[c] = 1);
  const reserveCore = coreSelected && !primary.includes('core');
  let extra = T - primary.length - (reserveCore ? 1 : 0);
  const bySize = primary.slice().sort((a,b) =>
    musclesIn(b, selected).length - musclesIn(a, selected).length ||
    CAT_PRIORITY.indexOf(a) - CAT_PRIORITY.indexOf(b));
  let gi = 0, guard = 0;
  while (extra > 0 && guard++ < 60){
    const c = bySize[gi % bySize.length];
    if (counts[c] < 3){ counts[c]++; extra--; }
    gi++;
  }
  let units = [];
  primary.forEach(c => { for (let k = 0; k < counts[c]; k++) units.push({ cat: c }); });
  if (reserveCore && units.length < T) units.push({ cat: 'core' });
  while (units.length < T){ const c = bySize[0]; counts[c]++; units.push({ cat: c }); }
  units = units.slice(0, T);
  units = arrangeNoAdjacent(units);

  const occ = {};
  const days = units.map(u => {
    const n = (occ[u.cat] = (occ[u.cat] || 0)); occ[u.cat]++;
    return { cats: [u.cat], muscles: variantMuscles(u.cat, n, counts[u.cat] || 1, selected) };
  });
  // attach core to the lightest day if it's selected but never got its own day
  if (coreSelected && !days.some(d => d.cats[0] === 'core')){
    let light = days[0];
    days.forEach(d => { if (d.muscles.length < light.muscles.length) light = d; });
    if (!light.muscles.includes('core')) light.muscles = orderMuscles([...light.muscles, 'core']);
  }
  return days.map(d => ({ label: dayLabel(d.cats, d.muscles), muscles: d.muscles }));
}
// Evenly interleave T training + R rest days into a repeating cycle
function interleaveCycle(T, R) {
  const total = T + R, seq = [];
  let placed = 0;
  for (let i = 0; i < total; i++) {
    const target = Math.round((i + 1) * T / total);
    if (placed < target) { seq.push('train'); placed++; }
    else seq.push('rest');
  }
  return seq;
}
// Pick exercises for one day, honouring equipment, experience, and injury limitations
function pickDayExercises(dayMuscles, count, equipList, opts) {
  opts = opts || {};
  const banned = injuryExcludedPatterns(opts.injuries);
  const pool = EXERCISE_BANK.filter(e =>
    equipList.includes(e.equip) &&
    dayMuscles.includes(e.muscle) &&
    allowedByExperience(e, opts.exp) &&
    !(e.patterns || []).some(p => banned.has(p))
  );
  if (pool.length === 0) return [];
  // prefer curated coaching entries, keep variety by shuffling within each tier
  const builtin = pool.filter(e => e.source === 'builtin').sort(() => Math.random() - 0.5);
  const web = pool.filter(e => e.source !== 'builtin').sort(() => Math.random() - 0.5);
  const ordered = [...builtin, ...web];
  const picked = [];
  dayMuscles.forEach(m => {
    if (picked.length >= count) return;
    const ex = ordered.find(e => e.muscle === m && !picked.includes(e));
    if (ex) picked.push(ex);
  });
  ordered.forEach(e => { if (picked.length < count && !picked.includes(e)) picked.push(e); });
  return picked.slice(0, count);
}
function generateWeeklyPlan() {
  if (genEquip.length === 0) { showToast('Pick at least one piece of equipment', 'error'); return; }
  if (selectedMuscles.length === 0) { showToast('Select at least one muscle group', 'error'); return; }
  const T = parseInt(document.getElementById('genTrainDays').value, 10);
  const R = parseInt(document.getElementById('genRestDays').value, 10);
  const count = parseInt(document.getElementById('genCount').value, 10);
  const goal = document.getElementById('genGoal').value;
  const exp = document.getElementById('genExp').value;
  generatedMeta = { goal, exp, injuries: genInjuries.slice(), equip: genEquip.slice() };
  const split = buildSplit(selectedMuscles, T);
  if (split.length === 0) { showToast('No muscles selected', 'error'); return; }
  const training = split.map(d => ({
    label: d.label,
    muscles: d.muscles,
    exercises: pickDayExercises(d.muscles, count, genEquip, { exp, injuries: generatedMeta.injuries })
  }));
  if (training.every(d => d.exercises.length === 0)) {
    showToast('No exercises fit this equipment + limitations — loosen the filters', 'error'); return;
  }
  const seq = interleaveCycle(T, R);
  let ti = 0;
  generatedPlan = seq.map(slot => slot === 'train'
    ? Object.assign({type: 'train'}, training[ti++])
    : {type: 'rest'});
  renderPlanResult();
}
function renderPlanResult() {
  if (generatedPlan.length === 0) return;
  const T = generatedPlan.filter(d => d.type === 'train').length;
  const R = generatedPlan.length - T;
  const meta = generatedMeta || {};
  const scheme = GOAL_SCHEME[meta.goal] || GOAL_SCHEME.hypertrophy;
  const equipNames = (meta.equip || genEquip).map(id => EQUIP_LABELS[id] || id).join(' + ');
  const injNames = (meta.injuries || []).map(i => INJURY_LABELS[i] || i);
  let html = `<div style="font-family:'Bebas Neue',sans-serif;font-size:24px;letter-spacing:.06em;margin-bottom:10px;color:var(--text)">Your <span style="color:var(--gold)">Plan</span></div>`;
  html += `<div class="plan-summary">${scheme.label} · ${genCap(meta.exp || '')} · ${generatedPlan.length}-day cycle (${T} training / ${R} rest)<br>${scheme.sets} sets × ${scheme.reps} reps · ${scheme.rest} rest · equipment: ${esc(equipNames)}${injNames.length ? '<br>avoiding: ' + esc(injNames.join(', ')) : ''}</div>`;
  generatedPlan.forEach((d, i) => {
    if (d.type === 'rest') {
      html += `<div class="plan-day rest"><div class="plan-day-hdr"><div class="plan-day-num">Day ${i+1}</div><div class="plan-day-label">Rest Day</div><div class="plan-day-cat">Recovery</div></div></div>`;
      return;
    }
    html += `<div class="plan-day"><div class="plan-day-hdr"><div class="plan-day-num">Day ${i+1}</div><div class="plan-day-label">${esc(d.label)}</div><div class="plan-day-cat">${d.exercises.length} exercises</div></div>`;
    if (d.exercises.length === 0) {
      html += `<div class="plan-rest-msg">No matching exercises for these muscles with the current filters.</div>`;
    } else {
      d.exercises.forEach(ex => {
        html += `<div class="plan-ex"><span>${esc(ex.name)}</span><span class="pe-m">${esc(ex.muscle)} · ${esc(EQUIP_LABELS[ex.equip] || ex.equip)}</span></div>`;
      });
    }
    html += `</div>`;
  });
  html += `<div class="gen-actions">
    <button class="btn btn-gold" onclick="savePlan()">💾 Save as Program</button>
    <button class="btn btn-outline" onclick="generateWeeklyPlan()">🎲 Regenerate</button>
    <button class="btn btn-ghost" onclick="discardGenerated()">Discard</button>
  </div>`;
  document.getElementById('genResult').innerHTML = html;
}
function makePlanSets(ex, goal, exp) {
  const sc = GOAL_SCHEME[goal] || GOAL_SCHEME.hypertrophy;
  const n = Math.max(2, Math.min(6, sc.sets + (exp === 'beginner' ? -1 : exp === 'advanced' ? 1 : 0)));
  const weight = ex.equip === 'bodyweight' ? 'BW' : '—';
  return Array.from({length: n}, () => ({ reps: sc.reps, weight, rpe: '8' }));
}
function savePlan() {
  if (generatedPlan.length === 0) return;
  const name = prompt('Name this plan:', 'My Weekly Plan');
  if (!name) return;
  const meta = generatedMeta || {};
  const scheme = GOAL_SCHEME[meta.goal] || GOAL_SCHEME.hypertrophy;
  const days = generatedPlan.map((d, i) => {
    if (d.type === 'rest') {
      return {name: 'Rest Day', shortName: `Day ${i+1}`, rest: true, warmup: [], blocks: []};
    }
    const exs = d.exercises.map((ex, idx) => ({
      id: ex.id,
      label: String.fromCharCode(65 + idx),
      name: ex.name,
      muscle: ex.muscle,
      sets: makePlanSets(ex, meta.goal, meta.exp),
      note: ex.cue || (ex.how ? ex.how.slice(0, 220) : ''),
      alt: ''
    }));
    return {
      name: d.label,
      shortName: `Day ${i+1}`,
      warmup: ['5 min light cardio or movement prep','Dynamic stretches for the day\'s muscles'],
      blocks: exs.length > 0 ? [{tag:'Main Work', title:d.label, rest:`${scheme.rest} between sets`, exercises:exs}] : []
    };
  });
  const desc = `${scheme.label} · ${genCap(meta.exp || '')} · generated plan`;
  const prog = { id: 'plan_' + Date.now(), name, desc, days };
  const progs = getPrograms();
  progs.push(prog);
  savePrograms(progs);
  document.getElementById('genResult').innerHTML = '';
  generatedPlan = []; generatedMeta = null;
  showToast('Plan saved to Programs!', 'success');
  showScreen('programs');
}
function discardGenerated() {
  generatedPlan = [];
  document.getElementById('genResult').innerHTML = '';
}
// ─────────────────────────────────────────────
// HISTORY + PROGRESS
// ─────────────────────────────────────────────
// ═════════════════════════════════════════════
// STATS (charts + per-exercise history + body metrics)
// ═════════════════════════════════════════════
let _ch = {};                 // live Chart.js instances, by key
let statsTab = 'charts';
let currentStatLift = null;   // exKey of selected lift
let currentStatLiftName = '';
let statMuscleFilter = '';
let statsFrom = null, statsTo = null;   // charts date-range filter (ms; null = unbounded)
function getQuickLog(){ try{ return JSON.parse(localStorage.getItem('ge_quicklog')||'[]'); }catch(e){ return []; } }
function saveQuickLog(a){ try{ localStorage.setItem('ge_quicklog', JSON.stringify(a)); }catch(e){} }
function ymd(ts){ const d=new Date(ts); const p=n=>String(n).padStart(2,'0'); return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate()); }
function ymdToTs(str, end){ if(!str) return null; const a=String(str).split('-').map(Number); const dt=new Date(a[0],(a[1]||1)-1,a[2]||1); dt.setHours(end?23:0, end?59:0, end?59:0, end?999:0); return dt.getTime(); }
function inStatsRange(ts){ if(statsFrom!=null && ts<statsFrom) return false; if(statsTo!=null && ts>statsTo) return false; return true; }
function cssVar(n){ return (getComputedStyle(document.documentElement).getPropertyValue(n)||'').trim() || '#C9A84C'; }
function chartBase(){
  const tick = '#888', grid = 'rgba(255,255,255,0.06)';
  return { responsive:true, maintainAspectRatio:false, animation:{duration:300},
    plugins:{ legend:{display:false} },
    scales:{ x:{ ticks:{color:tick, font:{size:9}, maxRotation:0, autoSkip:true, maxTicksLimit:7}, grid:{color:grid} },
             y:{ ticks:{color:tick, font:{size:9}}, grid:{color:grid} } } };
}
function weekKey(ts){ const d=new Date(ts); const dow=(d.getDay()+6)%7; const m=new Date(d); m.setDate(d.getDate()-dow); m.setHours(0,0,0,0); return m.getTime(); }
function weekLabel(ts){ const d=new Date(ts); return (d.getMonth()+1)+'/'+d.getDate(); }
function fmtBigVol(lb){ const v=toDisplay(lb)||0; return v>=10000 ? (Math.round(v/100)/10)+'k' : Math.round(v).toLocaleString(); }
// Reconstruct per-exercise series + per-session volume from logged history.
function buildStats(){
  const hist = getHistory().slice().sort((a,b)=> a.ts - b.ts);
  const byEx = {}; const sessions = [];
  hist.forEach(entry => {
    const prog = getProgramById(entry.progId);
    if(!prog || !prog.days[entry.dayIdx]) return;
    let totalVol = 0; const byMuscle = {};
    prog.days[entry.dayIdx].blocks.forEach(b => b.exercises.forEach(ex => {
      if(ex.superset) return;
      const sets = ex.sets.map((s,si)=> coerceSet(entry.log[`${ex.id}_${si}`])).filter(s=> s.w!=null || s.r!=null);
      if(!sets.length) return;
      const e1 = Math.max(0, ...sets.map(s=> e1rm(s.w, s.r||1)));
      const topW = Math.max(0, ...sets.map(s=> s.w||0));
      const best = sets.reduce((a,s)=> (e1rm(s.w,s.r||1) >= e1rm(a.w,a.r||1) ? s : a), sets[0]);
      const vol = sets.reduce((sum,s)=> sum + ((s.w||0)*(s.r||0)), 0);
      const k = exKey(ex.name);
      if(!byEx[k]) byEx[k] = { name: ex.name, muscle: ex.muscle||'', timed: exIsTimed(ex), points: [] };
      byEx[k].points.push({ ts: entry.ts, e1rm: Math.round(e1), topW, reps: best.r!=null?best.r:null, vol: Math.round(vol) });
      totalVol += vol;
      const g = majorMuscle(ex.muscle);
      byMuscle[g] = (byMuscle[g]||0) + vol;
    }));
    sessions.push({ ts: entry.ts, totalVol: Math.round(totalVol), byMuscle });
  });
  // Off-plan Quick Logs feed the per-exercise series (PRs / 1RM trend / history) but NOT sessions or volume.
  getQuickLog().forEach(q => {
    const sets = (q.sets||[]).map(coerceSet).filter(s=> s.w!=null || s.r!=null);
    if(!sets.length) return;
    const e1 = Math.max(0, ...sets.map(s=> e1rm(s.w, s.r||1)));
    const topW = Math.max(0, ...sets.map(s=> s.w||0));
    const best = sets.reduce((a,s)=> (e1rm(s.w,s.r||1) >= e1rm(a.w,a.r||1) ? s : a), sets[0]);
    const vol = sets.reduce((sum,s)=> sum + ((s.w||0)*(s.r||0)), 0);
    const k = exKey(q.name);
    if(!byEx[k]) byEx[k] = { name: q.name, muscle: q.muscle||'', timed:false, points: [] };
    byEx[k].points.push({ ts: q.ts, e1rm: Math.round(e1), topW, reps: best.r!=null?best.r:null, vol: Math.round(vol), quick:true });
  });
  Object.values(byEx).forEach(e => e.points.sort((a,b)=> a.ts - b.ts));
  return { byEx, sessions };
}
function weekStreak(sessions){
  if(!sessions.length) return 0;
  const weeks = [...new Set(sessions.map(s=> weekKey(s.ts)))].sort((a,b)=> b-a);
  const WEEK = 7*864e5; let streak = 0; let cursor = weekKey(Date.now());
  if(weeks[0] < cursor) cursor = weeks[0];
  for(const w of weeks){ if(w===cursor){ streak++; cursor -= WEEK; } else if(w < cursor){ break; } }
  return streak;
}
function setStatsTab(t){
  statsTab = t;
  document.getElementById('sttab-charts').classList.toggle('active', t==='charts');
  document.getElementById('sttab-body').classList.toggle('active', t==='body');
  document.getElementById('statsCharts').style.display = t==='charts' ? '' : 'none';
  document.getElementById('statsBody').style.display   = t==='body'   ? '' : 'none';
  renderStats();
}
function renderStats(){ if(statsTab==='body') renderStatsBody(); else renderStatsCharts(); }
function renderStatsCharts(){
  const host = document.getElementById('statsCharts');
  if(typeof Chart === 'undefined'){
    host.innerHTML = `<div class="stats-empty">📈 Charts need one online load. Open the app while connected to the internet, then they'll work offline from then on.</div>`;
    return;
  }
  const st = buildStats();
  const exKeys = Object.keys(st.byEx);
  if(!st.sessions.length && !exKeys.length){
    host.innerHTML = `<div class="ql-cta"><div>No data yet — finish a workout in the <b>Tracker</b>, or log a one-off lift for a PR.</div><button class="btn btn-gold btn-sm" onclick="openQuickLog()">⚡ Quick Log</button></div>`;
    return;
  }
  // First view defaults to the current training week (Monday → today).
  if(statsFrom==null && statsTo==null){ statsFrom = weekKey(Date.now()); statsTo = ymdToTs(ymd(Date.now()), true); }
  // The 1RM chart only makes sense for weighted lifts (skip bodyweight + timed holds).
  const liftKeys = exKeys.filter(k=> !st.byEx[k].timed && st.byEx[k].points.some(p=> p.e1rm>0)).sort((a,b)=> st.byEx[a].name.localeCompare(st.byEx[b].name));
  if(!currentStatLift || !liftKeys.includes(currentStatLift)) currentStatLift = liftKeys[0] || null;
  const store = getExStore();
  const prAll = Object.values(store).filter(e=> e.prDate).sort((a,b)=> new Date(b.prDate) - new Date(a.prDate));
  const inSessions = st.sessions.filter(s=> inStatsRange(s.ts));
  const totalVol = inSessions.reduce((s,x)=> s + x.totalVol, 0);
  const liftOpts = liftKeys.length
    ? liftKeys.map(k=> `<option value="${esc(k)}" ${k===currentStatLift?'selected':''}>${esc(st.byEx[k].name)}</option>`).join('')
    : `<option value="">— no weighted lifts yet —</option>`;
  const groups = ['Chest','Back','Shoulders','Arms','Legs','Core'];
  const muscleOpts = `<option value="">All muscles</option>` + groups.map(g=> `<option value="${g}" ${g===statMuscleFilter?'selected':''}>${g}</option>`).join('');
  const prRows = prAll.length
    ? prAll.slice(0,6).map(e=> `<div class="pr-row"><div class="pr-name">${esc(e.name)}</div><div class="pr-val">${esc(fmtWeightLb(e.e1rm))} <span>e1RM</span></div><div class="pr-date">${esc(e.prDate)}</div></div>`).join('')
    : `<div class="pr-empty">No PRs yet — keep logging.</div>`;
  host.innerHTML = `
    <div class="range-bar">
      <div class="range-field"><label>From</label><input type="date" id="statFrom" value="${statsFrom!=null?ymd(statsFrom):''}" onchange="setStatsRange()"></div>
      <div class="range-field"><label>To</label><input type="date" id="statTo" value="${statsTo!=null?ymd(statsTo):''}" onchange="setStatsRange()"></div>
      <span class="suggest-link range-reset" onclick="resetStatsRange()">↺ Full range</span>
    </div>
    <button class="btn btn-gold ql-btn" onclick="openQuickLog()">⚡ Log a PR / 1RM attempt</button>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-num">${inSessions.length}</div><div class="stat-lbl">Sessions</div></div>
      <div class="stat-card"><div class="stat-num">${weekStreak(st.sessions)}</div><div class="stat-lbl">Week streak</div></div>
      <div class="stat-card"><div class="stat-num">${fmtBigVol(totalVol)}</div><div class="stat-lbl">Volume ${esc(unitLabel())}</div></div>
      <div class="stat-card"><div class="stat-num">${prAll.length}</div><div class="stat-lbl">PRs</div></div>
    </div>
    <div class="chart-card">
      <div class="chart-head"><div class="chart-title">📈 Estimated 1RM</div><select class="filter-select" id="statLift" onchange="onStatLift()">${liftOpts}</select></div>
      <div class="chart-wrap"><canvas id="chart1rm"></canvas></div>
      <div class="chart-foot"><span class="suggest-link" onclick="openCurrentLiftHistory()">View full history →</span></div>
    </div>
    <div class="chart-card">
      <div class="chart-head"><div class="chart-title">📊 Weekly volume</div><select class="filter-select" id="statMuscle" onchange="onStatMuscle()">${muscleOpts}</select></div>
      <div class="chart-wrap"><canvas id="chartVol"></canvas></div>
    </div>
    <div class="chart-card">
      <div class="chart-head"><div class="chart-title">🗓 Sessions / week</div></div>
      <div class="chart-wrap chart-wrap-sm"><canvas id="chartFreq"></canvas></div>
    </div>
    <div class="chart-card">
      <div class="chart-title">🏆 Recent PRs</div>
      <div class="pr-list">${prRows}</div>
    </div>`;
  drawLiftChart(); drawVolChart(); drawFreqChart();
}
function setStatsRange(){
  const f=document.getElementById('statFrom'), t=document.getElementById('statTo');
  let from = (f && f.value) ? ymdToTs(f.value, false) : null;
  let to   = (t && t.value) ? ymdToTs(t.value, true)  : null;
  if(from!=null && to!=null && from>to){ const tmp=from; from=to; to=tmp; }   // swap if reversed
  statsFrom = from; statsTo = to;
  drawLiftChart(); drawVolChart(); drawFreqChart();
}
function resetStatsRange(){
  const st = buildStats(); const allTs = [];
  st.sessions.forEach(s=> allTs.push(s.ts));
  Object.values(st.byEx).forEach(e=> e.points.forEach(p=> allTs.push(p.ts)));
  statsFrom = allTs.length ? ymdToTs(ymd(Math.min(...allTs)), false) : null;
  statsTo   = ymdToTs(ymd(Date.now()), true);
  const f=document.getElementById('statFrom'), t=document.getElementById('statTo');
  if(f) f.value = statsFrom!=null?ymd(statsFrom):'';
  if(t) t.value = statsTo!=null?ymd(statsTo):'';
  drawLiftChart(); drawVolChart(); drawFreqChart();
}
function onStatLift(){ const el=document.getElementById('statLift'); if(el) currentStatLift = el.value; drawLiftChart(); }
function onStatMuscle(){ const el=document.getElementById('statMuscle'); if(el) statMuscleFilter = el.value; drawVolChart(); }
function drawLiftChart(){
  const st = buildStats();
  const liftKeys = Object.keys(st.byEx).filter(k=> !st.byEx[k].timed && st.byEx[k].points.some(p=> p.e1rm>0));
  if(!currentStatLift || !liftKeys.includes(currentStatLift)) currentStatLift = liftKeys[0]||null;
  const ex = currentStatLift ? st.byEx[currentStatLift] : null;
  currentStatLiftName = ex ? ex.name : '';
  const ctx = document.getElementById('chart1rm'); if(!ctx) return;
  if(_ch.lift){ _ch.lift.destroy(); _ch.lift=null; }
  if(!ex) return;
  const pts = ex.points.filter(p=> inStatsRange(p.ts));
  if(!pts.length) return;
  _ch.lift = new Chart(ctx, { type:'line',
    data:{ labels: pts.map(p=> new Date(p.ts).toLocaleDateString(undefined,{month:'short',day:'numeric'})),
      datasets:[{ data: pts.map(p=> Math.round(toDisplay(p.e1rm))), borderColor: cssVar('--gold'), backgroundColor:'rgba(201,168,76,0.13)', fill:true, tension:0.25, pointRadius:3, pointBackgroundColor:cssVar('--gold'), borderWidth:2 }] },
    options: Object.assign(chartBase(), { plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:c=> `${c.parsed.y} ${unitLabel()} e1RM` } } } }) });
}
function drawVolChart(){
  const st = buildStats(); const wk = {};
  st.sessions.filter(s=> inStatsRange(s.ts)).forEach(s=>{ const k=weekKey(s.ts); wk[k] = (wk[k]||0) + (statMuscleFilter ? (s.byMuscle[statMuscleFilter]||0) : s.totalVol); });
  const weeks = Object.keys(wk).map(Number).sort((a,b)=> a-b);
  const ctx = document.getElementById('chartVol'); if(!ctx) return;
  if(_ch.vol){ _ch.vol.destroy(); }
  _ch.vol = new Chart(ctx, { type:'bar',
    data:{ labels: weeks.map(weekLabel), datasets:[{ data: weeks.map(w=> Math.round(toDisplay(wk[w]))), backgroundColor: cssVar('--gold'), borderRadius:3 }] },
    options: Object.assign(chartBase(), { scales:{ x: chartBase().scales.x, y: Object.assign(chartBase().scales.y, {beginAtZero:true}) }, plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:c=> `${c.parsed.y.toLocaleString()} ${unitLabel()}` } } } }) });
}
function drawFreqChart(){
  const st = buildStats(); const wk = {};
  st.sessions.filter(s=> inStatsRange(s.ts)).forEach(s=>{ const k=weekKey(s.ts); wk[k] = (wk[k]||0) + 1; });
  const weeks = Object.keys(wk).map(Number).sort((a,b)=> a-b);
  const ctx = document.getElementById('chartFreq'); if(!ctx) return;
  if(_ch.freq){ _ch.freq.destroy(); }
  _ch.freq = new Chart(ctx, { type:'bar',
    data:{ labels: weeks.map(weekLabel), datasets:[{ data: weeks.map(w=> wk[w]), backgroundColor: cssVar('--green'), borderRadius:3 }] },
    options: Object.assign(chartBase(), { scales:{ x: chartBase().scales.x, y: Object.assign(chartBase().scales.y, {beginAtZero:true, ticks:{precision:0, color:'#888', font:{size:9}}}) }, plugins:{ legend:{display:false} } }) });
}
function openCurrentLiftHistory(){ openExHistory(currentStatLiftName); }
function openExHistory(name){
  if(!name){ showToast('No history yet for this lift',''); return; }
  const st = buildStats(); const ex = st.byEx[exKey(name)];
  document.getElementById('exHistTitle').textContent = name;
  const body = document.getElementById('exHistBody');
  if(_ch.exh){ _ch.exh.destroy(); _ch.exh=null; }
  if(!ex || !ex.points.length){
    body.innerHTML = `<div class="stats-empty">No logged sessions for ${esc(name)} yet.</div>`;
    document.getElementById('exHistModal').classList.add('visible');
    return;
  }
  const kind = ex.timed ? 'timed' : (ex.points.some(p=> p.e1rm>0) ? 'loaded' : 'bw');
  const metric = p => kind==='loaded' ? Math.round(toDisplay(p.e1rm)) : (p.reps||0);
  const best = Math.max(...ex.points.map(metric));
  const rowMain = p => kind==='timed' ? `${p.reps!=null?p.reps:0}s hold`
    : kind==='loaded' ? `top ${fmtWeightLb(p.topW)}${p.reps?' × '+p.reps:''}`
    : `BW × ${p.reps!=null?p.reps:0}`;
  const rowVal = p => kind==='timed' ? `${p.reps!=null?p.reps:0}s` : kind==='loaded' ? fmtWeightLb(p.e1rm) : `${p.reps!=null?p.reps:0} reps`;
  const rows = ex.points.slice().sort((a,b)=> b.ts-a.ts).map(p=>{
    const isPR = metric(p)===best && best>0;
    return `<div class="exh-row ${isPR?'pr':''}"><div class="exh-date">${esc(new Date(p.ts).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}))}</div><div class="exh-sets">${esc(rowMain(p))}${p.quick?' <span class="exh-tag">quick</span>':''}</div><div class="exh-e1">${esc(rowVal(p))}${isPR?' 🏆':''}</div></div>`;
  }).join('');
  body.innerHTML = `<div class="chart-wrap chart-wrap-sm"><canvas id="exHistChart"></canvas></div><div class="exh-list">${rows}</div>`;
  document.getElementById('exHistModal').classList.add('visible');
  if(typeof Chart!=='undefined'){
    const ctx = document.getElementById('exHistChart');
    const pts = ex.points;
    const unitTxt = kind==='timed' ? 's' : kind==='loaded' ? unitLabel() : 'reps';
    _ch.exh = new Chart(ctx, { type:'line',
      data:{ labels: pts.map(p=> new Date(p.ts).toLocaleDateString(undefined,{month:'short',day:'numeric'})),
        datasets:[{ data: pts.map(metric), borderColor: cssVar('--gold'), backgroundColor:'rgba(201,168,76,0.13)', fill:true, tension:0.25, pointRadius:2, borderWidth:2 }] },
      options: Object.assign(chartBase(), { plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:c=> `${c.parsed.y} ${unitTxt}` } } } }) });
  }
}
// ── Quick Log: log any lift (in or out of the active program) for a PR / 1RM attempt ──
let quickSel = null;   // {name, muscle, equip} or null while picking
function openQuickLog(){
  quickSel = null;
  document.getElementById('quickLogModal').classList.add('visible');
  renderQuickLog();
  setTimeout(()=>{ const s=document.getElementById('quickSearch'); if(s) s.focus(); }, 60);
}
function renderQuickLog(){
  const body = document.getElementById('quickLogBody');
  if(!quickSel){
    body.innerHTML = `
      <div class="ql-help">Pick any exercise — in your program or not — and log your attempt. It lands in your PRs, the 1RM trend, and that lift's history (but not your weekly-volume or session charts).</div>
      <input type="text" class="form-input" id="quickSearch" placeholder="Search exercises…" autocomplete="off" oninput="renderQuickList()">
      <div class="quick-list" id="quickList"></div>`;
    renderQuickList();
  } else {
    const rec = exRecord(quickSel.name);
    const best = (rec && rec.e1rm) ? `Current best: <b>${esc(fmtWeightLb(rec.e1rm))} e1RM</b> — beat it!` : `No record yet — set the first!`;
    body.innerHTML = `
      <div class="ql-selected">
        <div><div class="ql-name">${esc(quickSel.name)}</div><div class="ql-best">${best}</div></div>
        <button class="btn btn-ghost btn-sm" onclick="quickReselect()">Change</button>
      </div>
      <div class="ql-sets">
        ${[0,1,2].map(i=>`<div class="ql-setrow"><div class="ql-setn">Set ${i+1}</div><input class="form-input" id="qlw_${i}" inputmode="decimal" placeholder="wt (${esc(unitLabel())})"><input class="form-input" id="qlr_${i}" inputmode="numeric" placeholder="reps"></div>`).join('')}
      </div>
      <div class="ql-hint">Log <b>1 rep</b> for a true 1-rep max. Leave weight blank for a bodyweight lift.</div>
      <button class="btn btn-gold" style="width:100%" onclick="quickLogSave()">Save lift</button>`;
  }
}
function renderQuickList(){
  const el = document.getElementById('quickList'); if(!el) return;
  const raw = (document.getElementById('quickSearch').value||'').trim();
  const q = raw.toLowerCase();
  let matches = EXERCISE_BANK;
  if(q) matches = EXERCISE_BANK.filter(e=> e.name.toLowerCase().includes(q) || (e.muscle||'').toLowerCase().includes(q));
  let html = matches.slice(0,40).map(e=> `<div class="quick-row" onclick="selectQuick('${e.id}')"><div class="addex-name">${esc(e.name)}</div><div class="addex-meta">${esc(e.muscle)} · ${esc(EQUIP_LABELS[e.equip]||e.equip)}</div></div>`).join('');
  if(raw) html += `<div class="quick-row quick-custom" onclick="useCustomQuick()">＋ Use “<b>${esc(raw)}</b>” as a custom lift</div>`;
  el.innerHTML = html || `<div class="bank-empty">No matches — type a name and add it as a custom lift.</div>`;
}
function selectQuick(id){ const e = EXERCISE_BANK.find(x=> x.id===id); if(!e) return; quickSel = {name:e.name, muscle:e.muscle||'', equip:e.equip||''}; renderQuickLog(); }
function useCustomQuick(){ const v=(document.getElementById('quickSearch').value||'').trim(); if(!v) return; quickSel = {name:v, muscle:'', equip:''}; renderQuickLog(); }
function quickReselect(){ quickSel = null; renderQuickLog(); }
function quickLogSave(){
  if(!quickSel) return;
  const sets = [];
  for(let i=0;i<3;i++){
    const rEl=document.getElementById('qlr_'+i); const r=parseInt((rEl&&rEl.value)||'',10);
    if(isNaN(r) || r<=0) continue;
    const wEl=document.getElementById('qlw_'+i); const w=fromDisplay((wEl&&wEl.value)||'');
    sets.push({ w: (w!=null?w:null), r });
  }
  if(!sets.length){ showToast('Enter at least one set (reps required)',''); return; }
  const res = recordExercise(quickSel.name, sets);
  const ql = getQuickLog();
  ql.push({ ts: Date.now(), name: quickSel.name, muscle: quickSel.muscle||'', equip: quickSel.equip||'', sets: sets.map(s=>({w:s.w, r:s.r})) });
  saveQuickLog(ql);
  closeModal('quickLogModal');
  showToast(res.pr ? `🏆 New PR — ${quickSel.name}!` : `Logged ${quickSel.name} ✓`, 'success');
  if(currentScreen==='stats') renderStats();
}
const BODY_METRICS = [['waist','Waist','W'],['chest','Chest','C'],['arm','Arms','A'],['thigh','Thighs','T']];
function renderStatsBody(){
  const host = document.getElementById('statsBody');
  const body = getBody().slice().sort((a,b)=> a.ts-b.ts);
  const prof = getProfile()||{};
  const lastBw = body.length ? body[body.length-1].bw : (prof.bw!=null?prof.bw:null);
  host.innerHTML = `
    <div class="chart-card">
      <div class="chart-title">⚖️ Log today</div>
      <div class="body-form">
        <div class="body-field"><label>Bodyweight (${esc(unitLabel())})</label><input id="bwIn" inputmode="decimal" class="form-input" placeholder="${lastBw!=null?dispNum(lastBw):'e.g. 175'}"></div>
        ${BODY_METRICS.map(([k,lbl])=> `<div class="body-field"><label>${lbl} (${esc(lenUnit())})</label><input id="m_${k}" inputmode="decimal" class="form-input" placeholder="optional"></div>`).join('')}
      </div>
      <button class="btn btn-gold" style="width:100%;margin-top:12px" onclick="logBody()">Save entry</button>
      <div class="body-note">Measurements are optional. Saving a bodyweight also updates your profile, so starting-weight suggestions stay current.</div>
    </div>
    ${ body.length ? `
    <div class="chart-card">
      <div class="chart-head"><div class="chart-title">📉 Trend</div><select class="filter-select" id="bodyMetric" onchange="drawBodyChart()">
        <option value="bw">Bodyweight</option>
        ${BODY_METRICS.map(([k,lbl])=> `<option value="${k}">${lbl}</option>`).join('')}
      </select></div>
      <div class="chart-wrap"><canvas id="bodyChart"></canvas></div>
    </div>
    <div class="chart-card"><div class="chart-title">History</div><div class="body-list">${ body.slice().reverse().map(bodyRow).join('') }</div></div>
    ` : `<div class="stats-empty">Log your bodyweight above to start a trend.</div>` }`;
  if(body.length && typeof Chart!=='undefined') drawBodyChart();
}
function bodyRow(e){
  const bits = [`${dispNum(toDisplay(e.bw))} ${unitLabel()}`];
  BODY_METRICS.forEach(([k,,abbr])=>{ if(e.m && e.m[k]!=null) bits.push(`${abbr} ${lenToDisp(e.m[k])}${lenUnit()}`); });
  return `<div class="body-hrow"><div class="body-hdate">${esc(new Date(e.ts).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}))}</div><div class="body-hvals">${esc(bits.join(' · '))}</div></div>`;
}
function logBody(){
  const bw = fromDisplay(document.getElementById('bwIn').value);
  const m = {};
  BODY_METRICS.forEach(([k])=>{ const v = lenFromInput(document.getElementById('m_'+k).value); if(v!=null) m[k]=v; });
  if(bw==null && !Object.keys(m).length){ showToast('Enter a weight or a measurement',''); return; }
  const arr = getBody();
  const carryBw = arr.length ? arr[arr.length-1].bw : null;
  const now = new Date();
  arr.push({ ts: now.getTime(), date: now.toLocaleDateString(), bw: bw!=null ? bw : carryBw, m });
  saveBody(arr);
  if(bw!=null){ const p = getProfile()||{}; p.bw = bw; if(!p.exp) p.exp='beginner'; saveProfile(p); }
  showToast('Body entry saved ✓','success');
  renderStatsBody();
}
function drawBodyChart(){
  const sel = document.getElementById('bodyMetric'); const metric = sel ? sel.value : 'bw';
  const body = getBody().slice().sort((a,b)=> a.ts-b.ts);
  const pts = (metric==='bw')
    ? body.filter(e=> e.bw!=null).map(e=> ({ ts:e.ts, v: toDisplay(e.bw) }))
    : body.filter(e=> e.m && e.m[metric]!=null).map(e=> ({ ts:e.ts, v: lenToDisp(e.m[metric]) }));
  const ctx = document.getElementById('bodyChart'); if(!ctx || typeof Chart==='undefined') return;
  if(_ch.body){ _ch.body.destroy(); }
  const unit = metric==='bw' ? unitLabel() : lenUnit();
  _ch.body = new Chart(ctx, { type:'line',
    data:{ labels: pts.map(p=> new Date(p.ts).toLocaleDateString(undefined,{month:'short',day:'numeric'})),
      datasets:[{ data: pts.map(p=> p.v), borderColor: cssVar('--gold'), backgroundColor:'rgba(201,168,76,0.13)', fill:true, tension:0.25, pointRadius:3, borderWidth:2 }] },
    options: Object.assign(chartBase(), { plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:c=> `${c.parsed.y} ${unit}` } } } }) });
}
function renderHistory() {
  const hist = getHistory();
  const list = document.getElementById('historyList');
  if (hist.length === 0) {
    list.innerHTML = '<div class="history-empty">No sessions logged yet. Complete a session in the Tracker to see it here.</div>';
    return;
  }
  let html = '';
  hist.forEach((entry, idx) => {
    let summary = '';
    const prog = getProgramById(entry.progId);
    if (prog && prog.days[entry.dayIdx]) {
      const day = prog.days[entry.dayIdx];
      day.blocks.forEach(b => b.exercises.forEach(ex => {
        if (!ex.superset) {
          const timed = exIsTimed(ex);
          const actuals = ex.sets.map((s,si) => { const cv = coerceSet(entry.log[`${ex.id}_${si}`]); if (cv.w==null && cv.r==null) return null; if (timed) return cv.r!=null ? `${cv.r}s` : null; return `${cv.w!=null?dispNum(cv.w):'BW'}${cv.r!=null?'×'+cv.r:''}`; }).filter(Boolean);
          if (actuals.length) summary += `<strong style="color:var(--text)">${esc(ex.name)}:</strong> ${esc(actuals.join(', '))}${timed?'':' '+esc(unitLabel())}<br>`;
        }
      }));
    }
    html += `<div class="history-entry">
      <div class="history-entry-hdr">
        <div><div class="history-day-name">${esc(entry.dayName)}</div><div style="font-size:10px;color:var(--text-muted);margin-top:1px">${esc(entry.progName)}</div></div>
        <div class="history-date">${esc(entry.date)}</div>
      </div>
      <div class="history-entry-body">${summary || 'No weights logged.'}</div>
      <div class="history-entry-acts">
        <button class="btn btn-ghost" onclick="exportHistoryPDF(${idx})">⬇ Export PDF</button>
        <button class="btn btn-red" onclick="deleteHistoryEntry(${idx})">✕ Delete</button>
      </div>
    </div>`;
  });
  list.innerHTML = html;
}
// (Legacy History mini-chart removed — analytics now live in the dedicated Stats tab.)
function deleteHistoryEntry(idx) {
  if (!confirm('Delete this session record?')) return;
  const hist = getHistory();
  hist.splice(idx, 1);
  saveHistory(hist);
  renderHistory();
}
// ─────────────────────────────────────────────
// REST TIMER
// ─────────────────────────────────────────────
let restInterval = null, restRemaining = 0, restPaused = false;
function startRest(seconds) {
  restRemaining = Math.max(1, Math.round(seconds || 90));
  restPaused = false;
  const t = document.getElementById('restTimer');
  if (t) { t.classList.add('show'); t.classList.remove('ending'); }
  updatePauseBtn();
  runRest();
}
function runRest() {
  clearInterval(restInterval);
  updateRestDisplay();
  restInterval = setInterval(() => {
    if (restPaused) return;
    restRemaining--;
    updateRestDisplay();
    const t = document.getElementById('restTimer');
    if (restRemaining <= 5 && restRemaining > 0 && t) t.classList.add('ending');
    if (restRemaining <= 0) { clearInterval(restInterval); restInterval = null; restDone(); }
  }, 1000);
}
function updateRestDisplay() {
  const r = Math.max(restRemaining, 0);
  const m = Math.floor(r / 60), s = r % 60;
  const d = document.getElementById('rtDisplay');
  if (d) d.textContent = m + ':' + String(s).padStart(2, '0');
}
function togglePause() {
  if (restRemaining <= 0) { startRest(90); return; }
  restPaused = !restPaused;
  updatePauseBtn();
}
function updatePauseBtn() {
  const b = document.getElementById('rtPause');
  if (b) b.textContent = restPaused ? '▶' : '❚❚';
}
function addRest(sec) {
  restRemaining = Math.max(0, restRemaining + sec);
  const t = document.getElementById('restTimer');
  if (t) { t.classList.add('show'); t.classList.remove('ending'); }
  if (!restInterval && restRemaining > 0) { restPaused = false; updatePauseBtn(); runRest(); }
  updateRestDisplay();
}
function closeRest() {
  clearInterval(restInterval); restInterval = null; restRemaining = 0; restPaused = false;
  const t = document.getElementById('restTimer');
  if (t) t.classList.remove('show', 'ending');
}
function restDone() {
  const d = document.getElementById('rtDisplay');
  if (d) d.textContent = 'GO';
  beep();
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  showToast('Rest complete — next set', 'success');
  setTimeout(() => {
    if (restRemaining <= 0) {
      const t = document.getElementById('restTimer');
      if (t) t.classList.remove('show', 'ending');
    }
  }, 2500);
}
function beep() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ac = new AC();
    const o = ac.createOscillator(), g = ac.createGain();
    o.connect(g); g.connect(ac.destination);
    o.type = 'sine'; o.frequency.value = 880;
    g.gain.setValueAtTime(0.001, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.3, ac.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.4);
    o.start(); o.stop(ac.currentTime + 0.45);
  } catch (e) {}
}
// ─────────────────────────────────────────────
// PDF EXPORT
// ─────────────────────────────────────────────
// jsPDF's built-in font only speaks Latin-1; map the Unicode we use (en/em dashes,
// arrows, middots, ×, °, smart quotes) to ASCII so the PDF doesn't render as mojibake.
function pdfSafe(s){
  return String(s == null ? '' : s)
    .replace(/[‒–—―−]/g, '-')
    .replace(/→/g, ' -> ').replace(/←/g, ' <- ').replace(/↩/g, '')
    .replace(/[·•▪●]/g, '-')
    .replace(/×/g, 'x')
    .replace(/°/g, ' deg')
    .replace(/[‘’‚′]/g, "'")
    .replace(/[“”„″]/g, '"')
    .replace(/…/g, '...')
    .replace(/[^\x00-\x7F]/g, '');
}
function exportPDF(entryOverride) {
  const { jsPDF } = window.jspdf || {};
  if (!jsPDF) { showToast('PDF library loading...', ''); return; }
  let prog, day, log, dateStr;
  if (entryOverride) {
    const p = getProgramById(entryOverride.progId) || ARNOLD_PROGRAM;
    prog = p; day = p.days[entryOverride.dayIdx]; log = entryOverride.log;
    dateStr = entryOverride.date;
  } else {
    prog = getActiveProgram(); day = prog.days[currentDayIdx]; log = sessionLog;
    dateStr = new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  }
  const doc = new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  const _pdfText = doc.text.bind(doc);
  doc.text = (t, ...a) => _pdfText(Array.isArray(t) ? t.map(pdfSafe) : pdfSafe(t), ...a);
  const W = 210, margin = 16, colW = W - margin*2;
  let y = 0;
  const addPage = () => { doc.addPage(); y = 16; };
  const checkY = n => { if (y + n > 275) addPage(); };
  doc.setFillColor(10,10,10); doc.rect(0,0,W,36,'F');
  doc.setFont('helvetica','bold'); doc.setFontSize(22); doc.setTextColor(201,168,76);
  doc.text((prog.name || 'Workout').toUpperCase(), margin, 14);
  doc.setFontSize(10); doc.setTextColor(180,180,180);
  doc.text(day.name.toUpperCase(), margin, 21);
  doc.setFontSize(8); doc.setTextColor(120,120,120);
  doc.text(dateStr, margin, 28);
  doc.text('Golden Era', W-margin, 28, {align:'right'});
  doc.setDrawColor(201,168,76); doc.setLineWidth(0.5); doc.line(margin,33,W-margin,33);
  y = 42;
  if (day.warmup?.length) {
    doc.setFillColor(20,30,45); doc.rect(margin,y,colW,6,'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(100,160,220);
    doc.text('WARM-UP', margin+3, y+4); y += 8;
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(140,140,140);
    day.warmup.forEach(w => { doc.text(`— ${w}`, margin+3, y); y += 4.5; });
    y += 3;
  }
  day.blocks.forEach(block => {
    checkY(18);
    doc.setFillColor(25,25,25); doc.rect(margin,y,colW,7,'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(201,168,76);
    doc.text(block.tag.toUpperCase(), margin+3, y+5);
    doc.setTextColor(220,220,220); doc.setFontSize(8);
    doc.text(block.title, margin+65, y+5);
    y += 9;
    block.exercises.forEach(ex => {
      if (ex.superset) {
        checkY(6);
        doc.setFont('helvetica','italic'); doc.setFontSize(7); doc.setTextColor(150,120,60);
        doc.setLineDash([2,2]); doc.setDrawColor(90,72,32); doc.setLineWidth(0.3);
        doc.line(margin+10,y+2,W-margin-10,y+2); doc.setLineDash([]);
        doc.text('SUPERSET', W/2, y+2, {align:'center'}); y += 6; return;
      }
      checkY(14);
      doc.setFillColor(30,30,30); doc.rect(margin,y,colW,6,'F');
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(235,235,235);
      doc.text(`${ex.label} — ${ex.name}`, margin+3, y+4.3);
      doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(100,100,100);
      doc.text(ex.muscle, W-margin-3, y+4.3, {align:'right'});
      y += 7;
      const c1=margin+4,c2=margin+26,c3=margin+76,c4=margin+130;
      doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(100,100,100);
      doc.text('SET',c1,y); doc.text('REPS',c2,y); doc.text('PRESCRIBED',c3,y); doc.text('ACTUAL USED',c4,y);
      y+=1; doc.setDrawColor(50,50,50); doc.setLineWidth(0.2); doc.line(margin,y,W-margin,y); y+=4;
      ex.sets.forEach((s,si) => {
        checkY(7);
        const key=`${ex.id}_${si}`; const cv=coerceSet(log[key]); const actual=(cv.w!=null||cv.r!=null)?`${cv.w!=null?dispNum(cv.w)+unitLabel():''}${cv.r!=null?(cv.w!=null?' x ':'')+cv.r+' reps':''}`.trim():'—';
        if(si%2===0){doc.setFillColor(18,18,18);doc.rect(margin,y-3,colW,6,'F');}
        doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(100,100,100); doc.text(String(si+1),c1,y);
        doc.setTextColor(200,200,200); doc.text(s.reps,c2,y); doc.text(s.weight,c3,y);
        if(actual!=='—'&&actual.trim()){doc.setFont('helvetica','bold');doc.setTextColor(46,204,113);doc.text(actual,c4,y);}
        else{doc.setTextColor(70,70,70);doc.text('—',c4,y);}
        y+=6;
      });
      const nk=`${ex.id}_notes`; const notes=log[nk];
      if(notes&&notes.trim()){checkY(8);doc.setFont('helvetica','italic');doc.setFontSize(7.5);doc.setTextColor(130,130,130);const lines=doc.splitTextToSize(`Notes: ${notes}`,colW-6);lines.forEach(l=>{checkY(5);doc.text(l,margin+3,y);y+=4.5;});}
      y+=4;
    });
    y+=3;
  });
  const pages=doc.internal.getNumberOfPages();
  for(let i=1;i<=pages;i++){
    doc.setPage(i); doc.setDrawColor(50,50,50); doc.setLineWidth(0.3); doc.line(margin,285,W-margin,285);
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(80,80,80);
    doc.text(`Golden Era · ${day.name} · ${dateStr}`,margin,290);
    doc.text(`${i}/${pages}`,W-margin,290,{align:'right'});
  }
  const fn = `GoldenEra_${pdfSafe(day.name).replace(/[^\w]+/g,'_').replace(/^_+|_+$/g,'')}_${new Date().toISOString().slice(0,10)}.pdf`;
  doc.save(fn);
  showToast('PDF downloaded ✓','success');
}
function exportHistoryPDF(idx) {
  const hist = getHistory();
  if (hist[idx]) exportPDF(hist[idx]);
}
// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
let toastTimer;
function showToast(msg,type){
  const t=document.getElementById('toast');
  t.textContent=msg; t.className=`toast ${type||''}`;
  void t.offsetWidth; // restart the animation if a toast is already showing
  t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),3000);
}
// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
activeProgramId = getActiveProgramId();
sessionLog = getSessionLog(activeProgramId, 0);
renderPrograms();
// Kick off the aggregating data layer: load cache, then sync from the web in the background.
loadExerciseData();
