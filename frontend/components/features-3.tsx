import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className=" py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                         Cardiovascular Risk Prediction
                    </h2>
                    <p className="mt-4">
                        Predict heart disease risk using clinically relevant data and a powerful boosting-based machine learning model.
                    </p>
                </div>

                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">

                    {/* Feature 1 */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Fast & Accurate Predictions</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">
                                Our boosting-based ML model processes patient health metrics to deliver rapid and highly accurate cardiovascular risk predictions.
                            </p>
                        </CardContent>
                    </div>

                    {/* Feature 2 */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Full Data Transparency</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                Control and understand every input — age, BP, cholesterol, glucose, lifestyle factors — all processed securely and transparently.
                            </p>
                        </CardContent>
                    </div>

                    {/* Feature 3 */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Powered by Boosting ML</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                Built using an ensemble boosting algorithm to improve prediction reliability by combining multiple weak learners into a strong model.
                            </p>
                        </CardContent>
                    </div>

                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
            {children}
        </div>
    </div>
)
