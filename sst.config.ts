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
				"arn:aws:acm:us-east-1:584125941279:certificate/ee1037f4-bbdf-472b-88d8-0bb75bc85905";

			const site = new NextjsSite(stack, "next", {
				customDomain: {
					isExternalDomain: true,
					domainName: "hackernews.kitharvey.cc",
					alternateNames: ["dev.hackernews.kitharvey.cc"],
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
