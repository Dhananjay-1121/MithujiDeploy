// import { useState, useEffect } from "react";
// // import { Button } from "@mui/material"
// import SendIcon from '@mui/icons-material/Send';
// import { MessageBox, ChatItem, Input } from 'react-chat-elements';
// import 'react-chat-elements/dist/main.css'
// // import SearchIcon from '@mui/icons-material/Search';
// import Navbar from "../../components/navbar/Navbar"
// import "./messages.scss"
// import "react-datepicker/dist/react-datepicker.css";
// // import DatePicker from "react-datepicker";
// import { BASEURL } from "../../utils/constants";
// import 'rsuite/dist/rsuite.min.css';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


// const Message = () => {

//   // const { url } = useParams();

//   // const navigate = useNavigate();
//   // interface MessageBoxType {
//   //   type: "text" | "image" | "audio" | "video";
//   //   text?: string;
//   //   image?: string;
//   //   audio?: string;
//   //   video?: string;
//   //   position?: "left" | "right";
//   //   title?: string;
//   //   focus?: boolean;
//   //   titleColor?: string;
//   //   forwarded?: boolean;
//   //   date?: Date;
//   // }

//   // const ChatRoom = () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: "AIzaSyBWrCZHzc-GxM1ecdhW9eccIGbgmUpaOW4",
//         authDomain: "mithuji-seller-chat.firebaseapp.com",
//         projectId: "mithuji-seller-chat",
//         storageBucket: "mithuji-seller-chat.appspot.com",
//         messagingSenderId: "213648525283",
//         appId: "1:213648525283:web:9ea142560092792d9c82d6",
//         measurementId: "G-PXKXBQ5B3G"
//       });
//     } else {
//       firebase.app(); // if already initialized, use that one
//     }
//   const firestore = firebase.firestore();
//   const messagesRef = firestore.collection('messages');
// const query: any = messagesRef.orderBy('createdAt').limitToLast(25);
// const [Messages] = useCollectionData(query);

// // const Messages = messages?.map(message => ({ id: message.id, ...message })) || [];
//   // }
  

//   type Message = {
//     id: string;
//     text: string;
//     image: string;
//     name: string;
//   };

//   interface ChatItem {
//     id: string;
//     avatar: string;
//     alt: string;
//     title: string;
//     subtitle: string;
//     date: Date;
//     unread: number;
//   }

//   const [seller, setSeller] = useState([{business_name: '', name: '', phone: '', seller_status: '', id: ''}]);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleSend = () => {
//     messagesRef.add({
//       text: inputValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       // Add other fields as needed, like the user ID
//     }).catch((error) => {
//       console.error("Error writing document: ", error);
//     });
//     setInputValue('');
//   };
  
//   const [activeTag, setActiveTag] = useState<string | null>("General");
  
//   const [activeChat, setActiveChat] = useState<ChatItem | null>(null);

//   // const listenForNewChatMessages = (callback: any) => {
//   //   firestore.collection("chatMessages").onSnapshot((querySnapshot) => {
//   //     const messages = querySnapshot.docs.map((doc) => {
//   //       const data = doc.data();
//   //       return {
//   //         id: doc.id,
//   //         ...data,
//   //       };
//   //     });
//   //     callback(messages);
//   //   });
//   // };
  
//   // useEffect(() => {
//   //   listenForNewChatMessages((newMessages) => {
//   //     setMessages([...messages, ...newMessages]);
//   //   });
//   // }, []);

// //   useEffect(() => {
// //   if (Messages) {
// //     setMessages([...Messages]);
// //   }
// // }, [Messages]);

//   useEffect(() => {
//     getSeller();
//   }, [])
  
//   const getSeller = async() => {
//     try {
//       // console.log("response sending...");
//       // Use fetch to make the post request with the url and the data
//       const response = await fetch(`${BASEURL}/admin/seller/all`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.getItem("admin_auth_token")}`,
//         }
//       });

//       console.log(response);
//       const data = await response.json();

//       console.log(data.response);

//       if (response.status === 200) {
//         // setResponse(data.response)
//         setSeller(data.response.content)
//       } else {
//         alert(data.response);
//       }
//     } catch (err) {
//       console.log("getting errr", err);
//     }
//   }

//   const handleClick = async (chatItem: any) => {
//     setActiveTag(chatItem);
//   };

// const handleClickChat = async (chatItem: any) => {
//   setActiveChat(chatItem);

//   // Create a new collection with the seller's name
//   const sellerCollectionRef = firestore.collection(chatItem.name);

//   // Check if a document for this chat already exists in the new collection
//   const docRef = sellerCollectionRef.doc(chatItem.id);
//   const doc = await docRef.get();

