function start() {
    console.log("calisiyorum panpa");
}

async function hele() {
    console.log("start");

    const provider = new ethers.providers.JsonRpcProvider("");
    // BSC Testnet https://data-seed-prebsc-1-s1.binance.org:8545/
    // Goerli https://opt-goerli.g.alchemy.com/v2/demo
    // Goerli 2 https://rpc.slock.it/goerli
    const contract = new ethers.Contract("0xf2B2402AD4deeC4D9f89B0F82b14Ad4e2547AC15", abi, provider);

    console.log(await contract.name());
    console.log(await contract.totalSupply());
    
    console.log(await contract.decimals());
    console.log("end");
}

document.getElementById("alevlibuton").onclick= async ()=>{
    console.log("helebuton");
    await hele();
};