import React from "react";
import "./Roadmap.css";
function Roadmap() {
  return (
    <div className="roadmap">
      <h1 className="title">Roadmap</h1>
      <p className="desc-road">Our plans moving forward into 2022</p>
      <div className="roadmap-grid">
        <div></div>
        <div className="vertical-line"></div>
        <div></div>
        <div className="grid-box grid1">
          <h1>Q3, 2021</h1>
          <h3>Slot Machine Development</h3>
          <p>
            With 10+ years of game development experience, the team came up with
            the ambitious plan to reinvent slot machines by bringing blockchain
            technologies to the gambling industry.
          </p>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div></div>

        <div></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="grid-box grid2">
          <h1>Q4, 2021</h1>
          <h3>Presale / Sale</h3>
          <p>19:00 UTC 7th December - Presale</p>
          <p>20:00 UTC 7th December - Public Sale</p>
          <h3>Rarity Sniper Integration</h3>
          <p>
            Track your Slotie's rarity with the largest NFT community in the
            world, Rarity Sniper. Sloties will be listed on Rarity Sniper and be
            seen by NFT holders worldwide.
          </p>
        </div>
        <div className="grid-box grid1">
          <h1>Q1-Q2, 2022</h1>
          <h3>Slottery Ticket Generation</h3>
          <p>
            To reward our early adopters, the very first Slotie Lottery will
            have a grand prize of 10 ETH. Each week following, Slotie holders
            can participate in a weekly lottery for cash prizes, WATTs tokens,
            NFTs and free spins in our partner casinos.
          </p>
          <h3 style={{ marginTop: "2rem" }}>
            Partnering up with 25 Partner Casinos
          </h3>
          <p>
            The road to mass adoption begins as our first 25 partners will
            introduce the Slotie NFT into their casinos. All Slotie NFT holders
            will have: ‍
          </p>
          <p>1.Exclusive Holder Reward,</p>
          <p>
            2.Ability to stake NFTs into the slot game & generate additional
            rewards,
          </p>
          <p>3.Up to 20% rakebacks in partner crypto casinos,</p>
          <p>4. WATTs tokens generated daily by Slotie NFTs,</p>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div></div>

        <div></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="grid-box grid2">
          <h1>Q2-Q3, 2022</h1>
          <h3>Launch of the Marketplace</h3>
          <p>
            The Launch of the Slotie Marketplace will allow you to trade your
            WATTs and Sloties without expensive gas costs. The faster and lower
            fee transactions of our Marketplace will give Holders more liquidity
            to trade their WATTs and NFTs.
          </p>
          <h3 style={{ marginTop: "2rem" }}>Partnering up with 50 Casinos</h3>
          <p>
            Slotie NFT adoption increases as 50 of our partners fully integrate
            the Slotie. VIP membership access will be valid in all casinos
            hosting Sloties, and rewards increase drastically.‍
          </p>
          <h3 style={{ marginTop: "2rem" }}>
            Breeding the Second Generation - Junior Sloties
          </h3>
          <p>The ability to breed your Sloties for Junior Sloties begins.</p>
        </div>

        <div className="grid-box grid1">
          <h1>Q3+, 2022</h1>
          <h3>Junior Sloties' New Crypto Game Development Starts</h3>
          <p>
            Trade, earn, and double your profits with Junior Sloties, while the
            Junior Slotie game is under development.
          </p>
          <h3 style={{ marginTop: "2rem" }}>
            Third Wave of Crypto-Casino Partnership (75 Sign the contract)
          </h3>
          <p>
            The third wave of Slotie adoption begins as 75 of our Casino
            partners fully integrate the NFT slot game. Once again, holdrs
            exclusive rewards nearly doubles for Slotie holders.
          </p>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
        </div>
        <div style={{ display: "block" }} className="grid-box grid2">
          <h1>To be announced.</h1>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
