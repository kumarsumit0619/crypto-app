import React, { useState } from "react";
import { Row, Col, Card, Typography, Avatar, Select } from "antd";
// import { Text } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

let _DA = {
  status: "success",
  items: [
    {
      title:
        "Cryptocurrency holders more likely to have ‘dark’ personality traits of narcissism, psychopathy: Study | Stock Market News",
      snippet:
        "Individuals who had purchased crypto were, on average, more likely to believe conspiracy theories, support extremist groups,...",
      publisher: "Mint",
      timestamp: "1725037985000",
      newsUrl:
        "https://www.livemint.com/market/cryptocurrency/cryptocurrency-holders-more-likely-to-have-dark-personality-traits-of-narcissism-psychopathy-study-11725036882059.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNVRUV2RtYjJvdFZFMWllRmxTVFJDb0FSaXNBaWdCTWdtQk1ZVHBvZVM1RUFF=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNVRUV2RtYjJvdFZFMWllRmxTVFJDb0FSaXNBaWdCTWdtQk1ZVHBvZVM1RUFF",
      },
    },
    {
      title:
        "1 Top Cryptocurrency to Buy Before It Soars 16,000%, According to Robert Kiyosaki",
      snippet:
        "Bitcoin could be worth $10 million each one day. But be careful what you wish for.",
      publisher: "The Motley Fool",
      timestamp: "1724925600000",
      newsUrl:
        "https://www.fool.com/investing/2024/08/29/1-top-cryptocurrency-to-buy-before-it-soars-15525/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDBNVGxCUjBkNVNVaHlTRkZtVFJDM0FSaVVBaWdCTWdZcGRZN05MUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDBNVGxCUjBkNVNVaHlTRkZtVFJDM0FSaVVBaWdCTWdZcGRZN05MUVk",
      },
    },
    {
      title: "Bitcoin Chop Continues Until...",
      snippet:
        "Despite recent Crypto pullback, key Bitcoin signals highlight an impending bull run. By analyzing global liquidity, correlations with...",
      publisher: "TheStreet",
      timestamp: "1725025288000",
      newsUrl:
        "https://www.thestreet.com/crypto/markets/bitcoin-chop-continues-until",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUpka05mVkdRME5FSnpPVVZUVFJEUEFSanpBU2dCTWdhaFVwUlFwUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUpka05mVkdRME5FSnpPVVZUVFJEUEFSanpBU2dCTWdhaFVwUlFwUWM",
      },
    },
    {
      title: "Opinion | Naked Emperors and Crypto Campaign Cash",
      snippet:
        "Once upon a time there was an emperor who loved being fashion-forward. So he was receptive to some fast-talking tailors who promised to make...",
      publisher: "The New York Times",
      timestamp: "1724972408000",
      newsUrl:
        "https://www.nytimes.com/2024/08/29/opinion/cryptocurrency-election.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUlaMGN4ZGpsVFRWUnBOSGRJVFJDM0FSaVRBaWdCTWdZbGxaU3N0UVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUlaMGN4ZGpsVFRWUnBOSGRJVFJDM0FSaVRBaWdCTWdZbGxaU3N0UVk",
      },
    },
    {
      title:
        "Telegram-Linked Toncoin Slumps 20% Since Pavel Durov’s Arrest—As Crypto Industry Calls For Billionaire’s Release",
      snippet:
        "Toncoin is the native cryptocurrency of the TON blockchain, which was developed by Pavel Durov and his brother Nikolai as part of an effort...",
      publisher: "Forbes",
      timestamp: "1724847793000",
      newsUrl:
        "https://www.forbes.com/sites/siladityaray/2024/08/28/telegram-linked-toncoin-slumps-20-since-pavel-durovs-arrest-as-crypto-industry-calls-for-billionaires-release/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNWlhbkpPVUVSWWJVWjNNa0UzVFJDb0FSaXJBaWdCTWdhMVk0eHdxUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWlhbkpPVUVSWWJVWjNNa0UzVFJDb0FSaXJBaWdCTWdhMVk0eHdxUVk",
      },
    },
    {
      title:
        "Oklahoma City resident loses thousands in cryptocurrency ATM scam",
      snippet:
        "OKLAHOMA CITY (KOKH) — The Oklahoma City Police Department (OKCPD) is warning citizens about a recentcryptocurrency ATM that resulted in a...",
      publisher: "KOKH FOX25",
      timestamp: "1724882546000",
      newsUrl:
        "https://okcfox.com/news/local/oklahoma-city-resident-loses-thousands-in-cryptocurrency-atm-scam-okcpd-police-department-investigation-money-woman-victim",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNHplbTlzVWpKamIyRkZYekJIVFJDb0FSaXJBaWdCTWdhdEk1QlFIUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNHplbTlzVWpKamIyRkZYekJIVFJDb0FSaXJBaWdCTWdhdEk1QlFIUWc",
      },
    },
    {
      title:
        "Render and Mpeppe Are The Future Of Cryptocurrency With 1000x Returns | Bitcoinist.com",
      snippet:
        "In the last four weeks, two projects have emerged as strong contenders for those seeking massive returns: Render (RENDER) and Mpeppe (MPEPE)...",
      publisher: "Bitcoinist",
      timestamp: "1724946465000",
      newsUrl:
        "https://bitcoinist.com/render-and-mpeppe-are-the-future-of-cryptocurrency-with-1000x-returns/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNW9NelUyVUMwMlNYQnROakJ3VFJDMUFSaVhBaWdCTWdZVklveU1GUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW9NelUyVUMwMlNYQnROakJ3VFJDMUFSaVhBaWdCTWdZVklveU1GUWs",
      },
    },
    {
      title:
        "Microsoft Says North Korean Cryptocurrency Thieves Behind Chrome Zero-Day",
      snippet:
        "Redmond's threat intel team said exploitation of CVE-2024-7971 can be attributed to a North Korean APT targeting the cryptocurrency sector.",
      publisher: "SecurityWeek",
      timestamp: "1725048831000",
      newsUrl:
        "https://www.securityweek.com/microsoft-says-north-korean-cryptocurrency-thieves-behind-chrome-zero-day/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUhRbWQzUldjdE5sbHFVa1ZvVFJDb0FSaXNBaWdCTWdhQlE0WlJuUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUhRbWQzUldjdE5sbHFVa1ZvVFJDb0FSaXNBaWdCTWdhQlE0WlJuUWs",
      },
    },
    {
      title:
        "2 Lexington County gold buyers to plead guilty in national romance, cryptocurrency scam",
      snippet:
        "Two Lexington County men are pleading guilty to being part of a nationwide online scam featuring fake online romances and cryptocurrency.",
      publisher: "The State",
      timestamp: "1725029040000",
      newsUrl:
        "https://www.thestate.com/news/local/crime/article291596725.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNHdiMDlEUTJkalgwMUNTbTF3VFJDb0FSaXNBaWdCTWdhVklvUXBNZ1U=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNHdiMDlEUTJkalgwMUNTbTF3VFJDb0FSaXNBaWdCTWdhVklvUXBNZ1U",
      },
    },
    {
      title:
        "Tesla CEO Elon Musk Wants To Bring Back Dogecoin As A Payment Option To Buy Company's Merchandise",
      snippet:
        "Tesla Inc (NASDAQ:TSLA) CEO Elon Musk said on Friday that he would like to have the option of paying with meme cryptocurrency Dogecoin...",
      publisher: "Benzinga",
      timestamp: "1725088292000",
      newsUrl:
        "https://www.benzinga.com/markets/cryptocurrency/24/08/40665546/tesla-ceo-elon-musk-wants-to-bring-back-dogecoin-as-a-payment-option-to-buy-companys-merch",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNWxNbWhqYTJSMlZUazNRVXR1VFJDM0FSaVRBaWdCTWdZZFk1SktyUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWxNbWhqYTJSMlZUazNRVXR1VFJDM0FSaVRBaWdCTWdZZFk1SktyUWM",
      },
    },
    {
      title: "Top 10 Cryptocurrencies Of August 27, 2024",
      snippet:
        "Bitcoin, Ethereum, Dogecoin & Tether, there are thousands of different cryptocurrencies available. Let Forbes Advisor walk you through the...",
      publisher: "Forbes",
      timestamp: "1724766780000",
      newsUrl:
        "https://www.forbes.com/advisor/investing/cryptocurrency/top-10-cryptocurrencies/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUJZalJhY0RKT1pEaGhMVXcyVFJDb0FSaXNBaWdCTWdZbE5Zck5JUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUJZalJhY0RKT1pEaGhMVXcyVFJDb0FSaXNBaWdCTWdZbE5Zck5JUVk",
      },
    },
    {
      title: "Cryptocurrency Explained With Pros and Cons for Investment",
      snippet:
        "A cryptocurrency is a digital or virtual currency that uses cryptography and is difficult to counterfeit.",
      publisher: "Investopedia",
      timestamp: "1718434800000",
      newsUrl: "https://www.investopedia.com/terms/c/cryptocurrency.asp",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNVRkRTh6UTNsNk5qQmZUVVF3VFJDM0FSaVRBaWdCTWdrUlVwSm9wdWRNaVFJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNVRkRTh6UTNsNk5qQmZUVVF3VFJDM0FSaVRBaWdCTWdrUlVwSm9wdWRNaVFJ",
      },
    },
    {
      title: "Best Crypto Exchanges Of September 2024",
      snippet:
        "To help you find the right crypto exchange for you, Forbes Advisor combed through the leading exchange offerings and reams of data to...",
      publisher: "Forbes",
      timestamp: "1724952060000",
      newsUrl:
        "https://www.forbes.com/advisor/investing/cryptocurrency/best-crypto-exchanges/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNWpWVlV4V1dSR00xY3lXRkJPVFJDb0FSaXNBaWdCTWdZQlFvakdxZ1E=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWpWVlV4V1dSR00xY3lXRkJPVFJDb0FSaXNBaWdCTWdZQlFvakdxZ1E",
      },
    },
    {
      title:
        "North Korean Hackers Exploit Chrome Flaw to Steal Cryptocurrency: Report",
      snippet:
        'Microsoft reported that North Korean hackers "Citrine Sleet" exploited a Chromium zero-day to steal cryptocurrency from victims.',
      publisher: "Crypto Times",
      timestamp: "1725063911000",
      newsUrl:
        "https://www.cryptotimes.io/2024/08/31/north-korean-hackers-exploit-chrome-flaw-to-steal-cryptocurrency-report/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNHlNMUIzVlZGaldIbDFkbTR6VFJDd0FSaWVBaWdCTWdrSmNvWnFzZVd4REFJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNHlNMUIzVlZGaldIbDFkbTR6VFJDd0FSaWVBaWdCTWdrSmNvWnFzZVd4REFJ",
      },
    },
    {
      title:
        "Best Crypto Exchanges of 2024: A Comprehensive Guide for Investors",
      snippet:
        "Explore the top cryptocurrency exchanges in 2024, offering a wide range of coins, fees, and robust security. Find the best exchange for you.",
      publisher: "Business Insider",
      timestamp: "1724877000000",
      newsUrl:
        "https://www.businessinsider.com/personal-finance/investing/best-crypto-bitcoin-exchanges",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDBTVEUzTWpOcE9IRjJPVWxHVFJDZkFSaS1BaWdCTWdhSnVZREZQZ1E=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDBTVEUzTWpOcE9IRjJPVWxHVFJDZkFSaS1BaWdCTWdhSnVZREZQZ1E",
      },
    },
    {
      title:
        "Stabilizing stablecoins: A deep dive into regulations surrounding cryptocurrency",
      snippet:
        "Singapore's excellent standing as a financial hub is predicated on the rule of law and built upon transparency and regulatory diligence.",
      publisher: "Tech Xplore",
      timestamp: "1725039468000",
      newsUrl:
        "https://techxplore.com/news/2024-08-stabilizing-stablecoins-deep-cryptocurrency.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNW1WMHcwV21GalFreDZNRTFQVFJDd0FSaWVBaWdCTWdZbE5JeXRuUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW1WMHcwV21GalFreDZNRTFQVFJDd0FSaWVBaWdCTWdZbE5JeXRuUVU",
      },
    },
    {
      title:
        "Russia to Launch Cryptocurrency Exchange Trials for Cross-Border Payments Starting September 2024",
      snippet:
        "Moscow, Russia - In a move to circumvent Western restrictions, the Russian government has announced plans to launch regulated trials of...",
      publisher: "Yahoo Finance",
      timestamp: "1724764636000",
      newsUrl:
        "https://finance.yahoo.com/news/russia-launch-cryptocurrency-exchange-trials-131716082.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNHliR05GZWtSbGJrbG5SRXRRVFJDb0FSaXJBaWdCTWdZaFE1QnhwUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNHliR05GZWtSbGJrbG5SRXRRVFJDb0FSaXJBaWdCTWdZaFE1QnhwUWc",
      },
    },
    {
      title: "Cryptocurrency Basics: Pros, Cons and How It Works",
      snippet:
        "Cryptocurrency (or “crypto”) is a digital currency, such as Bitcoin, that is used as an alternative payment method or speculative investment.",
      publisher: "NerdWallet",
      timestamp: "1722582000000",
      newsUrl: "https://www.nerdwallet.com/article/investing/cryptocurrency",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVNiMTlpV1dkNGVqRnVVa2MyVFJDdUFSaWlBaWdCTWdhWlU1S1BvUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVNiMTlpV1dkNGVqRnVVa2MyVFJDdUFSaWlBaWdCTWdhWlU1S1BvUWc",
      },
    },
    {
      title:
        "“Same risks, same rules”: The SEC’s selective approach to crypto regulation",
      snippet:
        "When it comes to cryptocurrency regulation, the SEC views most cryptocurrencies as securities, favoring the concept of 'same risks,...",
      publisher: "Ledger Insights",
      timestamp: "1725036538000",
      newsUrl:
        "https://www.ledgerinsights.com/same-risks-same-rules-the-secs-selective-approach-to-crypto-regulation/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNTZkVXBoVWpCa1J6UnpTWGRKVFJDMEFSaVhBaWdCTWdhaEU0ck56UVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTZkVXBoVWpCa1J6UnpTWGRKVFJDMEFSaVhBaWdCTWdhaEU0ck56UVE",
      },
    },
    {
      title: "Singapore Bags Top Spot in Global Cryptocurrency Adoption",
      snippet:
        "Singapore tops the 2024 crypto adoption index published by Henley & Partners, with Hong Kong and UAE following closely behind.",
      publisher: "Crypto Times",
      timestamp: "1725060136000",
      newsUrl:
        "https://www.cryptotimes.io/2024/08/31/singapore-bags-top-spot-in-global-cryptocurrency-adoption/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXNTR1kwWXpscmNsWTFZbXAxVFJDM0FSaVRBaWdCTWdZZGRKU01yUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXNTR1kwWXpscmNsWTFZbXAxVFJDM0FSaVRBaWdCTWdZZGRKU01yUWM",
      },
    },
    {
      title: "Russia challenges US dominance with new cryptocurrency exchanges",
      snippet:
        "Russia's recent move to establish its own cryptocurrency exchanges is making waves in the financial world. George Tung, Host of CryptosRUs,...",
      publisher: "TheStreet",
      timestamp: "1724801163000",
      newsUrl:
        "https://www.thestreet.com/crypto/markets/russia-challenges-us-dominance-with-new-cryptocurrency-exchanges",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNW9jekpSY0c5dlJ6SmhlRVYzVFJDb0FSaXNBaWdCTWdZcGhaRE5OUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW9jekpSY0c5dlJ6SmhlRVYzVFJDb0FSaXNBaWdCTWdZcGhaRE5OUVk",
      },
    },
    {
      title: "Advantages and Disadvantages of Cryptocurrency in 2024",
      snippet:
        "Cryptocurrency is not a risk-free investment. The market risks, cybersecurity risks and regulatory risks, as cryptocurrency is not issued or regulated by any...",
      publisher: "Forbes",
      timestamp: "1724137200000",
      newsUrl:
        "https://www.forbes.com/advisor/in/investing/cryptocurrency/advantages-of-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNWtSREpLZEdreU1IVktUbkJ5VFJDb0FSaXNBaWdCTWdZNWs0d3l1UVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWtSREpLZEdreU1IVktUbkJ5VFJDb0FSaXNBaWdCTWdZNWs0d3l1UVU",
      },
    },
    {
      title: "Why Is the Crypto Market Rising Today?",
      snippet:
        "Leading crypto coins have shown robust stability in the year 2024 and have been trading in “extreme greed”. Here's what's happening in the...",
      publisher: "Forbes",
      timestamp: "1723878000000",
      newsUrl:
        "https://www.forbes.com/advisor/in/investing/cryptocurrency/why-is-crypto-going-up/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUJRalpNVmtrd1VGUnFXa3BqVFJDb0FSaXNBaWdCTWdZcEE0S1BEUU0=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUJRalpNVmtrd1VGUnFXa3BqVFJDb0FSaXNBaWdCTWdZcEE0S1BEUU0",
      },
    },
    {
      title: "All You Need To Know About India’s Crypto Bill",
      snippet:
        "A cryptocurrency is a virtual asset based on a network scattered across many computers. It is a decentralized form that allows...",
      publisher: "Forbes",
      timestamp: "1723878000000",
      newsUrl:
        "https://www.forbes.com/advisor/in/investing/cryptocurrency/crypto-bill/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUVTMWRDTmtsUFJFNVRPRFkwVFJDM0FSaVRBaWdCTWdhSkJZTE1sUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUVTMWRDTmtsUFJFNVRPRFkwVFJDM0FSaVRBaWdCTWdhSkJZTE1sUWc",
      },
    },
    {
      title: "What Is Cryptocurrency: Types, Benefits, History and More",
      snippet:
        "Modern currency includes paper currency, coins, credit cards, and digital wallets—for example, Apple Pay, Amazon Pay, Paytm, PayPal, and so on.",
      publisher: "Simplilearn",
      timestamp: "1723532400000",
      newsUrl:
        "https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-cryptocurrency",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNU1ZMWRxUlZSM2MwZEJjWEk0VFJDb0FSaXNBaWdCTWdhVlE1Q3JKUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNU1ZMWRxUlZSM2MwZEJjWEk0VFJDb0FSaXNBaWdCTWdhVlE1Q3JKUWc",
      },
    },
    {
      title:
        "Cryptocurrency, Digital or Virtual Currency and Digital Assets 2024 Legislation",
      snippet:
        "Bitcoin and other cryptocurrencies are a form of digital currency used in electronic payment transactions—no coins, paper money or banks are involved.",
      publisher: "National Conference of State Legislatures",
      timestamp: "1722841200000",
      newsUrl:
        "https://www.ncsl.org/financial-services/cryptocurrency-digital-or-virtual-currency-and-digital-assets-2024-legislation",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNXJUblJPZEV0cFNqUXpiVmh1VFJDM0FSaVRBaWdCTWdtVkFZYUtsU1JWRVFF=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNXJUblJPZEV0cFNqUXpiVmh1VFJDM0FSaVRBaWdCTWdtVkFZYUtsU1JWRVFF",
      },
    },
    {
      title:
        "FERC rejects Basin Electric’s cryptocurrency mining rate proposal",
      snippet:
        "Basin Electric failed to show it was fair to treat cryptocurrency loads differently from other similar-sized loads, the agency said in a...",
      publisher: "Utility Dive",
      timestamp: "1724223600000",
      newsUrl:
        "https://www.utilitydive.com/news/ferc-basin-electrics-cryptocurrency-bitcoin-mining-rate-proposal/724811/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUNOWEZ6YjBsellYRnNWMHhrVFJDb0FSaXNBaWdCTWdZZHRJYU1QUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUNOWEZ6YjBsellYRnNWMHhrVFJDb0FSaXNBaWdCTWdZZHRJYU1QUVU",
      },
    },
    {
      title:
        "Here's How a Democratic Victory Could Affect the Cryptocurrency Market",
      snippet:
        "Heading into the final stretch of the 2024 presidential campaign, the Republican Party appears to have the upper hand with pro-crypto voters...",
      publisher: "Yahoo Finance",
      timestamp: "1724602860000",
      newsUrl:
        "https://finance.yahoo.com/news/heres-democratic-victory-could-affect-162100140.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNTBaVjlwZW5KTGJVcFhha0kzVFJEQ0FSaURBaWdCTWdZVk1wYXRGUW8=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTBaVjlwZW5KTGJVcFhha0kzVFJEQ0FSaURBaWdCTWdZVk1wYXRGUW8",
      },
    },
    {
      title: "Simon’s Cat Sinks Claws into Cryptocurrency Market",
      snippet:
        "Banijay Rights, the global distribution arm of Banijay Entertainment, today announces Simon's Cat (a Banijay UK company) and Web3 marketing...",
      publisher: "Animation Magazine",
      timestamp: "1724798386000",
      newsUrl:
        "https://www.animationmagazine.net/2024/08/simons-cat-sinks-claws-into-cryptocurrency-market/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVZVMjFZUkdkVE5Wa3hMV2QzVFJDdUFSaWlBaWdCTWdhaFk1S05xUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVZVMjFZUkdkVE5Wa3hMV2QzVFJDdUFSaWlBaWdCTWdhaFk1S05xUWM",
      },
    },
    {
      title: "MARA vs. COIN: Which Cryptocurrency Stock Is Better?",
      snippet:
        "In this article, I evaluated two cryptocurrency stocks: Marathon Digital Holdings ($MARA) and Coinbase Global ($COIN).",
      publisher: "TipRanks",
      timestamp: "1725008120000",
      newsUrl:
        "https://www.tipranks.com/news/article/mara-vs-coin-which-cryptocurrency-stock-is-better",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUtiM0pxZEhOSmVHZ3dWMEpUVFJDbEFSaXhBaWdCTWdZaElJeFN3UVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUtiM0pxZEhOSmVHZ3dWMEpUVFJDbEFSaXhBaWdCTWdZaElJeFN3UVk",
      },
    },
    {
      title: "Coinflip Expands Cryptocurrency ATM Services to Mexico",
      snippet:
        "Coinflip has officially launched its digital currency kiosks, otherwise known as automated teller machines (ATMs), in Mexico.",
      publisher: "Bitcoin.com News",
      timestamp: "1724859035000",
      newsUrl:
        "https://news.bitcoin.com/coinflip-expands-cryptocurrency-atm-services-to-mexico/",
      images: {
        thumbnail: null,
      },
    },
    {
      title: "Who is using cryptocurrency?",
      snippet:
        "Why do people use cryptocurrency? Cryptocurrency is most often used as an investment: in 2023, 7% of all US adults bought or held crypto as an...",
      publisher: "USAFacts ",
      timestamp: "1720767600000",
      newsUrl: "https://usafacts.org/articles/who-is-using-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVdhRzh4UmxBeE4wcG5RelZrVFJDakFSaTJBaWdCTWdZUmxvTHRzUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVdhRzh4UmxBeE4wcG5RelZrVFJDakFSaTJBaWdCTWdZUmxvTHRzUVk",
      },
    },
    {
      title: "How To Buy Cryptocurrency",
      snippet:
        "To buy cryptocurrency, you first need to pick a broker or cryptocurrency exchange. While either lets you buy crypto, there are key differences between them.",
      publisher: "Forbes",
      timestamp: "1723878000000",
      newsUrl:
        "https://www.forbes.com/advisor/in/investing/cryptocurrency/how-to-buy-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNTVjRVZhTjBGbmRUaExUWEU0VFJDb0FSaXNBaWdCTWdZZGhJNkt0UVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTVjRVZhTjBGbmRUaExUWEU0VFJDb0FSaXNBaWdCTWdZZGhJNkt0UVU",
      },
    },
    {
      title: "12 Most Popular Types Of Cryptocurrency",
      snippet:
        "Here are the largest cryptocurrencies by the total dollar value of the coins in existence, that is, the market capitalization, or market cap.",
      publisher: "Bankrate.com",
      timestamp: "1722841200000",
      newsUrl: "https://www.bankrate.com/investing/types-of-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUtkMHRNUlRSSVVtOXVSMDl6VFJDb0FSaXNBaWdCTWdhZEE0TExsUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUtkMHRNUlRSSVVtOXVSMDl6VFJDb0FSaXNBaWdCTWdhZEE0TExsUWs",
      },
    },
    {
      title:
        "I Bought My First Bitcoin At 15 In A McDonald’s. I Haven’t Looked Back",
      snippet:
        "Forbes Advisor's cryptocurrency writer and expert, Patrick McGimpsey, started buying bitcoin because he was too young to invest in...",
      publisher: "Forbes",
      timestamp: "1724853360000",
      newsUrl:
        "https://www.forbes.com/advisor/au/investing/cryptocurrency/buying-bitcoin-at-15-in-mcdonalds/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXRhVkU0VlhORFZHOWlYMGRYVFJDb0FSaXNBaWdCTWdaQmtvYjB2QU0=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRhVkU0VlhORFZHOWlYMGRYVFJDb0FSaXNBaWdCTWdaQmtvYjB2QU0",
      },
    },
    {
      title:
        "China Tackles Cryptocurrency Crimes with First Case and New Guidelines",
      snippet:
        "China tackles cryptocurrency crimes with first case conviction and new guidelines to standardize virtual currency crime prosecution.",
      publisher: "Coinspeaker",
      timestamp: "1725035265000",
      newsUrl:
        "https://www.coinspeaker.com/china-cryptocurrency-crimes-first-case/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNWpURlZpTWpjM1JXa3pWbVl6VFJDM0FSaVRBaWdCTWdhWlpJNnRMUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWpURlZpTWpjM1JXa3pWbVl6VFJDM0FSaVRBaWdCTWdhWlpJNnRMUWc",
      },
    },
    {
      title:
        "Cryptocurrency Market Dips: Tether’s Surge and Liquidity Crises Shake Investor Confidence",
      snippet:
        "The cryptocurrency market has seen a sudden drop, with Tether's dominance rising and liquidity issues causing significant losses.",
      publisher: "The Currency Analytics",
      timestamp: "1725086785000",
      newsUrl:
        "https://thecurrencyanalytics.com/marketmovers/cryptocurrency-market-dips-tethers-surge-and-liquidity-crises-shake-investor-confidence-133379",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNVFZMDFJT0dSUFNVOXpOMU5rVFJDb0FSaXNBaWdCTWdrQk1JQUpzZUVzaVFJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNVFZMDFJT0dSUFNVOXpOMU5rVFJDb0FSaXNBaWdCTWdrQk1JQUpzZUVzaVFJ",
      },
    },
    {
      title: "Better Cryptocurrency to Buy Right Now: Bitcoin vs. XRP",
      snippet:
        "Bitcoin (BTC -0.40%) and XRP (XRP -2.17%) are two very different types of cryptocurrencies. Bitcoin, the world's top cryptocurrency,...",
      publisher: "The Motley Fool",
      timestamp: "1724595420000",
      newsUrl:
        "https://www.fool.com/investing/2024/08/25/better-cryptocurrency-to-buy-now-bitcoin-vs-xrp/",
      images: {
        thumbnail: null,
      },
    },
    {
      title: "Russia Rethinks Crypto Exchanges to Smooth Payments Obstacles",
      snippet:
        "Russia is reportedly preparing to begin trials of cryptocurrency exchanges and cross-border crypto transactions.",
      publisher: "PYMNTS.com",
      timestamp: "1724721420000",
      newsUrl:
        "https://www.pymnts.com/cryptocurrency/2024/russia-rethinks-crypto-exchanges-to-smooth-payments-obstacles/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDRWRTVyYTBoTlFWYzVhVGhsVFJDdUFSaWlBaWdCTWdZeFlvNHl2UVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDRWRTVyYTBoTlFWYzVhVGhsVFJDdUFSaWlBaWdCTWdZeFlvNHl2UVU",
      },
    },
    {
      title:
        "Gavel to Gavel: Navigating the complexities of cryptocurrency mining",
      snippet:
        "The cryptocurrency industry presents a host of challenges to individuals and businesses who wish to enter the market.",
      publisher: "Journal Record",
      timestamp: "1724846685000",
      newsUrl:
        "https://journalrecord.com/2024/08/gavel-to-gavel-navigating-the-complexities-of-cryptocurrency-mining/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNHhZWGhXZG5SRFJUZHJRMTh4VFJDeUFSaWNBaWdCTWdtTk1aekdvbWcxaGdJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNHhZWGhXZG5SRFJUZHJRMTh4VFJDeUFSaWNBaWdCTWdtTk1aekdvbWcxaGdJ",
      },
    },
    {
      title: "Cryptocurrency: What It Is And How It Works",
      snippet:
        "Cryptocurrencies are produced, tracked and managed through what's called a distributed ledger such as blockchain. In a distributed ledger, the...",
      publisher: "Bankrate.com",
      timestamp: "1721372400000",
      newsUrl: "https://www.bankrate.com/investing/what-is-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXNaa0paZUZSRVZUVmhRVnBSVFJDb0FSaXNBaWdCTWdhWkFvUkxtUVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXNaa0paZUZSRVZUVmhRVnBSVFJDb0FSaXNBaWdCTWdhWkFvUkxtUVE",
      },
    },
    {
      title: "North Korean hackers exploit Chrome bug to steal cryptocurrency",
      snippet:
        "In a recent cybersecurity breach, a North Korean hacking group known as 'Citrine Sleet' exploited an unknown bug in Chrome-based browsers.",
      publisher: "NewsBytes",
      timestamp: "1725098200000",
      newsUrl:
        "https://www.newsbytesapp.com/news/science/chrome-flaw-allows-north-korean-hackers-to-steal-cryptocurrency/story",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNHlUVjlVV2w5MGRtWlZVMDFuVFJDb0FSaXNBaWdCTWdhQlpZekdxUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNHlUVjlVV2w5MGRtWlZVMDFuVFJDb0FSaXNBaWdCTWdhQlpZekdxUVk",
      },
    },
    {
      title:
        "Ripple (XRP) Investors Grab As Much Gains as They Can With New Cryptocurrency at $0.001777 | Bitcoinist.com",
      snippet:
        "Recently, a growing number of Ripple (XRP) investors have begun to pivot their focus towards Mpeppe (MPEPE), a promising new cryptocurrency...",
      publisher: "Bitcoinist",
      timestamp: "1725049001000",
      newsUrl:
        "https://bitcoinist.com/ripple-xrp-investors-grab-as-much-gains-as-they-can-with-new-cryptocurrency-at-0-001777/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXdXV0ZSUlU5WE5sUnNiV1prVFJDMUFSaVhBaWdCTWdZTklKQ21sZ3M=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXdXV0ZSUlU5WE5sUnNiV1prVFJDMUFSaVhBaWdCTWdZTklKQ21sZ3M",
      },
    },
    {
      title:
        "Next Cryptocurrency to Explode Friday, August 30 — ConstitutionDAO, Axie Infinity, Sun Token, Flare",
      snippet:
        "Discover cryptos with explosive potential for today, August 30. Using today's market data, find out what makes these tokens promising.",
      publisher: "Inside Bitcoins",
      timestamp: "1725085668000",
      newsUrl:
        "https://insidebitcoins.com/news/next-cryptocurrency-to-explode-friday-august-30-constitutiondao-axie-infinity-sun-token-flare",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDFZbXBLWDNka2FsZFBXbmwzVFJDaUFSaTNBaWdCTWdhQk1ZU1BHUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDFZbXBLWDNka2FsZFBXbmwzVFJDaUFSaTNBaWdCTWdhQk1ZU1BHUVU",
      },
    },
    {
      title:
        "Cryptocurrency Prices And News: Bitcoin Rebounds To $60,000, Near Two-Week Highs",
      snippet:
        "Cryptocurrency News: Bitcoin price rebounds near two-week highs, bitcoin ETF inflows rise. Crypto prices surge.",
      publisher: "Investor's Business Daily",
      timestamp: "1724137200000",
      newsUrl: "https://www.investors.com/news/cryptocurrency-prices-news/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNUhPSE5CWW5CeFdYaExUa1Z1VFJDb0FSaXNBaWdCTWdrQk1JNkxJU2pRVVFF=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNUhPSE5CWW5CeFdYaExUa1Z1VFJDb0FSaXNBaWdCTWdrQk1JNkxJU2pRVVFF",
      },
    },
    {
      title:
        "Cryptocurrency Prices on August 27: Bitcoin falls below $63,000; Dogecoin, Chainlink drop up to 4%",
      snippet:
        "Stablecoins currently dominate the crypto market, accounting for a significant 92.98% of the total 24-hour trading volume at $61.7 billion.",
      publisher: "The Economic Times",
      timestamp: "1724752185000",
      newsUrl:
        "https://m.economictimes.com/markets/cryptocurrency/cryptocurrency-prices-on-august-27-bitcoin-falls-below-63000-dogecoin-chainlink-drop-up-to-4/articleshow/112834705.cms",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNURjVVpCWVdWUlVUWTNPVVZhVFJEQ0FSaURBaWdCTWdhTkU0N3BHUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNURjVVpCWVdWUlVUWTNPVVZhVFJEQ0FSaURBaWdCTWdhTkU0N3BHUWs",
      },
    },
    {
      title: "6 of the Best Cryptocurrencies to Buy Now",
      snippet:
        "6 of the Best Cryptocurrencies to Buy Now. Crypto is having a moment in 2024. Here's a look at some top buys.",
      publisher: "U.S News & World Report Money",
      timestamp: "1722322800000",
      newsUrl:
        "https://money.usnews.com/investing/cryptocurrency/articles/whats-the-best-cryptocurrency-to-buy",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUxVVXBvTjB0UWNHRmZTMEk1VFJDMkFSaVZBaWdCTWdZdFFvb3ZvUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUxVVXBvTjB0UWNHRmZTMEk1VFJDMkFSaVZBaWdCTWdZdFFvb3ZvUWc",
      },
    },
    {
      title:
        "Cryptocurrency market: today prices are down and strong liquidations",
      snippet:
        "Today the market capitalization of cryptocurrencies has dropped by more than 5% compared to yesterday's prices and there have been strong...",
      publisher: "The Cryptonomist",
      timestamp: "1724828848000",
      newsUrl:
        "https://en.cryptonomist.ch/2024/08/28/cryptocurrency-market-today-prices-are-down-and-strong-liquidations/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXVVVmd6VmpaUWJWTktlVUZMVFJDM0FSaVRBaWdCTWdZTmM0aG5zUVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXVVVmd6VmpaUWJWTktlVUZMVFJDM0FSaVRBaWdCTWdZTmM0aG5zUVE",
      },
    },
    {
      title: "Why Is The Crypto Market Down Today?",
      snippet:
        "The cryptocurrency market experienced a downturn, with the total market capitalization dropping from $2.51 trillion as of May 2024 to $1.95 trillion as of...",
      publisher: "Forbes",
      timestamp: "1723186800000",
      newsUrl:
        "https://www.forbes.com/advisor/in/investing/cryptocurrency/why-crypto-market-is-down/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iJ0NnNXNORVZ3WmxSR01XMWpTVmhUVFJDb0FSaXNBaWdCTWdNVlZBdw=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNXNORVZ3WmxSR01XMWpTVmhUVFJDb0FSaXNBaWdCTWdNVlZBdw",
      },
    },
    {
      title: "Bethalto Police warn of cryptocurrency scam",
      snippet:
        "Bethalto Police are shining a spotlight on a recent investigation involving cryptocurrency and online scammers.",
      publisher: "AdVantageNEWS.com",
      timestamp: "1724839200000",
      newsUrl:
        "https://www.advantagenews.com/news/local/bethalto-police-warn-of-cryptocurrency-scam/article_3e86b36a-64bd-11ef-9692-27ee40fce525.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNW9VR2h3Wm1kR2JYZGpOSE5NVFJDa0FSaTBBaWdCTWdhTlVveXNzUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW9VR2h3Wm1kR2JYZGpOSE5NVFJDa0FSaTBBaWdCTWdhTlVveXNzUVU",
      },
    },
    {
      title: "B.C. man ordered to pay $1.2M in cryptocurrency loan dispute",
      snippet:
        "B.C. Supreme Court judge orders man to repay a Bitcoin loan after a years-long dispute.",
      publisher: "Kelowna Capital News",
      timestamp: "1725060666000",
      newsUrl:
        "https://www.kelownacapnews.com/news/bc-man-ordered-to-pay-12m-in-cryptocurrency-loan-dispute-7513081",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNW9ialk0TlZRMllrNUdWWGhXVFJDM0FSaVRBaWdCTWdrSkVZYkgwS05yNHdJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNW9ialk0TlZRMllrNUdWWGhXVFJDM0FSaVRBaWdCTWdrSkVZYkgwS05yNHdJ",
      },
    },
    {
      title: "North Korean hackers exploited Chrome zero-day to steal crypto",
      snippet:
        "The North Korean hackers' attack started by tricking a victim into visiting a web domain under the hackers' control.",
      publisher: "TechCrunch",
      timestamp: "1725038010000",
      newsUrl:
        "https://techcrunch.com/2024/08/30/north-korean-hackers-exploited-chrome-zero-day-to-steal-crypto/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVpTbVpHVjNkdmFqRkVTall6VFJDM0FSaVRBaWdCTWdhaDVvWUxTZ1E=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVpTbVpHVjNkdmFqRkVTall6VFJDM0FSaVRBaWdCTWdhaDVvWUxTZ1E",
      },
    },
    {
      title: "What Is Cryptocurrency?",
      snippet:
        "A cryptocurrency is a medium of exchange that is digital, encrypted and decentralized. Unlike the Canadian Dollar or the Euro, there is no...",
      publisher: "Forbes",
      timestamp: "1721977200000",
      newsUrl:
        "https://www.forbes.com/advisor/ca/investing/cryptocurrency/what-is-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNW5ORU5WYm1zemJrTnVUbEpwVFJDd0FSaWVBaWdCTWdrQkFJSWdpT003d1FN=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNW5ORU5WYm1zemJrTnVUbEpwVFJDd0FSaWVBaWdCTWdrQkFJSWdpT003d1FN",
      },
    },
    {
      title:
        "New Cryptocurrency Releases, Listings, & Presales Today – Auki Labs, Three Protocol Token, PlayDoge",
      snippet:
        "This article covers new cryptocurrency releases, listings, & presales today. Readers can use this data to make smart investment choices.",
      publisher: "Inside Bitcoins",
      timestamp: "1725093794000",
      newsUrl:
        "https://insidebitcoins.com/news/new-cryptocurrency-releases-listings-presales-today-auki-labs-three-protocol-token-playdoge",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXlWVUYyVWxOVlEyVjVXR1JKVFJDaUFSaTNBaWdCTWdZaE00ck5uUVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXlWVUYyVWxOVlEyVjVXR1JKVFJDaUFSaTNBaWdCTWdZaE00ck5uUVE",
      },
    },
    {
      title:
        "What is cryptocurrency? What to know about this increasingly popular digital currency before investing",
      snippet:
        "Cryptocurrency is a type of decentralized digital currency that investors can buy and sell along the blockchain. Unlike banknotes or minted...",
      publisher: "Business Insider",
      timestamp: "1721458800000",
      newsUrl:
        "https://www.businessinsider.com/personal-finance/investing/what-is-cryptocurrency",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNXFSRU52YjBOcFptdFpTMk5xVFJDZkFSaS1BaWdCTWdrWlFZWkp3cU5GQ3dJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNXFSRU52YjBOcFptdFpTMk5xVFJDZkFSaS1BaWdCTWdrWlFZWkp3cU5GQ3dJ",
      },
    },
    {
      title: "7 Best Free Cryptocurrency Cloud Mining Platforms of 2024",
      snippet:
        "Want to mine Bitcoin but don't have the best cloud mining gear? Bitcoin cloud mining is a popular solution.",
      publisher: "The Cryptonomist",
      timestamp: "1724835962000",
      newsUrl:
        "https://en.cryptonomist.ch/2024/08/28/7-best-free-cryptocurrency-cloud-mining-platforms-2024/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVplSGRYVFZZM1JFSmxUWFpFVFJDM0FSaVRBaWdCTWdhdFk1WnZxUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVplSGRYVFZZM1JFSmxUWFpFVFJDM0FSaVRBaWdCTWdhdFk1WnZxUWM",
      },
    },
    {
      title: "Should Cryptocurrency Be Accepted as a Means of Payment",
      snippet:
        "Should Cryptocurrency Be Accepted as a Means of Payment In many countries, news periodically surfaces mentioning cryptocurrencies.",
      publisher: "openPR",
      timestamp: "1725059400000",
      newsUrl:
        "https://www.openpr.com/news/3641215/should-cryptocurrency-be-accepted-as-a-means-of-payment",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUNaRTFaYm5oWlRHdHBUMWxhVFJDeEFSaWNBaWdCTWdhRmNJcXpLQVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUNaRTFaYm5oWlRHdHBUMWxhVFJDeEFSaWNBaWdCTWdhRmNJcXpLQVk",
      },
    },
    {
      title:
        "How Institutional Adoption is Shaping the Cryptocurrency Market: A Case Study of Wall Street",
      snippet:
        "Wall Street took the lead in cryptocurrency investments as registered investment advisers, hedge funds, and others boosted their stakes in...",
      publisher: "Hudson Valley Post",
      timestamp: "1724944203000",
      newsUrl:
        "https://hudsonvalleypost.com/institutional-adoption-shaping-cryptocurrency-market-wall-street/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDNZMjg1VEZsSlJsQTNNWE5ZVFJDM0FSaVRBaWdCTWdZWk5JYUxQUVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDNZMjg1VEZsSlJsQTNNWE5ZVFJDM0FSaVRBaWdCTWdZWk5JYUxQUVE",
      },
    },
    {
      title: "FDU Poll finds Trump’s Embrace of Crypto Pays Off",
      snippet:
        "Fairleigh Dickinson University, Madison, NJ, August 30, 2024 – Voters who say that they own cryptocurrency or related assets favor former...",
      publisher: "Fairleigh Dickinson University",
      timestamp: "1725023682000",
      newsUrl:
        "https://www.fdu.edu/news/fdu-poll-finds-trumps-embrace-of-crypto-pays-off/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iL0NnNVRlVlJhY1dGbFoybHhjUzFvVFJDd0FSaWVBaWdCTWdrTkVJWnJGS2l4cHdJ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNVRlVlJhY1dGbFoybHhjUzFvVFJDd0FSaWVBaWdCTWdrTkVJWnJGS2l4cHdJ",
      },
    },
    {
      title: "The Ultimate Cryptocurrency to Buy With $1,000 in August",
      snippet:
        "Investors should keep it simple and focus on the most developed cryptocurrency.",
      publisher: "The Motley Fool",
      timestamp: "1724662980000",
      newsUrl:
        "https://www.fool.com/investing/2024/08/26/ultimate-cryptocurrency-to-buy-with-1000-in-august/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXRSek51UWxjek5HdEpNa1JJVFJDNEFSaVRBaWdCTWdhaEZJVE1tUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRSek51UWxjek5HdEpNa1JJVFJDNEFSaVRBaWdCTWdhaEZJVE1tUWs",
      },
    },
    {
      title:
        "Trump is launching a cryptocurrency platform, and we have no idea what it does",
      snippet:
        "Former President Donald Trump is launching a cryptocurrency platform, he announced on Thursday in a post on Truth Social.",
      publisher: "The Verge",
      timestamp: "1724310000000",
      newsUrl:
        "https://www.theverge.com/2024/8/22/24226184/trump-defiant-ones-cryptocurrency-platform",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iMkNnNVBMVmRsYzB0MlpuTlVjUzF6VFJDaUFSaTNBaWdCTWdzQklJTG1VQ0k0cHdyMmtn=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iMkNnNVBMVmRsYzB0MlpuTlVjUzF6VFJDaUFSaTNBaWdCTWdzQklJTG1VQ0k0cHdyMmtn",
      },
    },
    {
      title:
        "Crypto Is Minting Millionaires, but Its Payment Utility Remains Uncertain",
      snippet:
        "Will cryptocurrencies be able to prove their value as a viable and scalable payment solution, or will they remain a speculative asset class?",
      publisher: "PYMNTS.com",
      timestamp: "1724918664000",
      newsUrl:
        "https://www.pymnts.com/cryptocurrency/2024/crypto-is-minting-millionaires-but-its-payment-utility-remain-uncertain/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNWpPRnBTVTJJeGExQmlSMnBYVFJDdUFSaWlBaWdCTWdZWmM0anFzUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWpPRnBTVTJJeGExQmlSMnBYVFJDdUFSaWlBaWdCTWdZWmM0anFzUVU",
      },
    },
    {
      title: "Crypto stolen in 2024 tops $1.2 billion",
      snippet:
        "Despite the cryptocurrency industry witnessing hacks seemingly every week, the month of August saw a marked decrease in the amount of crypto...",
      publisher: "TheStreet",
      timestamp: "1724967944000",
      newsUrl:
        "https://www.thestreet.com/crypto/markets/crypto-stolen-in-august-declines-but-2024-losses-already-top-1-2-billion",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXNZbEJoVjJwRE9WRjNTVGxXVFJEaEFSamhBU2dCTWdZQk00aE5TUVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXNZbEJoVjJwRE9WRjNTVGxXVFJEaEFSamhBU2dCTWdZQk00aE5TUVE",
      },
    },
    {
      title: "Cryptocurrency Statistics 2024: Investing In Crypto",
      snippet:
        "Below is an easy-to-follow guide on the most important things to know about digital currencies and new developments in the crypto market.",
      publisher: "Bankrate.com",
      timestamp: "1715151600000",
      newsUrl: "https://www.bankrate.com/investing/cryptocurrency-statistics/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iOkNnNHlSMjFyZDE5elNtbElNRTh6VFJDb0FSaXNBaWdCTWhFRkVJS09MU2U1Wm9vSFBSSnNpN2FZQ2c=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iOkNnNHlSMjFyZDE5elNtbElNRTh6VFJDb0FSaXNBaWdCTWhFRkVJS09MU2U1Wm9vSFBSSnNpN2FZQ2c",
      },
    },
    {
      title: "BlackRock unveils ethereum ETF in Brazil",
      snippet:
        "BlackRock, the world's largest asset manager, has launched its new ethereum exchange-traded fund (ETF) on B3, one of the top exchanges in...",
      publisher: "TheStreet",
      timestamp: "1724886856000",
      newsUrl:
        "https://www.thestreet.com/crypto/markets/blackrock-unveils-ethereum-etf-in-brazil",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXRWMWN5ZDJScVlrRkhOekpGVFJDb0FSaXNBaWdCTWdhaFpJcXNxUVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRWMWN5ZDJScVlrRkhOekpGVFJDb0FSaXNBaWdCTWdhaFpJcXNxUVE",
      },
    },
    {
      title: "Top Cryptocurrency Statistics And Trends In 2024",
      snippet:
        "The cryptocurrency market is forecasted to reach $6.6 billion in 2024, with an estimated annual growth rate of -2.44%, leading to a projected...",
      publisher: "Forbes",
      timestamp: "1723878000000",
      newsUrl:
        "https://www.forbes.com/advisor/in/investing/cryptocurrency/cryptocurrency-statistics/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNW5PVk5VVFMwd09XdHZRblZYVFJDb0FSaXNBaWdCTWdZQklvd21HZ2s=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW5PVk5VVFMwd09XdHZRblZYVFJDb0FSaXNBaWdCTWdZQklvd21HZ2s",
      },
    },
    {
      title:
        "Cryptocurrency Security Standard (CCSS): Bridging the confidence challenge | Deloitte Malta | Technology",
      snippet:
        "The CCSS is an open standard that focuses on the cryptocurrency storage and usage within an organisation[i]. CCSS is designed to augment standard information...",
      publisher: "Deloitte",
      timestamp: "1720721898000",
      newsUrl:
        "https://www.deloitte.com/mt/en/Industries/technology/perspectives/mt-article-cryptocurrency-security-standard-CCSS.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iI0NnNUNNREZsYzA5RlMySnFOMWg1VFJDZkFSaTlBaWdCTWdB=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iI0NnNUNNREZsYzA5RlMySnFOMWg1VFJDZkFSaTlBaWdCTWdB",
      },
    },
    {
      title:
        "How to Buy Bitcoin & Other Cryptocurrencies: A Step-by-Step Guide",
      snippet:
        "Cryptocurrencies are digital assets that trade on a 24/7 global market. If you're thinking about adding cryptocurrencies like bitcoin,...",
      publisher: "Business Insider",
      timestamp: "1721458800000",
      newsUrl:
        "https://www.businessinsider.com/personal-finance/investing/how-to-buy-cryptocurrency",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNU1kVXB1V0RCeGFWWmhRbGgyVFJDZkFSaS1BaWdCTWdZcFZZck5JUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNU1kVXB1V0RCeGFWWmhRbGgyVFJDZkFSaS1BaWdCTWdZcFZZck5JUVU",
      },
    },
    {
      title: "12 most popular types of cryptocurrency",
      snippet:
        "Here are the largest cryptocurrencies by the total dollar value of the coins in existence, that is, the market capitalization, or market cap.",
      publisher: "Yahoo Finance",
      timestamp: "1722841200000",
      newsUrl:
        "https://finance.yahoo.com/news/12-most-popular-types-cryptocurrency-221243578.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUNkRmxZWTNCUVNHbDJTVXByVFJDb0FSaXNBaWdCTWdhZEE0RExsUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUNkRmxZWTNCUVNHbDJTVXByVFJDb0FSaXNBaWdCTWdhZEE0RExsUWs",
      },
    },
    {
      title: "How To Invest in Crypto Without Buying Crypto",
      snippet:
        "You can gain exposure to cryptocurrency without buying any by purchasing shares of Bitcoin Spot ETFs, Bitcoin Trusts, or ETPs linked to cryptocurrency futures.",
      publisher: "Investopedia",
      timestamp: "1716620400000",
      newsUrl:
        "https://www.investopedia.com/indirect-crypto-investment-6386330",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNTZZVWh1UzI1bWEzVk5XR3R4VFJDM0FSaVRBaWdCTWdhSklvcnpFQW8=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTZZVWh1UzI1bWEzVk5XR3R4VFJDM0FSaVRBaWdCTWdhSklvcnpFQW8",
      },
    },
    {
      title: "The History of Bitcoin | Investing",
      snippet:
        "As the first-ever and largest cryptocurrency, Bitcoin's been on a roller-coaster journey.",
      publisher: "U.S News & World Report Money",
      timestamp: "1721804400000",
      newsUrl:
        "https://money.usnews.com/investing/articles/the-history-of-bitcoin",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXlSRWRSYlRWNGVVdG5TMHd5VFJDMkFSaVZBaWdCTWdZcFpZN09zUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXlSRWRSYlRWNGVVdG5TMHd5VFJDMkFSaVZBaWdCTWdZcFpZN09zUVk",
      },
    },
    {
      title: "McDull Meme Token Launches, Combining Humor with Cryptocurrency",
      snippet:
        "The cryptocurrency landscape is about to witness a delightful new entrant with the official introduction of McDull, a meme token inspired by...",
      publisher: "CoinTrust",
      timestamp: "1725006667000",
      newsUrl:
        "https://www.cointrust.com/market-news/mcdull-meme-token-launches-combining-humor-with-cryptocurrency",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXRURTVyTlVoWFUwNURTemcxVFJDZkFSaS1BaWdCTWdhZFU0cU5yUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRURTVyTlVoWFUwNURTemcxVFJDZkFSaS1BaWdCTWdhZFU0cU5yUVU",
      },
    },
    {
      title: "UC students' cryptocurrency advice leads to big gains",
      snippet:
        "Using recommendations from University of Cincinnati students, a cryptocurrency fund has grown from $50000 to more than $120000 in less than...",
      publisher: "University of Cincinnati",
      timestamp: "1712214000000",
      newsUrl:
        "https://www.uc.edu/news/articles/2024/04/uc-students-cryptocurrency-advice-leads-to-big-gains.html",
      images: {
        thumbnail: null,
      },
    },
    {
      title: "Can Cryptocurrency Still ‘Do Good’?",
      snippet:
        "Cryptocurrency has the potential to do even more good for philanthropy than cash, with tax-smart gains for you and the charity.",
      publisher: "Fidelity Charitable",
      timestamp: "1717138800000",
      newsUrl:
        "https://www.fidelitycharitable.org/articles/can-cryptocurrency-still-do-good.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNTVkMjVRTVc5TGREY3ljRzlIVFJDM0FSaVRBaWdCTWdhcEJKU3RLUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTVkMjVRTVc5TGREY3ljRzlIVFJDM0FSaVRBaWdCTWdhcEJKU3RLUWM",
      },
    },
    {
      title:
        "Top Ten Bitcoin Rival Crypto Toncoin Suffers Sudden Huge Price Crash As Telegram CEO Pavel Durov Arrested",
      snippet:
        "Toncoin Toncoin 0.0% , a cryptocurrency rival to bitcoin that boasts a market capitalization of around $14 billion, has suddenly crashed...",
      publisher: "Forbes",
      timestamp: "1724656800000",
      newsUrl:
        "https://www.forbes.com/sites/digital-assets/2024/08/25/top-ten-bitcoin-rival-crypto-toncoin-suffers-sudden-huge-price-crash-as-telegram-ceo-pavel-durov-arrested/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVBkWEo0WW5KWFJXUmFXVXRzVFJDMUFSaVdBaWdCTWdZdGRaU3VyUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVBkWEo0WW5KWFJXUmFXVXRzVFJDMUFSaVdBaWdCTWdZdGRaU3VyUWM",
      },
    },
    {
      title:
        "Study suggests cryptocurrency owners share unique psychological and political traits",
      snippet:
        "A recent study links cryptocurrency ownership to various political, psychological, and social traits. Findings show strong correlations with...",
      publisher: "News-Medical.Net",
      timestamp: "1720335600000",
      newsUrl:
        "https://www.news-medical.net/news/20240707/Study-suggests-cryptocurrency-owners-share-unique-psychological-and-political-traits.aspx",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXdUbkpVVDBjM1dtY3lUMkpYVFJDM0FSaVRBaWdCTWdZcFZZN05xUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXdUbkpVVDBjM1dtY3lUMkpYVFJDM0FSaVRBaWdCTWdZcFZZN05xUWM",
      },
    },
    {
      title:
        "[REPORT PREVIEW] Money Laundering and Cryptocurrency: Trends and new techniques for detection and investigation",
      snippet:
        "This comprehensive report not only shows how to trace known illicit funds on the blockchain but also introduces advanced data techniques to identify potential...",
      publisher: "Chainalysis Blog",
      timestamp: "1720681200000",
      newsUrl:
        "https://www.chainalysis.com/blog/money-laundering-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDBPSEYyVjFnNVYzRldUMkpzVFJDVUFSalZBaWdCTWdhZFk0NXNzUVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDBPSEYyVjFnNVYzRldUMkpzVFJDVUFSalZBaWdCTWdhZFk0NXNzUVU",
      },
    },
    {
      title:
        "Suspect in $14 billion cryptocurrency pyramid scheme extradited to China",
      snippet:
        "The suspect, identified only as Zhang by China, is Tedy Teow, a Malaysian businessman arrested by Thai authorities in 2022, according to...",
      publisher: "The Record from Recorded Future News",
      timestamp: "1724423587000",
      newsUrl:
        "https://therecord.media/cryptocurrecy-pyramid-scheme-extradited-china-thailand",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVBTV1V3WTFCUFpXTk5iMDl2VFJDckFSaW5BaWdCTWdZQkFvN0xDUXc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVBTV1V3WTFCUFpXTk5iMDl2VFJDckFSaW5BaWdCTWdZQkFvN0xDUXc",
      },
    },
    {
      title: "Taxation of Cryptocurrency and Other Digital Assets",
      snippet:
        "Digital assets are treated as property for federal tax purposes. General tax principles applicable to property transactions apply to digital asset transactions.",
      publisher: "Bloomberg Tax",
      timestamp: "1707811200000",
      newsUrl:
        "https://pro.bloombergtax.com/insights/corporate-tax-planning/cryptocurrency-taxation-regulations/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXJSemRrU2xKMkxVdzNUalJDVFJDQkFSaUZBeWdCTWdZQkU0Unh3UVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJSemRrU2xKMkxVdzNUalJDVFJDQkFSaUZBeWdCTWdZQkU0Unh3UVE",
      },
    },
    {
      title:
        "The number of bitcoin millionaires has soared 111% in the last year as the cryptocurrency rallies",
      snippet:
        "The number of bitcoin millionaires has soared as the crypto rallies. There have also been six new crypto billionaires minted in the past...",
      publisher: "Markets Insider",
      timestamp: "1724789100000",
      newsUrl:
        "https://markets.businessinsider.com/news/currencies/bitcoin-millionaires-crypto-rally-cryptocurrency-etf-billionaires-sec-ethereum-wealth-2024-8",
      images: {
        thumbnail: null,
      },
    },
    {
      title: "7 Best Cryptocurrency ETFs to Buy | Investing",
      snippet:
        "Cryptocurrency ETFs can offer exposure without the complexities of self-custody.",
      publisher: "U.S News & World Report Money",
      timestamp: "1720422000000",
      newsUrl:
        "https://money.usnews.com/investing/articles/best-cryptocurrency-etfs-to-buy",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iJ0NnNXpRM1Z2YjJzMU1qaDRjV3MxVFJDMkFSaVZBaWdCTWdNQmNBZw=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNXpRM1Z2YjJzMU1qaDRjV3MxVFJDMkFSaVZBaWdCTWdNQmNBZw",
      },
    },
    {
      title: "Trump does a 180-degree turn on crypto",
      snippet:
        "Trump's head-spinning turnabout on cryptocurrency ... Photo illustration of Donald Trump hugging a golden crypto coin. ... Former President Trump...",
      publisher: "Axios",
      timestamp: "1717052400000",
      newsUrl: "https://www.axios.com/2024/05/30/trump-crypto-bitcoin-nfts",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXJWV1F0YjFodExVNDVSMmRwVFJDb0FSaXNBaWdCTWdhVkdJeUlGZ28=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJWV1F0YjFodExVNDVSMmRwVFJDb0FSaXNBaWdCTWdhVkdJeUlGZ28",
      },
    },
    {
      title:
        "North Korean Hackers Exploit Hidden Chrome Flaw To Steal Cryptocurrency: Here's What Happened",
      snippet:
        "North Korean hackers exploited a Chrome vulnerability to steal cryptocurrency, using a malicious site and a FudModule rootkit.,...",
      publisher: "Times Now",
      timestamp: "1725090898000",
      newsUrl:
        "https://www.timesnownews.com/technology-science/north-korean-hackers-exploit-hidden-chrome-flaw-to-steal-cryptocurrency-heres-what-happened-article-112944637",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUNMVGRWY1RWRVZHNHdUR1F4VFJDb0FSaXNBaWdCTWdZRmhJcVB2UVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUNMVGRWY1RWRVZHNHdUR1F4VFJDb0FSaXNBaWdCTWdZRmhJcVB2UVU",
      },
    },
    {
      title: "August 2024 Crypto Market Forecast",
      snippet:
        "Bitcoin prices are up 61.1% year-to-date in 2024, putting the cryptocurrency on track for its second consecutive year of sizable gains.",
      publisher: "Forbes",
      timestamp: "1722409200000",
      newsUrl:
        "https://www.forbes.com/advisor/investing/cryptocurrency/crypto-market-outlook-forecast/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVllRFZ0Y2t3NVEySjFWSEJHVFJDb0FSaXNBaWdCTWdhRk1ZaW1wZ1E=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVllRFZ0Y2t3NVEySjFWSEJHVFJDb0FSaXNBaWdCTWdhRk1ZaW1wZ1E",
      },
    },
    {
      title:
        "Charles Hoskinson Fears Dystopia and ‘Death of American Cryptocurrency Industry’ If Kamala Harris Is Elected",
      snippet:
        "Cardano (ADA) founder Charles Hoskinson believes a Kamala Harris victory in November is bad news for the United States.",
      publisher: "The Daily Hodl",
      timestamp: "1724769325000",
      newsUrl:
        "https://dailyhodl.com/2024/08/27/charles-hoskinson-fears-dystopia-and-death-of-american-cryptocurrency-industry-if-kamala-harris-is-elected/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDVaWEY1WDJjMk1WVkxORmxFVFJDc0FSaWxBaWdCTWdhcFJJcXRwUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDVaWEY1WDJjMk1WVkxORmxFVFJDc0FSaWxBaWdCTWdhcFJJcXRwUVk",
      },
    },
    {
      title: "Cryptocurrencies, Digital Dollars, and the Future of Money",
      snippet:
        "The dizzying rise of bitcoin and other cryptocurrencies has created new challenges for governments and central banks. Increasing popularity and high levels...",
      publisher: "Council on Foreign Relations",
      timestamp: "1705514729000",
      newsUrl:
        "https://www.cfr.org/backgrounder/crypto-question-bitcoin-digital-dollars-and-future-money",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUJZakZ3Y1RWd1MzcFVaeTFhVFJDM0FSaVRBaWdCTWdhcGxJU1BzUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUJZakZ3Y1RWd1MzcFVaeTFhVFJDM0FSaVRBaWdCTWdhcGxJU1BzUVk",
      },
    },
    {
      title: "Cryptocurrency in Texas",
      snippet:
        "Texans certainly can use and invest in cryptocurrencies as individuals, and the state is a leader in the industry. But in her address to the Texas Work Group,...",
      publisher: "Texas Comptroller",
      timestamp: "1713792402000",
      newsUrl:
        "https://comptroller.texas.gov/economy/fiscal-notes/archive/2022/aug/crypto-tx.php",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDRlbU4zVVdJd1NWaDBUV2h5VFJDdUFSaWlBaWdCTWdhQkVvd0p1UVU=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDRlbU4zVVdJd1NWaDBUV2h5VFJDdUFSaWlBaWdCTWdhQkVvd0p1UVU",
      },
    },
    {
      title: "How To Buy Cryptocurrency",
      snippet:
        "How To Buy Cryptocurrency · 1. Choose a Broker or Crypto Exchange · 2. Create and Verify Your Account · 3. Deposit Cash to Invest · 4. Place...",
      publisher: "Forbes",
      timestamp: "1715583600000",
      newsUrl:
        "https://www.forbes.com/advisor/investing/cryptocurrency/how-to-buy-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iJ0NnNUNPVk5XZDFkNFJsbDVObU5tVFJDb0FSaXNBaWdCTWdNZEJ3dw=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNUNPVk5XZDFkNFJsbDVObU5tVFJDb0FSaXNBaWdCTWdNZEJ3dw",
      },
    },
    {
      title:
        "Start Investing In Cryptocurrency: A Guide for Newcomers & Beginners",
      snippet:
        "If you are new to crypto, remember that buying cryptocurrency involves inherent risks just like any investment.",
      publisher: "Forbes",
      timestamp: "1722236400000",
      newsUrl:
        "https://www.forbes.com/advisor/investing/cryptocurrency/cryptocurrency-for-newcomers-beginners-guide/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNW9kSEZsVlRVeVZIQkdjMmRSVFJDb0FSaXNBaWdCTWdZdE01U1BIUWc=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW9kSEZsVlRVeVZIQkdjMmRSVFJDb0FSaXNBaWdCTWdZdE01U1BIUWc",
      },
    },
    {
      title: "Top 10 Cryptocurrencies Of August 2024",
      snippet:
        "Bitcoin, Ethereum, Dogecoin & Tether: there are thousands of different cryptocurrencies available. Let Forbes Advisor Australia walk you...",
      publisher: "Forbes",
      timestamp: "1721631600000",
      newsUrl:
        "https://www.forbes.com/advisor/au/investing/cryptocurrency/top-10-cryptocurrencies/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iMkNnNUlhSHBOZVdwalZrZEpTRGhSVFJDb0FSaXNBaWdCTWdzQkFZYXJIZWs4cUVvd1pB=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iMkNnNUlhSHBOZVdwalZrZEpTRGhSVFJDb0FSaXNBaWdCTWdzQkFZYXJIZWs4cUVvd1pB",
      },
    },
    {
      title:
        "Here’s how many new crypto millionaires—and billionaires—there are",
      snippet:
        "The market cap of the global cryptocurrency market has more than doubled in the past year, climbing from $1.05 trillion last August to $2.2...",
      publisher: "Fast Company",
      timestamp: "1724835985000",
      newsUrl:
        "https://www.fastcompany.com/91179967/how-many-new-crypto-bitcoin-millionaires-billionaires-2024",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNXJTemRaT0hkdVMwczJSbkpPVFJDb0FSaXNBaWdCTWdZQk5JNnZHUWM=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJTemRaT0hkdVMwczJSbkpPVFJDb0FSaXNBaWdCTWdZQk5JNnZHUWM",
      },
    },
    {
      title:
        "Correlation Between Cryptocurrency Performance and Blockchain Stocks",
      snippet:
        "Cryptocurrency has been around for years — long enough for evidence of a correlation between its performance and the stock market to emerge.",
      publisher: "AlexaBlockchain",
      timestamp: "1724662380000",
      newsUrl:
        "https://alexablockchain.com/correlation-cryptocurrency-performance-blockchain-stocks/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iJ0NnNDFXREl0TVhoa1NUaHdkVjlsVFJDb0FSaXNBaWdCTWdPQmN3bw=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNDFXREl0TVhoa1NUaHdkVjlsVFJDb0FSaXNBaWdCTWdPQmN3bw",
      },
    },
    {
      title:
        "Heat’s Jimmy Butler, YouTube influencer will pay $340,000 to resolve cryptocurrency claims",
      snippet:
        "Miami Heat's Jimmy Butler and YouTube influencer Ben Armstrong will pay $340000 to resolve claims of deceiving investors into buying...",
      publisher: "Miami Herald",
      timestamp: "1724272499000",
      newsUrl:
        "https://www.miamiherald.com/news/business/article291259170.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUdUbWhLUmpaeU1VbHVOMVZTVFJDeEFSaWRBaWdCTWdhQk1JNmtHZ2s=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUdUbWhLUmpaeU1VbHVOMVZTVFJDeEFSaWRBaWdCTWdhQk1JNmtHZ2s",
      },
    },
    {
      title: "3 Tech Stocks With More Potential Than Any Cryptocurrency",
      snippet:
        "AST SpaceMobile, Serve Robotics, and Lumen all have a lot of upside potential.",
      publisher: "The Motley Fool",
      timestamp: "1724578500000",
      newsUrl:
        "https://www.fool.com/investing/2024/08/25/tech-stocks-more-potential-than-cryptocurrency/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNDFVamR4UzFaNVV6SlBMVXRUVFJDb0FSaXNBaWdCTWdZVmNvYjBRQVE=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDFVamR4UzFaNVV6SlBMVXRUVFJDb0FSaXNBaWdCTWdZVmNvYjBRQVE",
      },
    },
    {
      title: "2024 Cryptocurrency Adoption and Sentiment Report",
      snippet:
        "Key Findings · Cryptocurrency awareness and ownership rates have increased to record levels: 40% of American adults now own crypto, up from 30%...",
      publisher: "Security.org",
      timestamp: "1718002800000",
      newsUrl:
        "https://www.security.org/digital-security/cryptocurrency-annual-consumer-report/",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNVFSMHAwYm5aVlN6bDJRbFJDVFJDTUFSam9BaWdCTWdhaEU0U1BKUWs=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVFSMHAwYm5aVlN6bDJRbFJDVFJDTUFSam9BaWdCTWdhaEU0U1BKUWs",
      },
    },
    {
      title:
        "Cryptocurrency 'pig butchering' scam wrecks Kansas bank, sends ex-CEO to prison for 24 years",
      snippet:
        "Heartland Tri-State Bank in Kansas failed after CEO Shan Hanes caused $47 million in wire transfers to be sent to scammers running a pig...",
      publisher: "CNBC",
      timestamp: "1724223600000",
      newsUrl:
        "https://www.cnbc.com/2024/08/21/cryptocurrency-shan-hanes-pig-butchering-scam.html",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNUtiakI2ZG10bmVWbGZWVjlDVFJDb0FSaXNBaWdCTWdhQko0cUhtZ2c=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUtiakI2ZG10bmVWbGZWVjlDVFJDb0FSaXNBaWdCTWdhQko0cUhtZ2c",
      },
    },
    {
      title: "Consumer Connection: Cryptocurrency ATM Scams",
      snippet:
        "One tactic being used in Iowa is a romance scam. The victim meets a romantic interest online or on a dating app, gains the victim's trust, then makes a request...",
      publisher: "Iowa Insurance Division |",
      timestamp: "1705910400000",
      newsUrl:
        "https://iid.iowa.gov/consumer-connection/2024-01-22/consumer-connection-cryptocurrency-atm-scams",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iK0NnNTJkM1ZaZW14TE5GRXhaek5LVFJEREFSaURBaWdCTWdZaFJZek1wUVk=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTJkM1ZaZW14TE5GRXhaek5LVFJEREFSaURBaWdCTWdZaFJZek1wUVk",
      },
    },
    {
      title:
        "Cryptocurrency Price Movements Today: Bitcoin Drops Below $65,000 Amid U.S. Selling Fears",
      snippet:
        "Key Takeaways ... Bitcoin (BTCUSD) has sharply reversed this week's upswing, dropping below $65,000 after rising above $71,000 on Monday.",
      publisher: "Investopedia",
      timestamp: "1722322800000",
      newsUrl:
        "https://www.investopedia.com/cryptocurrency-price-movements-today-07302024-8685982",
      images: {
        thumbnail: null,
      },
    },
    {
      title: "Top 7 Cryptocurrency Trends (2024 & 2025)",
      snippet:
        "In this report, we'll share the biggest trends driving the bull market and inspiring investors. Plus, we'll discuss the regulations and environmental concerns.",
      publisher: "Exploding Topics",
      timestamp: "1717052400000",
      newsUrl: "https://explodingtopics.com/blog/cryptocurrency-trends",
      images: {
        thumbnail:
          "https://news.google.com/api/attachments/CC8iJ0NnNVNWWHBSVm5kaE1VdE1VelpIVFJDZkFSaS1BaWdCTWdOSk1CSQ=-w280-h168-p-df-rw",
        thumbnailProxied:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNVNWWHBSVm5kaE1VdE1VelpIVFJDZkFSaS1BaWdCTWdOSk1CSQ",
      },
    },
  ],
};

