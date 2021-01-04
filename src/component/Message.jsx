/** @format */

import React from "react";
import "react-chat-elements/dist/main.css";
import { Button } from "react-chat-elements";
import { ChatItem } from "react-chat-elements";
import { MessageBox } from "react-chat-elements";
import { Input } from "react-chat-elements";
import Chart from "./Chart";

import { ChatList } from "react-chat-elements";
// import { LocationMessage } from "react-chat-elements";
function Message() {
	return (
		<div>
			<Input
				placeholder="Type here..."
				multiline={true}
				rightButtons={
					<Button color="white" backgroundColor="black" text="Send" />
				}
			/>

			{/* <ChatItem
				avatar={"https://facebook.github.io/react/img/logo.svg"}
				alt={"Reactjs"}
				title={"Veer"} //userName
				subtitle={"ok"} //last message
				date={new Date()}
				unread={8}
				onClick={(e) => {
					console.log(e);
				}}
			/> */}
			{/* <MessageBox
				reply={{
					photoURL: "https://facebook.github.io/react/img/logo.svg",
					title: "elit magna",
					titleColor: "#8717ae",
					message: "Aliqua amet incididunt id nostrud",
				}}
				onReplyMessageClick={() => console.log("reply clicked!")}
				position={"left"}
				type={"text"}
				text={
					"Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure."
				}
			/> */}
			<ChatList
				className="chat-list"
				dataSource={[
					{
						avatar: "https://facebook.github.io/react/img/logo.svg",
						alt: "Reactjs",
						title: "Facebook",
						subtitle: "What are you doing?",
						date: new Date(),
						unread: 0,
					},
					{
						avatar: "https://facebook.github.io/react/img/logo.svg",
						alt: "Reactjs",
						title: "Facebook",
						subtitle: "What are you doing?",
						date: new Date(),
						unread: 0,
					},
					{
						avatar: "https://facebook.github.io/react/img/logo.svg",
						alt: "Reactjs",
						title: "Facebook",
						subtitle: "What are you doing?",
						date: new Date(),
						unread: 0,
					},
					{
						avatar: "https://facebook.github.io/react/img/logo.svg",
						alt: "Reactjs",
						title: "Facebook",
						subtitle: "What are you doing?",
						date: new Date(),
						unread: 5,
					},
				]}
			/>
		</div>
	);
}

export default Message;
