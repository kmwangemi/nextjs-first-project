import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = () => {
   return (
      <MeetupDetail
         image='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'
         title='A first Meetup'
         address='some street 5, some city'
         description='The meetup description'
      />
   )
}

export async function getStaticPaths() {
   return {
      fallback: false,
      paths: [
         {
            params: {
               meetupId: 'm1'
            }
         },
         {
            params: {
               meetupId: 'm2'
            }
         }
      ]
   }
}

export async function getStaticProps(context) {
   // fetch data for a single meetup

   const meetupId = context.params.meetupId;

   return {
      props: {
         meetupData: {
            image: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
            id: meetupId,
            title: 'A first Meetup',
            address: 'some street 5, some city',
            description: 'The meetup description'
         }
      }
   }
}

export default MeetupDetails
