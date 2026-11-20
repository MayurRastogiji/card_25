import { motion } from 'framer-motion';
import AnniversaryHero from '../components/invitation/AnniversaryHero';
import CouplePortrait from '../components/invitation/CouplePortrait';
import AnniversaryMessage from '../components/invitation/AnniversaryMessage';
import EventDetails from '../components/invitation/EventDetails';
import VenueQRCode from '../components/invitation/VenueQRCode';
import CountdownTimer from '../components/countdown/CountdownTimer';
import FloralDecoration from '../components/ui/FloralDecoration';
import SectionDivider from '../components/ui/SectionDivider';

export default function InvitationSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <AnniversaryHero />
      <SectionDivider variant="light" />
      <CouplePortrait />
      <SectionDivider variant="light" />
      <AnniversaryMessage />
      <FloralDecoration position="bottom" variant="gold" />
      <EventDetails />
      <FloralDecoration position="top" variant="gold" />
      <VenueQRCode />
      <SectionDivider variant="light" />
      <CountdownTimer />
    </motion.div>
  );
}
