# Fold Frontend Take-Home Challenge

Welcome to the Fold Frontend Take-Home Challenge.

This project simulates a core part of the Fold app experience: sending Bitcoin and viewing past transactions. The goal is to see how you go about solving coding problems and iterating on an existing codebase.

## Getting Started

- This project is scaffolded with basic routing and UI already in place.
- Preview works on **Expo Go** – no build steps needed.
- You’ll be extending the existing app to support core BTC send flow and transaction tracking.
- You’re encouraged to bring your own decisions to state management, user flow, and code structure

### 1. As a user, I want to send Bitcoin to another address

- I should be able to enter a recipient’s **Bitcoin address**, a **BTC amount**, and see equivalent in USD
- If I enter an invalid BTC address or an amount that’s too large (over my balance), I should see helpful validation feedback.
- When I submit the form, a **new transaction** should be added to the transaction list
- Try to think about how all this would work in a real app scenario.

**optional**: You can use a regex or a BTC validation library

Make sure inputs and amounts are formatted correctly

### 2. As a user, I want to see my transaction history in one place

- I should be able to view a list of all Bitcoin transactions I’ve sent.
- A reusable `TransactionItem` component should handle display.
- You should see a mock of the transactiondata in the `TransactionList` component, feel free to add more data to the mock if needed

## Notes

- Feel free to add any libraries that you feel will help in your solution
- Add unit tests where you feel appropriate - don't go crazy
- Update the readme to reflect any thoughts you might have e.g what you would do if you had more time that sort of thing

## Bonus: Simulate a Real Blockchain Transaction

If you’d like to go further, feel free to mock a **real testnet transaction** using the Bitcoin Testnet API (like [Blockstream](https://blockstream.info/testnet/api/) or [mempool.space](https://mempool.space/testnet/)). This isn’t required — just a nice touch if you want to show real integration or async flow.

## Previewing the App

You can run the app with:

```bash
npm install
npm start
```
