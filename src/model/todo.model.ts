import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, updateDoc } from "firebase/firestore";

// Get all todos
async function getAllTodos(db: Firestore) {
    const todoSnapShot = await getDocs(collection(db, 'todos'))
    const todoList = todoSnapShot.docs.map(doc => doc.data());

    return todoList;
}

// Get todo
async function getTodo(db: Firestore, id: string) {
    const todo = await getDoc(doc(db, 'todos', id));
    return todo
}

// Add todo
async function addTodo(db: Firestore, payload: { todo: any; done: boolean; createdAt: any; }) {
    const todoRef = await addDoc(collection(db, 'todos'), payload)
    return todoRef
}

// Delete todo
async function deleteTodo(db: Firestore, id: string) {
    const todo = await deleteDoc(doc(db, 'todos', id))
    return todo
}

// Update Todo
async function updateTodo(db: Firestore, id: string, payload: { todo: any; done: any; }) {
    const todo = await updateDoc(doc(db, 'todos', id), payload)
    return todo
}

export { getAllTodos, getTodo, addTodo, deleteTodo, updateTodo }