//   if (!doc.exists) {
//     // If the document does not exist, create it
//     await docRef.set({
//       messages: [],
//     });
//   }
// };


  
// // const listItems = () => {
// //   return seller.map((d, i) => {
// //     console.log(seller);
// //     return (
// //       <ChatItem
// //         key={i}
// //         avatar={'https://s3-alpha-sig.figma.com/img/4e72/ba93/7470aca20a1638407a50281c1d9e14ff?Expires=1695600000&Signature=g7UnJ3zMaW9531LP2yfocSzDRfCeU~IrET8XHSGPbPhgDansLOf1Sjw3z7TW-pRUAV152zDdZBL5TG-kThKr3m1b0W1lgT~acbG7H9sQXWEANMjLZCwdebIfEOy0xif8b48dfMrMOpVqdQxCO~9T-xLxX5JCQkQsadjE84tK91oqgF5fG8My1l1OzRnU1ClD3vHzpLN8eRaqpo76my02s-ErFUYa9A4nTHAJLUghZKi4Pm0EX1WC99l-rIcxkVMqPp2mG0iO8w-i09iNbgsbwJJU86eHRTV3nlLlXzTwKdEnhJpyQzX2ia3cRdhxp6~wS0osovA1wWXFefT~noDWAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} // Replace with the actual avatar URL
// //         alt={'Reactjs'} // Replace with the actual alt text
// //         title={d.name} // Use the name as the title
// //         subtitle={'Pls Provide the details of the...'} // Use the text as the subtitle
// //         date={new Date()} // Use the current date
// //         unread={1} // Replace with the actual number of unread messages
// //         onClick={() => {handleClickChat(d);
// //           setActiveChat({
// //           id: d.id,
// //           avatar: 'https://s3-alpha-sig.figma.com/img/4e72/ba93/7470aca20a1638407a50281c1d9e14ff?Expires=1695600000&Signature=g7UnJ3zMaW9531LP2yfocSzDRfCeU~IrET8XHSGPbPhgDansLOf1Sjw3z7TW-pRUAV152zDdZBL5TG-kThKr3m1b0W1lgT~acbG7H9sQXWEANMjLZCwdebIfEOy0xif8b48dfMrMOpVqdQxCO~9T-xLxX5JCQkQsadjE84tK91oqgF5fG8My1l1OzRnU1ClD3vHzpLN8eRaqpo76my02s-ErFUYa9A4nTHAJLUghZKi4Pm0EX1WC99l-rIcxkVMqPp2mG0iO8w-i09iNbgsbwJJU86eHRTV3nlLlXzTwKdEnhJpyQzX2ia3cRdhxp6~wS0osovA1wWXFefT~noDWAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', // Replace with actual avatar URL
// //           alt: 'Reactjs', // Replace with actual alt text
// //           title: d.name,
// //           subtitle: 'Pls Provide the details of the...', // Replace with actual subtitle
// //           date: new Date(),
// //           unread: 1, // Replace with actual number of unread messages
// //         })}
// //       }
// //       />
// //     );
// //   });
// // };

//   return (
//     <>
//       <div className="message">
//         <Navbar />
//         <div className="innerAdd">
//         <div className="leftBox">
//   <div className="leftNav">
//     <p className={`tag ${activeTag === 'General' ? 'activeTag' : ''}`} onClick={() => handleClick('General')}>General</p>
//     <p className={`tag rfq ${activeTag === 'RFQ' ? 'activeTag' : ''}`} onClick={() => handleClick('RFQ')}>RFQ</p>
//   </div>
//   <div className="chatItems">
//     {/* {listItems()} */}
//   </div>
// </div>
//           <div className="rightBox">
//             <div className="addContainer">
//             <div className="rightNav">
//       <div className="rightNavContent">
//         <img className="dp" src={activeChat ? activeChat.avatar : 'default_avatar_url'} alt="Not Found" />
//         <p className="sellerName">{activeChat ? activeChat.title : 'Default Name'}</p>
//       </div>
//     </div>
//             {/* <div className="messageSection">
//               <div className="messages">
//       {messages.map((message, i) => (
//       //   <MessageBox
//       //   className="messageBox"
//       //   key={i}
//       //   id={message.id}
//       //   // avatar={message.image}
//       //   type= {'text'}
//       //   text={message.text}
//       //   position={message.name === 'User' ? 'right' : 'left'}
//       //   // title={message.name}
//       //   // focus
//       //   // forwarded
//       //   date={new Date()}
//       //   titleColor="#000"
//       // />

//       <MessageBox
//             className="messageBox"
//             key={i}
//             id={message.id}
//             type={"text"}
//             text={message.text}
//             position={message.name === "User" ? "right" : "left"}
//             date={new Date()}
//           />
//       ))}
//       </div>
//       <Input
//       className="inputMessage"
//         placeholder="Type a message"
//         value={inputValue}
//         onChange={(e: any) => setInputValue(e.target.value)}
//         maxHeight={100}
//         rightButtons={
//           <SendIcon className="sendIcon" onClick={handleSend} />
//         }
//       />
//     </div> */}
// <div className="messageSection">
//   {/* <div className="messages">
//     {messages.map((message, i) => (
//       <MessageBox
//         className="messageBox"
//         key={i}
//         id={message.id}
//         type="text"
//         text={message.text}
//         position={message.name === activeChat?.title ? "right" : "left"} // replace 'specificUser' with the actual user's name
//         date={new Date()}
//       />
//     ))}
//   </div> */}
//   <Input
//     className="inputMessage"
//     placeholder="Type a message"
//     value={inputValue}
//     onChange={(e: any) => setInputValue(e.target.value)}
//     maxHeight={100}
//     rightButtons={
//       <SendIcon className="sendIcon" onClick={handleSend} />
//     }
//   />
// </div>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Message