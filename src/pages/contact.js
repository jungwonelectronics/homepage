import * as React from "react";
import PageLayout from '../components/PageLayout/PageLayout';
import Map from '../components/Map/Map';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  return (
    <PageLayout pageTitle="contact">
       <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.5199291295585!2d127.06550992924674!3d36.912358371032575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b243f385da187%3A0x95eaaf4f44933074!2z7Lap7LKt64Ko64-EIOyVhOyCsOyLnCDrkZTtj6zrqbQg7JWE7IKw67C466as64-Z66GcIDI5NQ!5e0!3m2!1sko!2skr!4v1664020661938!5m2!1sko!2skr" />
      <Contact
        address="충청남도 아산시 둔포면 아산밸리동로 295, 3동"
        call="041-532-8752"
        fax="041-532-8751"
        mail="www.koreacarrier.co.kr"
      />
    </PageLayout>
  );
}

export default ContactPage;
