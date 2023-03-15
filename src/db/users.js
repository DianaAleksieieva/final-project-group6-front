const users = [
  {
    id: 'ObjectId',
    email: 'donald@example.com',
    // email: {
    //     type: String,
    //     required: [true, 'Email is required'],
    //     unique: true,
    //   },
    userName: 'Donald Duck',
    // email: {
    //     type: String,
    //   },
    password: 'hash',
    // password: {
    //     type: String,
    //     required: [true, 'Password is required'],
    //   },
    token: 'exampletoken',
    // token: {
    //     type: String,
    //     default: ({ _id }) => {
    //       return jwt.sign({ id: _id }, process.env.SECRET)
    //     },
    avatarUrl: 'url', //avatarUrl: { type: String, required: true },
    startBalance: 10000, //startBalance: { type: Number, default: 0 }
    currentBalance: 5, //currentBalance: { type: Number }
    verify: false, //verify: { type: Boolean, default: false },
  },
  {
    id: '0123',
    email: 'arnold@example.com',
    userName: 'Arnold Schwarzenegger',
    password: 'has2344255q5sft43sfytryrr3453443q4531weh',
    token: null,
    avatarUrl: '0123.jpg',
    startBalance: 10000,
    currentBalance: 12255,
    verify: true,
  },
  {
    id: '012543',
    email: 'sandra@example.com',
    userName: 'Sandra Bulloc',
    password: 'has23has2344255q5sft43sfytryrr3453443q4531weh453443q4531weh',
    token:
      'has2344255q5sf.t43sfytryrr3453has2344255q5sft43sfytryrr3453443q4531weh443q4531weh',
    avatarUrl: '012543.jpg',
    startBalance: 1000,
    currentBalance: 1200255,
    verify: true,
  },
];
export default users;

//параметры для  схемы  - { versionKey: false, timestamps: true },
