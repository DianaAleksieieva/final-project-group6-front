const transactions = [
  {
    owner: 'ObjectId(user._id)',
    // owner: {
    //      type: Schema.Types.ObjectId,
    //      ref: 'user',
    //      required: true,
    //   },
    type: ['income', 'expense'],
    //  type: {
    //      type: String,
    //      enum: ['income', 'expense'],
    //      required: true,
    //   }
    date: '21.11.2019',
    //  date: {
    //      type: Date,
    //      default: Date.now
    //   }
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //  description: {
    //      type: String
    //   }
    category: 'goods',
    //  category: {
    //      type: String,
    //      enum: ['transport', 'goods', 'health', 'alco', 'fun', 'house', 'tech', 'utilities', 'sport', 'education', 'other', 'salary', 'freelance'],
    //      required: true,
    //   }
    amount: 5,
    //amount: {
    //    type: Number, required: true
    //  }
    month: 8, //optional
    //month: {
    //    type: Number,
    //    default: Date.now().getMonth()
    //  }
    year: 2022, //optional
    //year: {
    //    type: Number,
    //    default: Date.now().getFullYear()
    //  }
  },
  {
    owner: '123456',
    type: 'income',
    date: '21.11.2015',
    description: 'my salary',
    category: 'salary',
    amount: 25000,
    month: 11, //optional
    year: 2015, //optional
  },
  {
    owner: '123456',
    type: 'income',
    date: '20.11.2015',
    description: 'sold a lamp at olx',
    category: 'freelance',
    amount: 400,
    month: 11, //optional
    year: 2015, //optional
  },
  {
    owner: '123456',
    type: 'expense',
    date: '10.12.2015',
    description: 'bye new carpet',
    category: 'house',
    amount: 1500,
    month: 12, //optional
    year: 2015, //optional
  },
  {
    owner: '123456',
    type: 'expense',
    date: '21.12.2015',
    description: 'yammy turkey',
    category: 'goods',
    amount: 250,
    month: 12, //optional
    year: 2015, //optional
  },
];
export default transactions;

//параметры для  схемы  { versionKey: false, timestamps: true },
