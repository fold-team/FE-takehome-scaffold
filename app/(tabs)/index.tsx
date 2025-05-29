import { TransactionList } from "@/components/transactions/TransactionList";
import { WalletBalance } from "@/components/wallet/WalletBalance";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.walletSection}>
        <WalletBalance />
      </View>
      <View style={styles.transactionSection}>
        <TransactionList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  transactionSection: {
    flex: 1,
  },
});
