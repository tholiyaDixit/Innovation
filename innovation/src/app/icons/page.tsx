import IconCard from "@/components/card/iconCard/IconCard";
import React from "react";
import allHtmlCssIcon from "@/images/html_css_code.png";

const page = () => {
  return (
    <div>
      <div className="flex">
        <IconCard
          image={allHtmlCssIcon}
          title={"icon"}
          description={"all icon created with html code"}
          navigate={'icons/html-icon-code'}
        />
        <IconCard
          image={allHtmlCssIcon}
          title={"icon"}
          description={"all icon created with html and css"}
          navigate={'#'}
        />
      </div>
    </div>
  );
};

export default page;
