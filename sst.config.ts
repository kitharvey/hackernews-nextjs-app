import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export default {
	config(_input) {
		return {
			name: "hackernews-clone",
			region: "ap-southeast-1",
		};
	},

	stacks(app) {
		app.stack(function Site({ stack }) {
			const arn =
				"arn:aws:acm:us-east-1:584125941279:certificate/375c1364-88c5-4089-8e54-32fdba02ad83";

			const site = new NextjsSite(stack, "next", {
				customDomain: {
					isExternalDomain: true,
					domainName: "hackernews-nextapp.kitharvey.cc",
					alternateNames: ["www.hackernews-nextapp.kitharvey.cc"],
					cdk: {
						certificate: Certificate.fromCertificateArn(
							stack,
							"Certificate",
							arn
						),
					},
				},
			});

			stack.addOutputs({
				SiteUrl: site.url,
			});
		});
	},
} satisfies SSTConfig;
