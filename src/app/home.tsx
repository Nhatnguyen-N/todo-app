import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import AddButton from "../components/AddButton";
import { Todo, TodoState } from "../Types/todo.types";
import { RootState } from "../redux/store";
import { screenHeight } from "../utils/Constants";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const data = useSelector((state: RootState) => state.todo.data);

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return <TodoItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <CustomHeader title="Todo App" />
      <FlatList
        data={data}
        renderItem={renderTodoItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Image
              source={require("../assets/images/add.png")}
              style={styles.addIcon}
            />
            <Text style={styles.emptyMessageText}>
              Click on plus button to add your goals!
            </Text>
          </View>
        }
        initialNumToRender={10}
        windowSize={10}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <AddButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  emptyContainer: {
    height: screenHeight - 100,
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    margin: 15,
  },
  emptyMessageText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#888",
    width: "80%",
    textAlign: "center",
  },
});
