// app/page.js or any server/client component
'use client'; // for client components

import { useTranslation } from 'react-i18next';
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/i18nProvider";
import Component from "@/app/compontnents/component";
const i18nNamespaces = ['common'];

export default async function Home({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main className='bg-blue-800'>
                <h1>{t('welcome')}</h1>
                <Component/>
            </main>
        </TranslationsProvider>
    );
}
