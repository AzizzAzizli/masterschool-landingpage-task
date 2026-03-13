import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* diğer config seçeneklerin buraya gelecek */
};

export default withNextIntl(nextConfig);