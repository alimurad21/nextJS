import React from 'react'
import clsx from 'clsx';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={clsx('p-4  border rounded shadow-lg hover:shadow-xl transition-shadow duration-200', {
      'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
        isLoading,
    })}
  >
    <div className="space-y-3">
      <div className="h-10 rounded-lg bg-gray-700" />
      <div className="h-5 w-11/12 rounded-lg bg-gray-700" />
      <div className="h-5 w-8/12 rounded-lg bg-gray-700" />
    </div>
  </div>
);
