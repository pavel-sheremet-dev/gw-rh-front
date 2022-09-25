import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';
import ImageList from '../ImageList/ImageList';

const Afisha = ({ data, btn, text }) => {
  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[64px] lg:pt-[244px] lg:pb-[124px]">
      <Container>
        <Heading
          text={data.attributes.mainTitle}
          className="uppercase font-semibold text-t3642 text-brand1 mb-4 md:mb-14"
        />
        <Heading
          tag="h2"
          text={data.attributes.title}
          className="uppercase font-semibold text-t2444 mb-4 md:mb-6"
        />
        <ImageList
          dataList={data.attributes.imageCard}
          className="grid gap-y-6 mb-9 md:mb-20 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4"
        />
        <div className="md:flex md:justify-between lg:justify-start">
          <Button
            linkTo="/contuct-us"
            text={btn}
            className="my-0 mx-auto mb-6 md:m-0 lg:mr-[33px]"
          />
          <p className="text-brand1 text-qqBase font-semibold md:w-[310px] lg:w-[464px]">
            {text}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Afisha;
