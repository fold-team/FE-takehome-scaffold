import { Colors } from "@/constants/Colors";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MOCK_TRANSACTIONS = [
  {
    id: "1",
    type: "receive",
    amount: 0.05,
    timestamp: new Date(Date.now() - 3600000),
    address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    status: "completed",
  },
  {
    id: "2",
    type: "send",
    amount: 0.025,
    timestamp: new Date(Date.now() - 7200000),
    address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
    status: "completed",
  },
  {
    id: "3",
    type: "receive",
    amount: 0.1,
    timestamp: new Date(Date.now() - 86400000),
    address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
    status: "completed",
  },
];

export const TransactionList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_TRANSACTIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.title}>Transaction History</Text>
            </View>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.icon,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  listContent: {
    padding: 8,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 12,
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 12,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: Colors.light.icon,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: Colors.light.icon,
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light.icon,
    opacity: 0.1,
    marginVertical: 8,
  },
});
