import { Client } from '../src'

(async () => {
	let r = new Client({
		cookie: '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_5213F033BD2BB320B812D997528110AEC9086885D1847E9A2A9CB327BC6D84C9CD53A7D6E9AA43E21EA6D2437AD98EAE5B5562A340799DCE77A089F8328CCB414BED7BA9F49A302AA809B4ABB536158F941EB7B4068981BB017B2FC3DF21844C7031B21EB144D4675C7436371238E203A48AA50BC10DF4E6D8792F5BEEBB5848C9FFFF162DD948AD57E05469BF6F05AE79F5556C767008D1AAF90B4E7A9B676103C470956906D30D14E9CF6A2B5CF654CD56BBE17FD19790FE2B6A0DB9B0659A708C91E9C30482292B689E824A60B030750FA6E79DA6F70D449BBAD8AC2622810F5474CE283EB89B599418166226CB1DC8E16115F69FC712941CE15889867E710B63587459E2069C0B2622D3707A83F4F1948DB16A36E8766C97305D22720F118E653CF6'
	})
	
	console.log(await r.isLoggedIn())
})()
