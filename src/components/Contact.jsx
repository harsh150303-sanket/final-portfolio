import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col 
      flex gap-10 overflow-hidden justify-center">
      
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-10 rounded-2xl text-center">

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className="mt-10 space-y-6 font-poppins text-lg">

          <p className="text-timberWolf">
            📍 Ahmedabad, Gujarat, India
          </p>

          <p>
            📧{" "}
            <a
              href="mailto:harshtaily153@gmail.com"
              className="text-timberWolf hover:text-battleGray transition">
              harshtaily153@gmail.com
            </a>
          </p>

          <p>
            📞{" "}
            <a
              href="tel:+919714232024"
              className="text-timberWolf hover:text-battleGray transition">
              +91 9714232024
            </a>
          </p>

          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/harsh-taily-780338271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-timberWolf hover:text-battleGray transition">
              LinkedIn Profile
            </a>
          </p>

          <p>
            📄{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-timberWolf hover:text-battleGray transition">
              Download Resume
            </a>
          </p>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');