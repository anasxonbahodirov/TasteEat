import { ClientsComments, ContactsSection, GreatServices, Header, MenuSection, OfferedDishes, PopularDishes } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
      <ContactsSection />
      <MenuSection/>
      <ClientsComments/>
      <OfferedDishes/>
      <PopularDishes/>
      <GreatServices/>
      </main>
     
    </>
  );
};

export default App;
