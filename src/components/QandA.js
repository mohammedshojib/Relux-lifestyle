import React from "react";

const QandA = () => {
  return (
    <div>
      <h3>How react work</h3>
      <p>
        রিএক্ট কাজ করার জন্য ২ টা নোড পেকেজ দরকার হয়। ১টা রিএক্ট ২টা রিএক্ট ডম।
        রিএক্ট একটা জাভাস্ক্রিপ্ট লাইব্রেরি। যা কখনো ডাইরেক্টলি কাজ করতে পারে না
        তাই রিএক্ট তার কোড জাভাস্ক্রিপ্ট এ রুপান্তর করে ব্রাউজার এ শো করে।
      </p>
      <h3>Props vs state</h3>
      <p>
        প্রপস এর খত্রে ডাটা অন্য components থে আসে। আর state এর খত্রে ডাটা নিজ
        components থেকে পাস করা হয়। প্রপস immutable ( যা change করা যায়না) state
        mutable ( যা change করা যায়)। প্রপস state and functional components এর
        সাথে ব্যবহার করা যায় state শুধু state and class components এর সাথে
        ব্যবহার করা যায়। props read only state can be read and write also
      </p>
      <h3>How useState work</h3>
      <p>
        useState হলো একটি হুক ফাংশন। যা আমাদেরকে ফাংশন এর ভিতর innitial state
        পাস করতে দেই এবং ফাংশন সহ একটি variable with current state রিটার্ন করে।
      </p>
    </div>
  );
};

export default QandA;
