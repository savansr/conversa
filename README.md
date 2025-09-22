# Conversa

Conversa is a real-time chat application built using Socket.IO, designed to facilitate seamless communication between users. Whether you're looking to integrate chat functionality into your application or explore real-time messaging systems, Conversa serves as a robust starting point.

## 🚀 Features

- **Real-Time Messaging**: Instant communication between users with minimal latency.
- **User Authentication**: Secure login and registration mechanisms.
- **Message History**: Access previous conversations for context.
- **Private and Group Chats**: Engage in one-on-one or group discussions.
- **Typing Indicators**: See when others are typing in real-time.
- **Read Receipts**: Know when your messages are read.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Real-Time Communication**: Socket.IO
- **Deployment**: Vercel

## 📝 How It Works

Conversa uses **Socket.IO** for real-time communication between clients and the server. Here's the basic flow:

1. **Connection**  
   - When a user opens the app, the client connects to the Socket.IO server.
   - The server assigns a unique `socket.id` to each connected client.

2. **Rooms**  
   - Users can join specific chat rooms by emitting a `joinRoom` event with the room ID.
   - The server adds the user to that room, enabling targeted communication.
   - Syntax example:
     ```javascript
     socket.join(roomId);
     ```

3. **Messaging**  
   - Users send messages specifying the room:
     ```javascript
     socket.emit('sendMessage', { roomId, message });
     ```
   - The server broadcasts the message only to users in that room:
     ```javascript
     io.to(roomId).emit('receiveMessage', message);
     ```

4. **Private Messaging**  
   - To send a message to a single user, the server can use the recipient’s socket ID:
     ```javascript
     io.to(socketId).emit('privateMessage', message);
     ```

5. **Other Real-Time Events**  
   - **Typing indicators**: Emit when a user is typing to others in the room.
   - **Read receipts**: Notify the sender when a message is read.

This architecture ensures real-time, scalable, and organized messaging between users.

## 📦 Installation & Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/savansr/conversa.git
