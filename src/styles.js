import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e272e",
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
  },
  clearButtonText: {
    color: "#dc3545",
    fontSize: 14,
    fontWeight: "600",
  },

  formInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    marginVertical: 8,
    minHeight: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#6a0dad",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  sectionDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "#e0e0e0",
    marginVertical: 20,
  },

  filterContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    padding: 3,
  },
  filterBtn: {
    flex: 1,
    backgroundColor: "transparent",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  filterText: {
    color: "#6c757d",
    fontSize: 15,
    fontWeight: "600",
  },
  activeFilterBtn: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  activeFilterText: {
    color: "#1e272e",
    fontWeight: "bold",
  },

  todosListWrapper: {
    flex: 1,
    width: "100%",
  },
  todosListHeader: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1e272e",
    marginBottom: 15,
    paddingLeft: 5,
  },
  emptyListMessageContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 20
  },
  emptyListMessageText: {
    fontSize: 18,
    color: "#999",
    fontWeight: '600',
    marginBottom: 5,
  },
  emptyListMessageSubText: {
    fontSize: 14,
    color: "#a0a0a0",
  },

  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  todoItemActive: {
    backgroundColor: "white",
    borderLeftWidth: 5,
    borderLeftColor: "#6a0dad",
  },
  todoItemCompleted: {
    backgroundColor: "#e8f5e9",
    borderLeftWidth: 5,
    borderLeftColor: "#28a745",
  },
  checkIconWrapper: {
    paddingRight: 15,
  },
  deleteIconWrapper: {
    paddingLeft: 15,
  },
  todoItemTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  todoItemTitleCompleted: {
    textDecorationLine: "line-through",
    color: "#999",
    fontWeight: "400",
  },

  completedTasksScreenContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
  },
  emptyTasksMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTasksText: {
    fontSize: 18,
    color: '#888',
  },

  todoDetailsContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  todoDetailsContent: {
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  errorText: {
    fontSize: 18,
    color: "#999",
    marginTop: 16,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
    gap: 8,
  },
  completedBadge: {
    backgroundColor: "#28a745",
  },
  activeBadge: {
    backgroundColor: "#ffc107",
  },
  statusText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    textTransform: 'uppercase',
  },
  section: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginTop: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});