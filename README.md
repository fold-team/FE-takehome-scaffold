# Fold Frontend Take-Home Challenge

Welcome to the Fold Frontend Take-Home Challenge.

This project simulates a core part of the Fold app experience: sending Bitcoin and viewing past transactions. The goal is to see how you approach building features, solving coding problems, and iterating on an existing codebase.

## Getting Started

- This project is scaffolded with basic routing and UI already in place.
- Preview works on **Expo Go** - no build steps needed.
- You'll be extending the existing app to support sending Bitcoin to another address and viewing a transaction history.
- You're encouraged to bring your own decisions to state management, user flow, and code structure.

## Your Task

Implement the following two user stories:

### 1. As a user, I want to send Bitcoin to another address

- I should be able to enter a recipient's **Bitcoin address**, a **BTC amount**, and see the USD equivalent.
- The app should provide input validation where necessary
- When I submit the form, a **new transaction** should be added to the transaction list.
- Consider how this would work in a real app scenario.
- Make sure inputs and amounts are formatted correctly.

**optional**: You can use a regex or a BTC validation library if you'd like.

### 2. As a user, I want to see my transaction history in one place

- I should be able to view a list of all my past Bitcoin transactions I've sent or received.
- Create a reusable component that would handle display.
- You should see a mock of the transaction data in the component, feel free to add more data to the mock if needed.

## Notes

- Feel free to add any libraries that you feel will help in your solution.
- Add unit tests where you feel appropriate - don't go crazy.
- Update the README to reflect any thoughts you might have (ex: what you would do if you had more time that sort of thing).

## Bonus: Simulate a Real Blockchain Transaction

If you'd like to go further, feel free to mock a **real testnet transaction** using the Bitcoin Testnet API (like [Blockstream](https://blockstream.info/testnet/api/) or [mempool.space](https://mempool.space/testnet/)). This isn't required - just a nice touch if you want to show real integration or async flow.

## Previewing the App

You can run the app with:

```bash
npm install -g expo-cli
npm install
npm start
```

## Submitting your Work

When you're done, please submit:
- Create a private repository on Github.
- Add Tiffany, Victor and Spencer as collaborators using these handles: tiffsaw, martins5225 and vineyardbovines.
- Any notes that you'd like to share in your README (ex: assumptions you made, tradeoffs or decisions and what you'd improve with more time).

## Time Expectation
This challenge is designed to take around 2 hours. Focus on your best judgment, clean code, and a thoughtful implementation.
