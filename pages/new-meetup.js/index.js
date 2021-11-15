import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
   function addMeetupHandler(enteredMeetupData) {
      console.log('data--->', enteredMeetupData);
   }
   return (
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
   )
}

export default NewMeetupPage
