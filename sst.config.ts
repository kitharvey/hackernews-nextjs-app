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
				"arn:aws:acm:ap-southeast-1:584125941279:certificate/5e8431c4-faa6-453c-9bde-709c89aa97a2";

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
