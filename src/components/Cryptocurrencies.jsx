import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
let cryptosList = {
  status: "success",
  data: {
    stats: {
      total: 41525,
      totalCoins: 41525,
      totalMarkets: 39840,
      totalExchanges: 185,
      totalMarketCap: "2141874437789",
      total24hVolume: "55903260463",
    },
    coins: [
      {
        uuid: "Qwsogvtv82FCd",
        symbol: "BTC",
        name: "Bitcoin",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        marketCap: "1167596247319",
        price: "59126.12298441517",
        listedAt: 1330214400,
        tier: 1,
        change: "-0.50",
        rank: 1,
        sparkline: [
          "59415.24575305978",
          "59350.53164950994",
          "59127.23954428933",
          "58251.919833591666",
          "58150.94837745792",
          "58388.852319718346",
          "58774.743513052",
          "58769.97240783713",
          "58695.42090852016",
          "58902.74612365467",
          "59026.2058823492",
          "58971.52938157515",
          "59034.37278363231",
          "59126.45410516096",
          "59059.47945326511",
          "59147.95118225467",
          "59283.90959087892",
          "59256.29641696979",
          "59218.80119306693",
          "59034.24500590598",
          "58999.943711016465",
          "58796.655714801134",
          "58935.53374183079",
          "59084.236097382076",
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "24hVolume": "33633131427",
        btcPrice: "1",
        contractAddresses: [],
      },
      {
        uuid: "razxDUgYGNAdQ",
        symbol: "ETH",
        name: "Ethereum",
        color: "#3C3C3D",
        iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        marketCap: "306485239264",
        price: "2510.1049089164235",
        listedAt: 1438905600,
        tier: 1,
        change: "-0.24",
        rank: 2,
        sparkline: [
          "2516.435187885195",
          "2517.7651003289257",
          "2499.7685907897007",
          "2451.4328096273643",
          "2447.881433224267",
          "2452.756445080827",
          "2484.4918124013084",
          "2493.702685385982",
          "2490.714346486777",
          "2502.1422315359787",
          "2504.725522999534",
          "2510.0567081456243",
          "2511.5113101724764",
          "2511.93235589425",
          "2508.974350643058",
          "2518.785782409109",
          "2523.8417304819004",
          "2523.058437767196",
          "2524.527234005165",
          "2520.7939153432544",
          "2517.064435669043",
          "2502.198355595245",
          "2503.0154198651335",
          "2520.870170637762",
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
        "24hVolume": "9464625649",
        btcPrice: "0.04245339931349892",
        contractAddresses: [],
      },
      {
        uuid: "HIVsRcGKkPFtW",
        symbol: "USDT",
        name: "Tether USD",
        color: "#22a079",
        iconUrl: "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
        marketCap: "118150826766",
        price: "0.9993654829347604",
        listedAt: 1420761600,
        tier: 1,
        change: "-0.07",
        rank: 3,
        sparkline: [
          "1.0001898664185955",
          "1.0004792987254183",
          "1.0006773220554521",
          "1.0006938033770993",
          "1.0000849705616095",
          "1.0000899589761407",
          "0.9998124331814655",
          "1.0005074203972402",
          "1.0000101712522793",
          "1.0003449674543925",
          "0.9998960658382154",
          "1.0004793086892108",
          "1.000046021457602",
          "1.000748622418974",
          "1.000305804826639",
          "0.9998979154971476",
          "0.9998900207626045",
          "0.999980251987124",
          "1.00017760663128",
          "1.0001275758882386",
          "1.000502000739983",
          "1.0005028715605784",
          "0.9999961402273734",
          "1.0001062828856049",
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
        "24hVolume": "36450154429",
        btcPrice: "0.00001690226641781",
        contractAddresses: [
          "avalanche-c-chain/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7 ",
          "tron/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
          "solana/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          "eos/USDT-eos-tethertether",
          "omni/31",
          "bitcoin-cash/9fc89d6b7d5be2eac0b3787c5b8236bca5de641b5bafafc8f450727b63615c11",
          "liquid/ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2",
          "ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7",
          "algorand/312769",
        ],
      },
      {
        uuid: "WcwrkfNI4FUAe",
        symbol: "BNB",
        name: "BNB",
        color: "#e8b342",
        iconUrl: "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
        marketCap: "79724627317",
        price: "536.3051240346899",
        listedAt: 1503014400,
        tier: 1,
        change: "-0.89",
        rank: 4,
        sparkline: [
          "541.5069372116172",
          "541.7251209893216",
          "538.2270272888609",
          "527.9065476918712",
          "526.1213743776397",
          "528.53111625264",
          "533.3565786886782",
          "533.4695479798596",
          "532.0753206970049",
          "534.1529038051766",
          "535.8735004040647",
          "535.8114397837529",
          "536.6135081591689",
          "537.3196085084058",
          "537.0566269522549",
          "537.5743852672944",
          "539.5357793439242",
          "539.8156849504514",
          "537.2762791223378",
          "536.3186467813109",
          "536.6981287070139",
          "535.2965086811494",
          "536.8103341138967",
          "537.2326314710941",
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/WcwrkfNI4FUAe+bnb-bnb",
        "24hVolume": "14576015023",
        btcPrice: "0.009070527492155245",
        contractAddresses: [
          "bnb-beacon-chain/",
          "avalanche-c-chain/0x264c1383EA520f73dd837F915ef3a732e204a493",
          "ethereum/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
        ],
      },
      {
        uuid: "zNZHO_Sjf",
        symbol: "SOL",
        name: "Solana",
        color: "#000",
        iconUrl: "https://cdn.coinranking.com/yvUG4Qex5/solana.svg",
        marketCap: "63944798246",
        price: "137.08603269288946",
        listedAt: 1586539320,
        tier: 1,
        change: "-1.83",
        rank: 5,
        sparkline: [
          "139.5786339905117",
          "139.79857349391298",
          "138.18195208955493",
          "133.9614859399678",
          "133.360139536929",
          "133.95687028695957",
          "136.08930999076935",
          "136.3353421491735",
          "136.1070715364377",
          "136.58711710285672",
          "137.22684185321916",
          "138.06473499900443",
          "138.45288255683744",
          "138.20914958872444",
          "137.86737449346882",
          "138.37217486599016",
          "138.53610656472756",
          "138.26920494002",
          "138.0395884632007",
          "137.85074132008373",
          "137.34900794171477",
          "136.37829822447705",
          "137.01424503095944",
          "137.12141729490767",
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/zNZHO_Sjf+solana-sol",
        "24hVolume": "2160478039",
        btcPrice: "0.002318535797265507",
        contractAddresses: [
          "cronos/0xc9DE0F3e08162312528FF72559db82590b481800",
        ],
      },
      {
        uuid: "aKzUVe4Hh_CON",
        symbol: "USDC",
        name: "USDC",
        color: "#7894b4",
        iconUrl: "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
        marketCap: "34713274057",
        price: "0.9995959023142268",
        listedAt: 1539043200,
        tier: 1,
        change: "0.15",
        rank: 6,
        sparkline: [
          "0.9986038178549534",
          "0.9988459774553676",
          "0.9995172534242696",
          "1.0000147561979724",
          "0.9991494109219364",
          "0.9984789889469635",
          "0.9968318381366743",
          "0.9972341759588144",
          "0.9971425671504877",
          "0.9981405700474367",
          "0.9976641626282671",
          "0.9973588298800989",
          "0.9975663544941886",
          "0.9981957135707603",
          "0.9979027410168508",
          "0.9992405155994055",
          "0.9999070415014919",
          "0.9996411787895898",
          "0.9999317591444441",
          "0.9993798311136154",
          "0.9993974978703557",
          "0.9979881836952027",
          "0.997975256443726",
          "0.9992782384134384",
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc",
        "24hVolume": "4775899915",
        btcPrice: "0.000016906163500315",
        contractAddresses: [
          "avalanche-c-chain/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
          "flow/A.b19436aae4d94622.FiatToken",
          "tron/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
          "stellar/USDC-GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN-1",
          "hedera/0.0.456858",
          "solana/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "moonbeam/0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC9",
          "ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "algorand/31566704",
          "cronos/0xc21223249ca28397b4b6541dffaecc539bff0c59",
          "klaytn/0x6270b58be569a7c0b8f47594f191631ae5b2c86c",
          "bnb-smart-chain/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "optimism/0x0b2c639c533813f4aa9d7837caf62653d097ff85",
          "polygon/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          "fantom/0x04068da6c83afcfa0e13ba15a6696662335d5b75",
          "arbitrum/0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          "base/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
        ],
      },
      {
        uuid: "-l8Mn2pVlRs-p",
        symbol: "XRP",
        name: "XRP",
        color: "#000000",
        iconUrl: "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
        marketCap: "32031611804",
        price: "0.5694350723584688",
        listedAt: 1421798400,
        tier: 1,
        change: "0.71",
        rank: 7,
        sparkline: [
          "0.5654074709124561",
          "0.5644903719190989",
          "0.5606026216278011",
          "0.5535439249811418",
          "0.5516496863191693",
          "0.5564718896756647",
          "0.5593776250569488",
          "0.5609737879712422",
          "0.5616766166539834",
          "0.5642195738856728",
          "0.5664835049202827",
          "0.5665853051242326",
          "0.5667597857172838",
          "0.5664012583523366",
          "0.5662903961636427",
          "0.5656785142813673",
          "0.5660625063249103",
          "0.5676088049409765",
          "0.5674379440835091",
          "0.5671860952597192",
          "0.567087280410609",
          "0.5660164113650025",
          "0.569878261375194",
          "0.5696027791051888",
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/-l8Mn2pVlRs-p+xrp-xrp",
        "24hVolume": "823119055",
        btcPrice: "0.000009630854242017",
        contractAddresses: [],
      },
      {
        uuid: "VINVMYf0u",
        symbol: "stETH",
        name: "Lido Staked Ether",
        color: "#41c0f5",
        iconUrl: "https://cdn.coinranking.com/UJ-dQdgYY/8085.png",
        marketCap: "24081717219",
        price: "2523.990053530671",
        listedAt: 1627012680,
        tier: 1,
        change: "0.14",
        rank: 8,
        sparkline: [
          "2519.300797044279",
          "2521.5429071853755",
          "2504.0504144532674",
          "2455.7754959599824",
          "2452.292823453666",
          "2459.4046348268566",
          "2502.7959468741633",
          "2512.3512441025273",
          "2509.5843171923775",
          "2516.1983604352567",
          "2520.7842619455087",
          "2526.0700110721054",
          "2525.9275396949865",
          "2525.4573378513346",
          "2521.8579530740494",
          "2522.9615591089646",
          "2524.734767098922",
          "2526.659656348677",
          "2524.395281271383",
          "2520.5586705457713",
          "2519.7850216864645",
          "2514.5248620545735",
          "2519.991568876003",
          "2525.934299815652",
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/VINVMYf0u+lidostakedether-steth",
        "24hVolume": "42533538",
        btcPrice: "0.042683497223411325",
        contractAddresses: [
          "ethereum/0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        ],
      },
      {
        uuid: "a91GCGd_u96cF",
        symbol: "DOGE",
        name: "Dogecoin",
        color: "#c2a633",
        iconUrl: "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
        marketCap: "14759092093",
        price: "0.10127873958396438",
        listedAt: 1391212800,
        tier: 1,
        change: "-0.29",
        rank: 9,
        sparkline: [
          "0.10162925331127905",
          "0.10131178713603448",
          "0.10035023100409333",
          "0.09886128129981898",
          "0.09821598095988987",
          "0.09894835188276704",
          "0.10016264540163398",
          "0.10044760296427059",
          "0.10037352910274462",
          "0.10088297038432706",
          "0.10112562497018938",
          "0.10151567097513725",
          "0.10192740479513311",
          "0.10157005003473223",
          "0.10111346561016421",
          "0.10124578049646057",
          "0.10154244745094186",
          "0.10171681792908732",
          "0.10156338169880305",
          "0.10129113985130554",
          "0.10104317705324149",
          "0.10063702613815",
          "0.10110516595395788",
          "0.10137079105248038",
        ],
        lowVolume: false,
        coinrankingUrl:
          "https://coinranking.com/coin/a91GCGd_u96cF+dogecoin-doge",
        "24hVolume": "476889045",
        btcPrice: "0.000001712927120398",
        contractAddresses: [],
      },
      {
        uuid: "qUhEFk1I61atv",
        symbol: "TRX",
        name: "TRON",
        color: "#eb0029",
        iconUrl: "https://cdn.coinranking.com/behejNqQs/trx.svg",
        marketCap: "14051195542",
        price: "0.15708076057378975",
        listedAt: 1505260800,
        tier: 1,
        change: "-2.40",
        rank: 10,
        sparkline: [
          "0.16085443145440595",
          "0.1612914799796077",
          "0.1610797535862377",
          "0.16013826278406762",
          "0.15987546412627818",
          "0.15984506458384803",
          "0.159976554058699",
          "0.15933831994788797",
          "0.15944716111922208",
          "0.1594630105385254",
          "0.15959188489604706",
          "0.15997267730131243",
          "0.15973738698661138",
          "0.159886464784473",
          "0.15969951813260536",
          "0.15951883761049576",
          "0.15938469434837643",
          "0.15924608299258858",
          "0.1577880779778997",
          "0.15762719876171075",
          "0.15746311071585448",
          "0.15712553380073338",
          "0.15736421251379598",
          "0.15751393713933506",
        ],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/qUhEFk1I61atv+tron-trx",
        "24hVolume": "697504384",
        btcPrice: "0.000002656706589999",
        contractAddresses: [],
      },
    ],
  },
};
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  // let { data: cryptosList, isFetching, isError } = useGetCryptosQuery(count);

  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  useEffect(() => {
    const filteredCoins = cryptosList?.data?.coins?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredCoins);
  }, [cryptosList, searchTerm]);

  // if (isError) return <div>Error occured. Please try again!!!</div>;
  // if (isFetching) return <div>Loading...</div>;
  console.log(cryptosList?.data?.coins);

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map(
          ({ uuid: id, rank, name, iconUrl, price, marketCap, change }) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={id}>
              <Link to={`/crypto/${id}`}>
                <Card
                  title={`${rank}. ${name}`}
                  extra={
                    <img
                      className="crypto-image"
                      alt="coin details"
                      src={iconUrl}
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(price)}</p>
                  <p>Market Cap: {millify(marketCap)}</p>
                  <p>Daily Change: {millify(change)}%</p>
                </Card>
              </Link>
            </Col>
          )
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;

/*
24hVolume
: 
"17004423988"
btcPrice
: 
"1"
change
: 
"-0.22"
coinrankingUrl
: 
"https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc"
color
: 
"#f7931A"
contractAddresses
: 
[]
iconUrl
: 
"https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
listedAt
: 
1330214400
lowVolume
: 
false
marketCap
: 
"1263517287933"
name
: 
"Bitcoin"
price
: 
"63991.95378325312"
rank
: 
1
sparkline
: 
(24) ['63996.802317768714', '64092.36477193697', '63907.8844340796', '63904.94723883471', '63952.698194299184', '64031.77091480091', '64172.54649560179', '64143.96611846696', '63929.38747202021', '63792.40700009307', '63898.41911900227', '64201.45470062327', '64146.45364770498', '64117.45190521886', '64026.6470496326', '64015.69275153053', '64088.020654739885', '64006.7170684557', '63871.94873528322', '63896.96531111165', '63835.53141484265', '63826.65951437789', '63895.96696402385', null]
symbol
: 
"BTC"
tier
: 
1
uuid
: 
"Qwsogvtv82FCd
*/
