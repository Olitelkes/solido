"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5139],{3905:function(t,e,o){o.d(e,{Zo:function(){return u},kt:function(){return h}});var a=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)o=i[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)o=i[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=c(o),h=n,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return o?a.createElement(f,l(l({ref:e},u),{},{components:o})):a.createElement(f,l({ref:e},u))}));function h(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,l=new Array(i);l[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:n,l[1]=r;for(var c=2;c<i;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7280:function(t,e,o){o.r(e),o.d(e,{default:function(){return k},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return f}});var a=o(2122),n=o(9756),i=(o(7294),o(3905)),l=o.p+"assets/images/wallet_list_sollet-6ab7f7fbc9f8ab7965df037917eefabe.png",r=o.p+"assets/images/connect_dialog-3af3c4b835d9cffaa8dacfe48b134bd8.png",s=o.p+"assets/images/staking-b26dcdc28ef9860543eed578722b39eb.png",c=o.p+"assets/images/update-f565dd4d0d5fb034e93a40c6365e0d28.png",u=o(3902),d=(o(1599),["components"]),p={id:"Sollet",title:"Sollet",description:"Overview of user staking in LIDO for Solana with Sollet",keywords:["staking","end-user","lido","solana","sollet"],sidebar_label:"Sollet",sidebar_position:5},h={unversionedId:"staking/Sollet",id:"staking/Sollet",isDocsHomePage:!1,title:"How to Stake Solana on Lido",description:"Overview of user staking in LIDO for Solana with Sollet",source:"@site/docs/staking/sollet.md",sourceDirName:"staking",slug:"/staking/Sollet",permalink:"/staking/Sollet",version:"current",sidebar_label:"Sollet",sidebarPosition:5,frontMatter:{id:"Sollet",title:"Sollet",description:"Overview of user staking in LIDO for Solana with Sollet",keywords:["staking","end-user","lido","solana","sollet"],sidebar_label:"Sollet",sidebar_position:5},sidebar:"solidoSidebar",previous:{title:"How to Stake Solana on Lido",permalink:"/staking/ledger"},next:{title:"How to Stake Solana on Lido",permalink:"/staking/solong"}},f=[{value:"Introduction",id:"introduction",children:[]},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",children:[]},{value:"Step 1: Create or Restore Sollet Wallet",id:"step-1-create-or-restore-sollet-wallet",children:[{value:"Creating the wallet",id:"creating-the-wallet",children:[]},{value:"Restoring the wallet",id:"restoring-the-wallet",children:[]}]},{value:"Step 2: Connect Lido to Sollet",id:"step-2-connect-lido-to-sollet",children:[]},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",children:[{value:"Account info",id:"account-info",children:[]},{value:"Transaction Parameters",id:"transaction-parameters",children:[]},{value:"Lido Statistics",id:"lido-statistics",children:[]},{value:"FAQs",id:"faqs",children:[]}]},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",children:[]},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",children:[]},{value:"Withdrawing Solana",id:"withdrawing-solana",children:[]},{value:"Resources",id:"resources",children:[]}],g={toc:f};function k(t){var e=t.components,p=(0,n.Z)(t,d);return(0,i.kt)("wrapper",(0,a.Z)({},g,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget",src:o(1478).Z})),(0,i.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,i.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Phantom"),(0,i.kt)("li",{parentName:"ol"},"Solflare"),(0,i.kt)("li",{parentName:"ol"},"Ledger"),(0,i.kt)("li",{parentName:"ol"},"Sollet"),(0,i.kt)("li",{parentName:"ol"},"Solong")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-1-create-or-restore-sollet-wallet"},"Step 1: Create or Restore Sollet Wallet"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://sollet.io/"},"http://sollet.io/")," to create/restore your solana wallet."),(0,i.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,i.kt)("p",null,"If you do not have a wallet you yet, you should create a new wallet and note down the seed phrase and store it in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Wallet",src:o(898).Z})),(0,i.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,i.kt)("p",null,"If you already have a wallet, you can restore it on sollet using the associated seed phrase. Follow the online instructions to restore your SOL account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Restore Existing Sollet",src:o(9139).Z}),"\n",(0,i.kt)("img",{alt:"Restore Sollet Account",src:o(3777).Z})),(0,i.kt)("h2",{id:"step-2-connect-lido-to-sollet"},"Step 2: Connect Lido to Sollet"),(0,i.kt)("p",null,"Once your wallet is setup visit ",(0,i.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Sollet account to the Lido interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect",src:o(9969).Z})),(0,i.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:l,alt:"Wallets",width:"350"})),(0,i.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,i.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Sollet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sollet Approve",src:o(7133).Z})),(0,i.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connected Widget",src:o(3938).Z})),(0,i.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,i.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,i.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interface",src:o(6153).Z})),(0,i.kt)("h3",{id:"account-info"},"Account info"),(0,i.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"CHoeCfX43Hh8ivXR8wiChcNcpDgVmNm5uLhMgGA37ioY"))),(0,i.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/CHoeCfX43Hh8ivXR8wiChcNcpDgVmNm5uLhMgGA37ioY?cluster=testnet"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account Info",src:o(2899).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:r,alt:"Connect Dialog",width:"350"})),(0,i.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,i.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,i.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,i.kt)("li",{parentName:"ul"},"Transaction cost"),(0,i.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction Parameters",src:o(5583).Z})),(0,i.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,i.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lido Parameters",src:o(6205).Z})),(0,i.kt)("h3",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Faqs",src:o(1479).Z})),(0,i.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stake",src:o(6070).Z})),(0,i.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note ",(0,i.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:s,alt:"Staking",width:"450"})),(0,i.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sollet Approve 1",src:o(9877).Z})),(0,i.kt)("p",null,"After verifying the information you can approve now."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sollet Approve 2",src:o(5847).Z})),(0,i.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,i.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,i.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:u.Z,alt:"View Tx",width:"500"})),(0,i.kt)("p",null,"This is useful as it tells you the ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3nwJJRgQgujJUamvmDAq4KiFmn9CAgXEMc2eHUu7NBX9bWzYAbgA2UZS3LUhUXYmeu8NBEkuyjWdpSz6AgCNJ4oS?cluster=testnet"},"current status")," of your transaction."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3nwJJRgQgujJUamvmDAq4KiFmn9CAgXEMc2eHUu7NBX9bWzYAbgA2UZS3LUhUXYmeu8NBEkuyjWdpSz6AgCNJ4oS?cluster=testnet"},"https://explorer.solana.com/tx/3nwJJRgQgujJUamvmDAq4KiFmn9CAgXEMc2eHUu7NBX9bWzYAbgA2UZS3LUhUXYmeu8NBEkuyjWdpSz6AgCNJ4oS?cluster=testnet"))),(0,i.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Conf1",src:o(9997).Z}),"\n",(0,i.kt)("img",{alt:"Conf2",src:o(411).Z}),"\n",(0,i.kt)("img",{alt:"Conf3",src:o(7988).Z})),(0,i.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:c,alt:"Update",width:"450"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Updated",src:o(7426).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 1: We had 9 SOL in the beginning and we staked 1 SOL. We should be left with 8 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,i.kt)("h2",{id:"withdrawing-solana"},"Withdrawing Solana"),(0,i.kt)("p",null,"To withdraw click on the ",(0,i.kt)("strong",{parentName:"p"},"Unstake")," tab and enter the amount of stSOL that you would like to unstake in the field provided below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unstake-amount",src:o(4993).Z})),(0,i.kt)("p",null,"Then click unstake and head over to your wallet to approve the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unstake-transaction",src:o(5921).Z})),(0,i.kt)("p",null,"The Solana blockchain waits for 32 confirmations (called MAX Confirmations) before making a transaction 'final'. Once the transaction gets the ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX Confirmations")," the Lido program splits off a stake account with the redeemed SOL amount and transfers it to you. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unstake-successful",src:o(2336).Z})),(0,i.kt)("p",null,"You then unstake those SOL and will receive liquid SOL after the deactivation period which lasts for approximately 2 epochs. For users that desire instant liquidity, the preferred option is to exchange stSOL on the open market, e.g. on the supported AMM pools on Saber and Raydium."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}k.isMDXComponent=!0},1599:function(t,e,o){o.p},3902:function(t,e,o){e.Z=o.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},2899:function(t,e,o){e.Z=o.p+"assets/images/account_info-ec38fbec312fc9993c3a10544c4d6c35.png"},9997:function(t,e,o){e.Z=o.p+"assets/images/confirmations1-41c4daf7129264bb379542a755a7d30b.png"},411:function(t,e,o){e.Z=o.p+"assets/images/confirmations2-6669d984bbcfbff503c9c6c1cd2619ca.png"},7988:function(t,e,o){e.Z=o.p+"assets/images/confirmations3-ae704fd92aeb27ba40fe297dfc91ea59.png"},9969:function(t,e,o){e.Z=o.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},3938:function(t,e,o){e.Z=o.p+"assets/images/connected_widget-759b105b89933a918cefef76379bf2d0.png"},1479:function(t,e,o){e.Z=o.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},6153:function(t,e,o){e.Z=o.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},6205:function(t,e,o){e.Z=o.p+"assets/images/lido_params-537175b3683c562d73893a34ab7a7614.png"},6070:function(t,e,o){e.Z=o.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},5583:function(t,e,o){e.Z=o.p+"assets/images/tx_params-60880b417672bb75f9d19d1ab994a215.png"},4993:function(t,e,o){e.Z=o.p+"assets/images/unstake-amount-7bb01c1db556314bc6797382c9af577c.png"},2336:function(t,e,o){e.Z=o.p+"assets/images/unstake-successful-a1fd6fb114c97e369a3d224daf523da4.png"},5921:function(t,e,o){e.Z=o.p+"assets/images/unstake-transaction-5117356faee669f6fb7de9bfed28de17.png"},7426:function(t,e,o){e.Z=o.p+"assets/images/updated-b1088392adafdf88b2dd112481d8bd95.png"},1478:function(t,e,o){e.Z=o.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},7133:function(t,e,o){e.Z=o.p+"assets/images/Sollet_approve-c096d282c36cf5d2b47b91400e1ab00a.png"},898:function(t,e,o){e.Z=o.p+"assets/images/create_sollet_wallet-4c9f64f8e5baa899153cbffa5ac2d3f7.png"},9139:function(t,e,o){e.Z=o.p+"assets/images/restore_existing_sollet-c1b3bdacee1dfb76d12bddc8130155da.png"},3777:function(t,e,o){e.Z=o.p+"assets/images/restore_sollet_account-3af97c876a9e5c17a778545e766f3bae.png"},9877:function(t,e,o){e.Z=o.p+"assets/images/sollet_approve1-09ba809bdaee993ebba47b973b94ec1d.png"},5847:function(t,e,o){e.Z=o.p+"assets/images/sollet_approve2-a69734033f52268da7f6ec689381aebf.png"}}]);