const demoImg =
  "https://miro.medium.com/v2/resize:fit:1200/1*VqX9BfF6lzq_t9g8mmDcww.png";

const timestampToDate = (timestamp) => {
  let dateStr = moment(parseInt(timestamp)).startOf("ss").fromNow();
  return dateStr;
};

const textShorterner = (text, alphabetLimit) => {
  let shortText =
    text.length > alphabetLimit
      ? text.substring(0, alphabetLimit) + "..."
      : text;
  return shortText;
};

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  //const { data: cryptoData } = useGetCryptosQuery(100); //hook>
  // const { data, isFetching, isError } = useGetCryptoNewsQuery({
  //   newsCategory,
  //   count: simplified ? 6 : 12,
  // });
  let cryptoData = {};
  console.log("cryptoData");
  console.log(cryptoData);
  let data = _DA;
  let cryptoNews = data ? data.items : [];
  //
  cryptoNews = simplified ? cryptoNews?.slice(0, 6) : cryptoNews?.slice(0, 12);
  //
  // if (isFetching) return "Loading...";
  // if (isError) return "Error occured. Please try again";
  // console.log(cryptoNews);
  return (
    <Row guttor={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            onChange={(value) => setNewsCategory(value)}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option vlaue="cryptocurrency">Cryptocurrency</Select.Option>
            {cryptoData?.data?.coins.map(({ name }) => (
              <Select.Option value={name} key={name}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.length > 0 &&
        cryptoNews?.map(
          ({ newsUrl, title, snippet, publisher, images, timestamp }, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={newsUrl} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Typography.Title className="news-title" level={4}>
                      {textShorterner(title, 50)}
                    </Typography.Title>
                    <img
                      src={images?.thumbnailProxied || demoImg}
                      alt="news related media"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p>{textShorterner(snippet, 100)}</p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={/*images.thumbnail ||*/ demoImg}
                        alt="avatar"
                      ></Avatar>
                      <p className="provider-name">
                        {textShorterner(publisher, 30)}
                      </p>
                    </div>
                    <p>{timestampToDate(timestamp)}</p>
                  </div>
                </a>
              </Card>
            </Col>
          )
        )}
    </Row>
  );
};

export default News;
