<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://desolate-ocean-45261.herokuapp.com">
    <img src="client/public/lottery.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lottery Smart Contract</h3>

  <p align="center">
    A Lottery demo using Solidity, React, Truffle and Web3.
    <br />
    <a href="https://github.com/vinivst/Lottery/#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://desolate-ocean-45261.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/vinivst/Lottery/issues">Report Bug</a>
    ·
    <a href="https://github.com/vinivst/Lottery/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://desolate-ocean-45261.herokuapp.com/)

A simple Lottery simulation implemented in Rinkeby Test Network that allows you to:

- Buy a ticket for 0.1 ether
- Check how much is in the Reward Pool
- Check how many tickets do you have
- Win big prizes :smile:

There's also a Lottery Pick Winner section that is Owner Visible only, where the owner put a seed (that must be a number) and this is used to calculate the hash of this number and input some randomness in the pick winner function. Of course, this is not production ready, where i should use something like a [Oracle to get random number from outside the chain.](https://docs.chain.link/docs/get-a-random-number/)

I also check for any account's changes in the Metamask to update the UI smoothly. Last, but not least, there's a 10% administration fee for the owner address when the lottery is raffled :stuck_out_tongue_winking_eye:

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

- [Solidity](https://soliditylang.org/)
- [React](https://reactjs.org/)
- [Reactstrap](https://reactstrap.github.io/)
- [Truffle](https://www.trufflesuite.com/)
- [Web3](https://web3js.readthedocs.io/)
- [Metamask](https://metamask.io/)

<!-- GETTING STARTED -->

## Getting Started

In the following sections you will learn how to clone this repo and get it up and running in no time.

### Prerequisites

You need to have npm installed.

- Download and install node, which already comes with npm:
  - [Download Node](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vinivst/Lottery.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Register a new account in [Infura](https://infura.io/) and create a new project to get your rinkeby key at
   https://infura.io/dashboard/ethereum

4. Create a .env file at root path

5. Create the MNEMONIC (12 words seed phrase from your wallet) and INFURA_KEY (that you got from step 3) inside .env and save
   ```sh
   MNEMONIC = globe nephew genre emotion morning best penalty trade bid glare unaware dragon
   INFURA_KEY = https://rinkeby.infura.io/v3/you_key_here
   ```
6. Deploy your smart contracts
   ```sh
   truffle migrate --network rinkeby
   ```
7. Change to client directory and run react
   ```sh
   npm start
   ```
8. Enjoy your own Lottery! :smile:

<!-- USAGE EXAMPLES -->

## Usage

Users can buy tickets (Metamask didn't shows in the gifs):

![Buy Tickets](client/public/buyTicket.gif)

When we have at least 3 participants, the Lottery Owner can pick a winner:

![Pick Winner](client/public/pickWinner.gif)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/vinivst/Lottery/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GNU GPLv3 License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Vinicius Santiago - [Linkedin](https://www.linkedin.com/in/vinivst/)

Project Link: [https://github.com/vinivst/Lottery](https://github.com/vinivst/Lottery)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/vinivst/Lottery.svg?style=for-the-badge
[contributors-url]: https://github.com/vinivst/Lottery/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vinivst/Lottery.svg?style=for-the-badge
[forks-url]: https://github.com/vinivst/Lottery/network/members
[stars-shield]: https://img.shields.io/github/stars/vinivst/Lottery.svg?style=for-the-badge
[stars-url]: https://github.com/vinivst/Lottery/stargazers
[issues-shield]: https://img.shields.io/github/issues/vinivst/Lottery.svg?style=for-the-badge
[issues-url]: https://github.com/vinivst/Lottery/issues
[license-shield]: https://img.shields.io/github/license/vinivst/Lottery.svg?style=for-the-badge
[license-url]: https://github.com/vinivst/Lottery/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/vinivst/
[product-screenshot]: client/public/product-screenshot.png
