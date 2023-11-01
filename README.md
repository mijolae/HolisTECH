[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/solutions/projects/get-started/)


# HolisTECH Review

- [Project summary](#project-summary)
  - [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)
  - [How our technology solution can help](#how-our-technology-solution-can-help)
  - [Our idea](#our-idea)
- [Technology implementation](#technology-implementation)
  - [IBM AI service(s) used](#ibm-ai-services-used)
  - [Other IBM technology used](#other-ibm-technology-used)
  - [Solution architecture](#solution-architecture)
- [Presentation materials](#presentation-materials)
  - [Solution demo video](#solution-demo-video)
  - [Project development roadmap](#project-development-roadmap)
- [Additional details](#additional-details)
  - [How to run the project](#how-to-run-the-project)
  - [Live demo](#live-demo)
- [About this template](#about-this-template)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Project summary

### The issue we are hoping to solve

In an application process, biases often sway the selection of candidates, favoring those who fit certain criteria. We aim to leverage AI to evaluate applicants beyond standardized metrics.

### How our technology solution can help

Our technology solution involves evaluating an applicant's background by considering additional factors such as their upbringing and environment. By acknowledging the starting points for individuals, we seek to level the playing field by analyzing each candidate based on a comprehensive set of data points. Our HolisTECH software not only quantifies measurable data but also captures intangible qualities beneficial to institutions.

### Our idea

HolisTECH employs a machine learning AI system that assimilates an applicant's initial information, assesses their background, and compares them to candidates from similar environments. Through a classification model, we accurately place applicants in alignment with past, current, and ideal candidates. Extensive research has allowed us to integrate various data points, uncovering unique patterns not solely reliant on a single GPA. Additionally, HolisTECH identifies biased factors within an existing dataset, such as the disproportionate emphasis placed on college GPA compared to a recommendation letter.

More detail is available in our [description document](./docs/DESCRIPTION.md).

## Technology implementation

### IBM AI service(s) used
- [Watson Machine Learning AI](https://cloud.ibm.com/catalog/services/watson-machine-learning):
      - Prediction model for application recommendations (e.g., recommend, additional documents required, waitlist, etc.)
      - Data visualization capabilities

### Solution architecture

Diagram and step-by-step description of the flow of our solution:

Onboarding:
1. Institutions provide relevant data on positions or previous candidates.
2. HolisTECH trains the machine learning AI model to identify beneficial characteristics.
3. The institution integrates the HolisTECH application to automate the assessment of new applicants.

Application Process:
1. New candidates submit their applications to the institution.
2. HolisTECH AI applies the institution's customized algorithm and delivers recommendations.
3. The institution finalizes and submits the new candidate's application.

Review Process:
1. Institutions access a custom dashboard displaying all applicants.
2. Applications come with a general recommendation for human review.
3. The institution conducts further evaluations, gaining a clear understanding of each candidate's strengths and weaknesses.

## Presentation materials

//tba

### Project development roadmap

The project currently does the following things.

- Prediction model for recommendations (i.e. yes recommend, more documents required, waitlist, etc)
- Data visualization

In the future we plan to add an overlay of zipcode assessment to provide further clarity on the environment a candidate is applying from and the socioeconomic factors they might be dealing with from day to day. We also want to provide advanced clustering options that sections applicants out according to committee requirements.

---

_INSTRUCTIONS: You can remove the below section from your specific project README._

## About this template

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

### Authors

<a href="https://github.com/Call-for-Code/Project-Sample/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Call-for-Code/Project-Sample" />
</a>

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

### License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
