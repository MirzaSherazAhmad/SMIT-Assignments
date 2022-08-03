// import { View, Text, Button } from 'react-native'
// import React from 'react';
// import { useState } from 'react';
// import DatePicker from 'react-native-date-picker'


// function DatePic() {


//   const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(false)
//   const [select, setSelect] = useState()



//   return (
  


//     <>
//       <View style={{ display: 'flex', alignSelf: 'center', marginTop: 250 }}>

//         <Text>please select Date </Text>
//         <Button title="Select date" onPress={() => setOpen(true)} />
//         <DatePicker
//           modal
//           open={open}
//           date={date}
//           onConfirm={(date) => {

//             setOpen(false)
//             setDate(date)
//             setSelect(date)
//           }}
//           onCancel={() => {
//             setOpen(false)
//           }}

//         />

//       </View>
//       <View>
//         <Text style={{ fontSize: 40 }}>


//           {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}
//         </Text>
//       </View>



//     </>

//   )
// }
// export default DatePic;