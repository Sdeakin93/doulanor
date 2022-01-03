import * as React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles.css";
import Splits from "../components/Splits";
import Block from "../components/Block";

import Divider from "../components/Divider";
import babySmile from "../media/baby-smile.jpg";
import babyFoot from "../media/baby-foot.jpg";
const Services = () => {
  return (
    <main className="page">
      <Nav />

      <Splits darkBackground>
        <Block
          darkBackground
          centreText
          title="Birth Doula Package"
          price="Starting at $300"
          listTitle="two prenatal visits"
          point1="24/7 on call from 37 weeks to 42 weeks"
          point2="continuous birth support"
          point3="1 postpartum visit"
          priceLink="/contact"
        />
        <Block
          darkBackground
          centreText
          title="Sibling Care Doula Package"
          price="$30/hr"
          listTitle="free one hour consultation"
          point1="one prenatal visits"
          point2="sibling care during birth"
          priceLink="/contact"
        />
        <Block
          darkBackground
          centreText
          title="Postpartum Doula Package"
          price="$40/hr"
          listTitle="blocks of 4 hours to be used on weekends throughout the first
          month postpartum"
          priceLink="/contact"
        />
      </Splits>
      <Block dark buttonLink={`/contact`} buttonText="Let's work together" />
      <Block
        paddingTop
        imageRight
        image={babySmile}
        subtitle="When considering hiring a doula, the first question you may have is: what is a doula? 
        "
        title="Why hire a doula?"
        text="
        Doula is Greek for “woman who serves.” Today, “doula” refers to a professional trained to provide emotional, physical and informational support to people throughout their pregnancy, birth and early postpartum period.
"
      />
      <Block
        darkBackground
        image={babyFoot}
        title="How many people use these doulas?

        "
        text="According to a 2012 survey, taking place in the United States, 6% of birthing people said they used a doula during childbirth. This is a 50% increase from the 3% in 2006. Out of those who didn’t have a doula, 27% said they would’ve liked to have a doula.
        "
      />
      <Block
        paddingTop
        imageRight
        image={babySmile}
        subtitle="Doulas provide physical, emotional, informational support as well as advocacy for their client(s).

        "
        title="What do doulas provide?
        "
        text="Physical support is important because it helps the birthing person maintain a sense of control, comfort and confidence. Some aspects of physical support provided by a doula include: soothing with touch, whether it be with massage or counter pressure; helping to create a warm calming environment, such as dimming lights; assisting with hydrotherapy; applying warm or cold; assisting the birthing person in walking to and from the bathroom; giving ice chips, food, and drinks.
        "
        subtext="Emotional support helps the birthing person feel cared for and feel a sense of pride and empowerment after birth. Doulas may provide the following examples: continuous presence; reassurance; encouragement; praise; helping birthing person see themselves or their situation more positively; keep company; showing a caring attitude; mirroring—calmly describing what the birthing person is experiencing and echoing back the same feelings and intensity; accepting what the birthing person wants; helping the birthing person and partner work through fears and self-doubt; debriefing after birth—listening to the mother with empathy.
        "
        paragraph1="Informational support helps help the birthing person and their partner informed about what’s going on with the course of labor, as well as provides them with access to evidence-based information about birth options. Aspects of informational support include: guiding the birthing person and their partner through labor; suggesting techniques in labor, such as breathing, relaxation techniques, movement, and positioning (both with or without epidural); helping them find evidence-based information about different options in pregnancy and childbirth; helping explain medical procedures before or as they occur; helping partner understand what’s going on with their loved one’s labor.
        "
        paragraph2="Advocacy can take many forms—most of which do not include speaking on behalf of the client. Some examples of advocacy that doulas have described include: encouraging the birthing person or their partner to ask questions and verbalize their preferences; asking the birthing person what they want; supporting the birthing person’s decision; amplifying the birthing person’s voice she is dismissed, ignored, or not heard; creating space and time form the birthing family so that they can ask questions, gather evidence-based information, and make decisions without feeling pressured; facilitating communication between parents and care providers; teaching the birthing parents positive communication techniques. 
        "
      />

      <Block
        darkBackground
        image={babyFoot}
        title="What doulas don’t do:
        "
        subtitle="Doulas are not medical professionals."
        text=" They do not perform clinical tasks, nor do they provide any medical advise or diagnosis. Doulas do not make any decision for the client and do not pressure clients into making any decision. No catching the baby, no taking over the partner’s role. No shift changes. They stay by the birthing person’s side indefinitely (although some doulas may call in their back-up after 12-24 hours.)
       
        "
        subtext=" Bottom line is, continuous labor support is the most important and basic need of the birthing person. Providing it is risk-free and highly effective. Evidence show that having a doula in your labor support team helps with:"
        listTitle="Reduce the risk of C-section by 25-39%"
        point1="Increase likelihood of spontaneous vaginal birth by 8-15%"
        point2="Reduce the use of pain medication in labor by 10%"
        point3=" Shorten labor by 41 minutes on average
        "
        point4="Reduce the likelihood of a low 5-minute APGAR score by 38%"
        point5="Reduce the risk of being dissatisfied with birthing experience by 31%"
        quote="“Although continuous support can also be offered by birth partners, midwives, nurses, or even some physicians, research has shown that with some outcomes, doulas have a stronger effect than other types of support persons. As such, doulas should be viewed by both parents and providers as a valuable, evidence-based member of the birth care team.”"
        author="Evidence on: Doulas by Rebecca Dekker PhD, RN (2019) "
        source="https://evidencebasedbirth.com/the-evidence-for-doulas/"
      />
      <Footer />
    </main>
  );
};

export default Services;
