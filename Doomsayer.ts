import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';
import { Player, Npc } from 'engine/models';

import { openCentralWidget } from 'shared/widget';
import { chatnpc, chatplayer, mesbox, multi2, multi3 } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 3777, async (ctx) => {
var player = ctx.player;
var npc = ctx.npc;
await chatnpc(player, npc, "Dooooom!");
await chatplayer(player, "Where?");
await chatnpc(player, npc, "All around us! I can feel it in the air, hear it on the <br> wind, smell it...also in the air!");
await chatplayer(player, "Is there anything we can do about this doom?");
await chatnpc(player, npc, "There is nothing you need to do my friend! I am the <br> Doomsayer, although my real title could be something <br> like the Danger Tutor?");
await chatplayer(player, "Danger Tutor?");
await chatnpc(player, npc, "Yes! I roam the world sensing danger.");
await chatnpc(player, npc, "If I find a dangerous area, then I put up warning <br> signs that will tell you what is so dangerous about that <br> area.");
await chatnpc(player, npc, "If you see the signs often enough, then you can turn <br> them off; by that time you likely know what the area <br> has in store for you.");
await chatplayer(player, "But what if I want to see the warnings again?");
await chatnpc(player, npc, "That's why I'm waiting here!");
await chatnpc(player, npc, "If you want to see the warning messages again, I can <br> turn them back on for you.");
await chatplayer(player, "Thanks, I'll remember that if I see any warning <br> messages.");
await chatnpc(player, npc, "Your welcome!");
}); 
