'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MenuItem, Select } from '@mui/material'

type Props = {
  perPage: number;
  setPerPage?: (perPage: number) => void;
}

export default function RowPerPageSelect(props: Props) {
  const { perPage, setPerPage } = props
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <Select
      defaultValue={perPage}
      className="d-inline-block w-auto"
      aria-label="Item per page"
      onChange={(event:any) => {
        if (setPerPage) {
          setPerPage(parseInt(event.target.value, 10))
        }
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set('page', '1') // Go back to first page
        newSearchParams.set('per_page', event.target.value)

        router.push(`${pathname}?${newSearchParams}`)
      }}
    >
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={100}>100</MenuItem>
      <MenuItem value={250}>250</MenuItem>
    </Select>
  )
}
