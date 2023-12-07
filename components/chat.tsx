'use client'
import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {useState} from "react";
export function Chat({ id, messages = [{id:"1234567", role:"function", content:'toto'}], className }: any) {
  const [previewTokenDialog, setPreviewTokenDialog] = useState(false)
  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
          <ChatList messages={messages} />
      </div>
      <Dialog open={previewTokenDialog} onOpenChange={setPreviewTokenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your OpenAI Key</DialogTitle>
            <DialogDescription>
              If you have not obtained your OpenAI API key, you can do so by{' '}
              <a
                href="https://platform.openai.com/signup/"
                className="underline"
              >
                signing up
              </a>{' '}
              on the OpenAI website. This is only necessary for preview
              environments so that the open source community can test the app.
              The token will be saved to your browser&apos;s local storage under
              the name <code className="font-mono">ai-token</code>.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
